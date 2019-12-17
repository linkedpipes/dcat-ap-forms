import {getRemoteJson} from "@/app-service/http";
import {
  normalize,
  getDefaultGraphData,
  getByType,
  getValue,
  getValues,
  getByIri,
  getId
} from "@/app-service/jsonld";
import {
  DCTERMS,
  DCATAP,
  FOAF,
  VCARD,
  SCHEMA,
  PU,
  SKOS
} from "@/app-service/vocabulary";
import {fetchLabelFromCodeList} from "./edit/codelists/local-storage";
import {typeFromUrl} from "./edit/codelists/ruian-type";
import {parseDump} from "./edit/loader";

function update_url(url) {
  if (DEREFERENCE_PROXY === "") {
    return url;
  } else {
    return DEREFERENCE_PROXY.replace("{}", encodeURIComponent(url));
  }
}

export function importDataset(url, lang, codelist, datasetRecordEdit) {
  return getRemoteJsonLd(url).then((response) => {
    const graphData = getDefaultGraphData(normalize(response.json));
    console.log(graphData);
    const dataset = getByType(graphData, DCATAP.Dataset)[0];
    if (dataset === undefined) {
      throw {"error": "FETCH"};
    }

    let datasetModel = {};
    let distributionsModel = [];

    parseDump(dataset, datasetModel, distributionsModel, lang, codelist, datasetRecordEdit);

    return {
      "dataset": datasetModel,
      "distributions": distributionsModel
    }
  });
}

function getRemoteJsonLd(url) {
  return getRemoteJson(update_url(url), "application/ld+json");
}

function obtainsResources(graphData, referenceEntities) {
  return mapPromises(
    referenceEntities, (iri) => resolveEntity(graphData, iri), true);
}

function mapPromises(keys, func, catchSilent) {
  return keys.reduce((promise, key) => promise.then(
    (output) => func(key)
      .then(response => {
        output[key] = response;
        return output;
      })
      .catch(error => {
        if (catchSilent) {
          output[key] = error;
          return output;
        } else {
          throw error;
        }
      })
  )
  , Promise.resolve([]));
}

function resolveEntity(data, iri) {
  const entity = getByIri(data, iri);
  if (entity === undefined) {
    return getRemoteJson(update_url(iri), "application/ld+json");
  } else {
    // Fake fetch response with entity.
    return Promise.resolve({"json": {"@graph": [entity]}})
  }
}

function parseDataset(dataset) {
  return {
    "iri" : getId(dataset),
    "title": getValue(dataset, DCTERMS.title),
    "description": getValue(dataset, DCTERMS.description),
    "accrual_periodicity": getValue(dataset, DCTERMS.accrualPeriodicity),
    "documentation": getValue(dataset, FOAF.page),
    "keywords": getValues(dataset, DCATAP.keyword),
    //
    "ruian_type": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
    "ruian": "",
    //
    ...parseSpatial(getValues(dataset, DCTERMS.spatial))
  }
}

function parseSpatial(values) {
  // https://linked.cuzk.cz/resource/ruian/stat/1
  let url = undefined;
  for (let index in values) {
    if (!values.hasOwnProperty(index)) {
      continue;
    }
    // We can not dereference, so we manually parse instead.
    if (!values[index].startsWith("https://linked.cuzk.cz/resource/ruian")) {
      continue;
    }
    url = values[index];
    break;
  }
  if (url === undefined) {
    return {};
  }
  let type = typeFromUrl(url);
  if (type === undefined) {
    console.warn("Can't resolve type for:", url);
  }
  return {
    "ruian": url,
    "ruian_type": type
  };
}

function parseThemes(iris) {
  const output = {
    "dataset_theme": "",
    "themes": []
  };
  iris.forEach((iri) => {
    const isDatasetTheme = iri.startsWith(
      "http://publications.europa.eu/resource/authority/data-theme/");
    if (isDatasetTheme) {
      output["dataset_theme"] = iri;
    } else {
      output["themes"].push(iri);
    }
  });
  return output;
}

function parseContactPoint(iri, response) {
  if (iri === undefined || response.error || response.json === undefined) {
    return {};
  }
  const graphData = getDefaultGraphData(normalize(response.json));
  const entity = getByIri(graphData, iri);
  if (entity === undefined) {
    return {};
  }
  return {
    "contact_point_name": getValue(entity, VCARD.fn),
    "contact_point_email": getValue(entity, VCARD.hasEmail)
  }
}

function parseTemporal(iri, response) {
  if (iri === undefined || response.error || response.json === undefined) {
    return {};
  }
  const graphData = getDefaultGraphData(normalize(response.json));
  const entity = getByIri(graphData, iri);
  if (entity === undefined) {
    return {}
  }
  return {
    "temporal_start": getValue(entity, DCATAP.startDate),
    "temporal_end": getValue(entity, DCATAP.endDate)
  }
}

function parseDistributions(graphData, iris, responses) {
  return mapPromises(
    iris,
    (iri) => parseDistribution(graphData, iri, responses[iri]),
    false);
}

function parseDistribution(data, iri, response) {
  if (response.error || response.json === undefined) {
    return Promise.resolve({});
  }

  const graphData = getDefaultGraphData(normalize(response.json));
  const distribution = getByIri(graphData, iri);
  if (distribution === undefined) {
    return Promise.reject({
      "error": "INVALID_DATA",
      "message": "Missing distribution: " + iri
    })
  }

  const termsOfUseIri = getValue(distribution, PU.specifikace);

  if (termsOfUseIri === undefined) {
    return Promise.resolve(createDistributionObject(distribution));
  }

  return resolveEntity(data, termsOfUseIri).then((response) => ({
    ...createDistributionObject(distribution),
    ...parseTermsOfUse(termsOfUseIri, response)
  }));
}

function createDistributionObject(distribution) {
  const conformsTo = getValue(distribution, DCTERMS.conformsTo);
  const title = getValue(distribution, DCTERMS.title);
  return {
    "url": getValue(distribution, DCATAP.downloadURL),
    "format": undefinedToEmpty(getValue(distribution, DCTERMS.format)),
    "media_type": undefinedToEmpty(getValue(distribution, DCATAP.mediaType)),
    "schema": undefinedToEmpty(conformsTo),
    "title": undefinedToEmpty(title),
    //
    "license_author_type": "NO",
    "license_author_name": "",
    "license_author_custom": "",
    "license_db_type": "NO",
    "license_db_name": "",
    "license_db_custom": "",
    "license_specialdb_type": "NO",
    "license_specialdb_custom": "",
    "license_personal_type": "NO",
  }
}

function parseTermsOfUse(iri, response) {
  if (response.error || response.json === undefined) {
    return {};
  }
  const graphData = getDefaultGraphData(normalize(response.json));
  const termsOfUse = getByIri(graphData, iri);

  const author = getValue(termsOfUse, PU.autorskeDilo);
  const authorName = getValue(termsOfUse, PU.autor);
  const authorType = mapLicenseIriToValue(author);
  const authorCustom = authorType === "CUSTOM" ? author : "";

  const db = getValue(termsOfUse, PU.databazeJakoAutorskeDilo);
  const dbName = getValue(termsOfUse, PU.autorDatabaze);
  const dbType = mapLicenseIriToValue(db);
  const dbCustom = dbType === "CUSTOM" ? db : "";

  const specialDb = getValue(termsOfUse, PU.databazeChranenaZvlastnimiPravy);
  const specialDbType = mapLicenseIriToValue(specialDb);
  const specialDbCustom = specialDbType === "CUSTOM" ? specialDb : "";

  return {
    "license_author_type": authorType,
    "license_author_name": undefinedToEmpty(authorName),
    "license_author_custom": authorCustom,
    "license_db_type": dbType,
    "license_db_name": undefinedToEmpty(dbName),
    "license_db_custom": dbCustom,
    "license_specialdb_type": specialDbType,
    "license_specialdb_custom": specialDbCustom,
    "license_personal_type": parsePersonalData(termsOfUse)
  };
}

function mapLicenseIriToValue(iri) {
  const mapping = {
    "https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/": "MULTI",
    "https://creativecommons.org/licenses/by/4.0/": "CC BY",
    "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/": "NO",
    "https://creativecommons.org/publicdomain/zero/1.0/": "CC0",
    "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/": "NO",
    "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/": "NO"
  };
  const value = mapping[iri];
  if (value === undefined) {
    return "CUSTOM";
  } else {
    return value;
  }
}

function undefinedToEmpty(value) {
  return value === undefined ? "" : value;
}

function parsePersonalData(termsOfUse) {
  const iri = getValue(termsOfUse, PU.osobniUdaje);
  if ("https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/" === iri) {
    return "YES";
  } else if ("https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/" === iri) {
    return "NO";
  } else {
    return "UNKNOWN";
  }
}

export function importMinimalDataset(url) {
  return getRemoteJsonLd(url).then((response) => {
    const graphData = getDefaultGraphData(normalize(response.json));
    const dataset = getByType(graphData, DCATAP.Dataset)[0];
    if (dataset === undefined) {
      throw {"error": "FETCH"};
    }

    const datasetModel = {
      ...parseDataset(dataset),
    };

    return {
      "dataset": datasetModel,
    };
  });
}

export function loadLabelsForDistributions(distributions, lang) {
  const formats = new Set();
  const mediaTypes = new Set();
  distributions.forEach((distribution) => {
    formats.add(distribution.format);
    mediaTypes.add(distribution.media_type);
  });
  formats.forEach((iri) => {
    fetchLabelFromCodeList("file-type", iri, lang);
  });
  mediaTypes.forEach((iri) => {
    fetchLabelFromCodeList("media-types", iri, lang);
  });
}
