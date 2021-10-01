import jsonld from "jsonld";
import {
  getId,
  getValue,
  getMultiLangString,
  selectByType,
  unpackLangStringToProp,
  selectStrings,
  selectByIri,
  getValues,
} from "../app-service/jsonld/properties";
import {
  CREATIVE_COMMONS,
  DCATAP,
  DCTERMS,
  FOAF,
  PU,
  VCARD,
} from "../app-service/vocabulary";
import {
  createDataset,
  SPATIAL_RUIAN,
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_URL,
} from "./dataset-model";
import {
  isRuian,
  isContinent,
  isCountry,
  isPlace,
} from "./edit/codelists/server-codelists";
import {getByIri} from "../app-service/jsonld";
import {
  createDistribution,
  DIST_TYPE_FILE,
  DIST_TYPE_SERVICE,
} from "./distribution-model";

export function importFromJsonLd(jsonLdContent) {
  return jsonld().flatten(jsonLdContent).then(flatJsonLd => {
    const datasetEntities = selectByType(flatJsonLd, DCATAP.Dataset);
    if (datasetEntities.length !== 1) {
      throw new Error(
        "Invalid number of dataset records (" + datasetEntities.length + ")");
    }
    const language = selectLanguage(flatJsonLd);
    const datasetEntity = datasetEntities[0];
    const dataset = {
      ...createDataset(),
      ...unpackLangStringToProp(
        "title", language,
        getMultiLangString(datasetEntity, DCTERMS.title)),
      ...unpackLangStringToProp(
        "description", language,
        getMultiLangString(datasetEntity, DCTERMS.description)),
      "iri": getId(datasetEntity),
      "publisher": getValue(datasetEntity, DCTERMS.publisher),
      //
      "accrual_periodicity": getValue(
        datasetEntity, DCTERMS.accrualPeriodicity) || "",
      "temporal_resolution": getValue(
        datasetEntity, DCATAP.temporalResolution) || "",
      "spatial_resolution_meters": getValue(
        datasetEntity, DCATAP.spatialResolutionInMeters) || "",
      "documentation": getValue(datasetEntity, FOAF.page) || "",
      "spatial": loadSpatial(flatJsonLd, datasetEntity),
      "ofn": getValues(datasetEntity, DCTERMS.conformsTo) || [],
      "language": language,
      //
      ...loadTemporal(flatJsonLd, datasetEntity),
      ...loadContactPoint(flatJsonLd, datasetEntity),
      ...loadThemes(datasetEntity),
      ...loadKeywords(datasetEntity, language),
    };
    const distributions = loadDistributions(
      flatJsonLd, datasetEntity, language);
    return {
      "dataset": dataset,
      "distributions": distributions,
    };
  });
}

function loadKeywords(datasetEntity, language) {
  const values = getMultiLangString(datasetEntity, DCATAP.keyword);
  //
  const stringPrimary = selectStrings(values, "en");
  const stringSecondary = selectStrings(values, language);
  return {
    "keywords_cs": stringPrimary,
    "keywords_en": stringSecondary,
  };
}

function loadTemporal(flatJsonLd, datasetEntity) {
  const temporalIri = getValue(datasetEntity, DCTERMS.temporal);
  if (temporalIri === null || temporalIri === undefined) {
    return {};
  }
  const entities = selectByIri(flatJsonLd, temporalIri);
  if (entities.length < 1) {
    console.log("No temporal object for:", temporalIri);
    return {};
  }
  const temporal = entities[0];
  return {
    "temporal_start": getValue(temporal, DCATAP.startDate) || "",
    "temporal_end": getValue(temporal, DCATAP.endDate) || "",
  };
}

function loadContactPoint(flatJsonLd, datasetEntity) {
  const contactIri = getValue(datasetEntity, DCATAP.contactPoint);
  if (contactIri === undefined) {
    return {};
  }
  const entities = selectByIri(flatJsonLd, contactIri);
  if (entities.length < 1) {
    return {};
  }
  const contact = entities[0];
  return {
    "contact_point_name": getValue(contact, VCARD.fn) || "",
    "contact_point_email": getEmail(contact),
  };
}

function getEmail(contact) {
  let email = getValue(contact, VCARD.hasEmail) || "";
  if (email.toLowerCase().startsWith("mailto:")) {
    email = email.substr("mailto:".length);
  }
  return email;
}

function loadThemes(datasetEntity) {
  const themes = [];
  const datasetThemes = [];
  const customThemes = [];
  for (let theme of getValues(datasetEntity, DCATAP.theme)) {
    if (isDatasetTheme(theme)) {
      datasetThemes.push(theme);
    } else if (isEurovocTheme(theme)) {
      themes.push(theme);
    } else {
      customThemes.push(theme);
    }
  }
  return {
    "themes": themes,
    "dataset_themes": datasetThemes,
    "dataset_custom_themes": customThemes,
  };
}

function isDatasetTheme(theme) {
  const prefix = "http://publications.europa.eu/resource/authority/data-theme/";
  return theme.startsWith(prefix);
}

function isEurovocTheme(theme) {
  const prefix = "http://eurovoc.europa.eu/";
  return theme.startsWith(prefix);
}

function loadSpatial(flatJsonLd, datasetEntity) {
  const spatialIris = new Set(getValues(datasetEntity, DCTERMS.spatial));
  const result = [];
  for (let iri of spatialIris) {
    const spatial = {
      "url": iri,
    };
    if (isRuian(iri)) {
      spatial["type"] = SPATIAL_RUIAN;
    } else if (isContinent(iri)) {
      spatial["type"] = SPATIAL_CONTINENT;
    } else if (isCountry(iri)) {
      spatial["type"] = SPATIAL_COUNTRY;
    } else if (isPlace(iri)) {
      spatial["type"] = SPATIAL_PLACE;
    } else {
      spatial["type"] = SPATIAL_URL;
    }
    result.push(spatial);
  }
  return result;
}

function loadDistributions(flatJsonLd, datasetEntity, language) {
  return getValues(datasetEntity, DCATAP.distribution)
    .map(iri => getByIri(flatJsonLd, iri))
    .filter(entity => entity !== undefined)
    .map(entity => loadDistribution(flatJsonLd, entity, language));
}

function loadDistribution(flatJsonLd, distributionEntity, language) {
  const service = getService(flatJsonLd, distributionEntity);
  const endpointUrl = getEndpointUrl(service);
  const distribution = {
    ...createDistribution(),
    ...unpackLangStringToProp(
      "title", language,
      getMultiLangString(distributionEntity, DCTERMS.title)),
    ...parseTermsOfUse(flatJsonLd, distributionEntity),
    //
    "url": getValue(distributionEntity, DCATAP.downloadURL) || "",
    "format": getValue(distributionEntity, DCTERMS.format) || "",
    "media_type": getValue(distributionEntity, DCATAP.mediaType) || "",
    "schema": getValue(distributionEntity, DCTERMS.conformsTo) || "",
    "package_format":
      getValue(distributionEntity, DCATAP.packageFormat) || "",
    "compress_format":
      getValue(distributionEntity, DCATAP.compressFormat) || "",
    "service_iri": service ? getId(service) : "",
    "service_endpoint_url": endpointUrl || "",
    "service_description": service
      ? (getValue(service, DCATAP.endpointDescription) || "")
      : "",
    "service_conforms_to": service
      ? (getValue(service, DCTERMS.conformsTo) || "")
      : "",
    "type": endpointUrl ? DIST_TYPE_SERVICE : DIST_TYPE_FILE,
  };
  const iri = getId(distributionEntity);
  if (iri !== undefined && iri !== null && iri !== "" && !iri.startsWith("_")) {
    distribution["iri"] = iri;
  }
  return distribution;
}

function getService(flatJsonLd, distributionEntity) {
  const iri = getValue(distributionEntity, DCATAP.accessService);
  if (iri === undefined) {
    return undefined;
  }
  return getByIri(flatJsonLd, iri);
}

function getEndpointUrl(service) {
  if (service === undefined) {
    return undefined;
  }
  return getValue(service, DCATAP.endpointURL);
}

function parseTermsOfUse(flatJsonLd, distribution) {

  const iri = getValue(distribution, PU.specifikace);
  if (iri === undefined) {
    return {};
  }

  const termsOfUse = getByIri(flatJsonLd, iri);
  if (termsOfUse === undefined) {
    console.log("No terms of use object for:", iri);
    return {};
  }

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
    "license_author_name": authorName || "",
    "license_author_custom": authorCustom,
    "license_db_type": dbType,
    "license_db_name": dbName || "",
    "license_db_custom": dbCustom,
    "license_specialdb_type": specialDbType,
    "license_specialdb_custom": specialDbCustom,
    "license_personal_type": parsePersonalData(termsOfUse),
  };
}

function mapLicenseIriToValue(iri) {
  const mapping = {
    [PU.obsahujeViceAutorskychDel]: "MULTI",
    [CREATIVE_COMMONS.BY_40]: "CC BY",
    [PU.neobsahujeAutorskaDila]: "NO",
    [CREATIVE_COMMONS.PUBLIC_ZERO_10]: "CC0",
    [PU.neniAutorskopravneChranenouDatabazi]: "NO",
    [PU.neniChranenazvlastnimPravemPorizovateleDatabaze]: "NO",
  };
  const value = mapping[iri];
  if (value === undefined) {
    return "CUSTOM";
  } else {
    return value;
  }
}

function parsePersonalData(termsOfUse) {
  const iri = getValue(termsOfUse, PU.osobniUdaje);
  if (PU.obsahujeOsobniUdaje === iri) {
    return "YES";
  } else if (PU.neobsahujeOsobniUdaje === iri) {
    return "NO";
  } else {
    return "UNKNOWN";
  }
}

/**
 * Scan given flat JSON-LD document and search for all languages and
 * return the one most common.
 */
function selectLanguage(flatJsonLd) {
  const languages = [...new Set(collectLanguages(flatJsonLd))];
  if (languages.length > 1) {
    alert(
      "Multiple languages detected: " + JSON.stringify(languages)
      + " Only 'en' and one language expected.");
  }
  if (languages.length === 0) {
    return "";
  }
  return languages[0];
}

function collectLanguages(value, ignore = "en") {
  let result = [];
  if (Array.isArray(value)) {
    for (const item of value) {
      result = [
        ...result,
        ...collectLanguages(item),
      ];
    }
  }
  if (typeof value === "object" && value !== null) {
    if (value["@language"]) {
      const language = value["@language"].toLowerCase();
      if (language === ignore) {
        return [];
      } else {
        return [language];
      }
    } else {
      for (let item of Object.values(value)) {
        result = [
          ...result,
          ...collectLanguages(item),
        ];
      }
    }
  }
  return result;
}
