import {getLabel as continentsToLabel, prefix as continentPrefix} from "./codelists/continents";
import {getLabel as countriesToLabel, prefix as countryPrefix} from "./codelists/countries";
import {getLabel as placesToLabel, prefix as placePrefix} from "./codelists/places";
import {createDistribution} from "./distribution-model";
import {tryGet} from "./dataset-model";
import {getItem} from "./codelists/local-storage";

function ruianLabel(iri, codelist, lang) {
  const value = getItem(codelist, "ruian", iri, lang);
  if (value === undefined) {
    return iri;
  } else {
    return value;
  }
}

function parseLicense(distribution, spec) {
  const autorskeDilo = spec[PU.autorskeDilo]["@id"];
  switch (autorskeDilo) {
  case PU.obsahujeViceAutorskychDel:
    distribution.license_author_type = "MULTI";
    break;
  case CREATIVE_COMMONS.BY_40:
    distribution.license_author_type = "CC BY";
    distribution.license_author_name = spec[PU.autor]["@value"];
    break;
  case PU.neobsahujeAutorskaDila:
    distribution.license_author_type = "NO";
    break;
  default:
    distribution.license_author_type = "CUSTOM";
    distribution.license_author_custom = autorskeDilo;
  }

  const db = spec[PU.databazeJakoAutorskeDilo]["@id"];
  switch (db) {
  case CREATIVE_COMMONS.BY_40:
    distribution.license_db_type = "CC BY";
    distribution.license_db_name = spec[PU.autorDatabaze]["@value"];
    break;
  case PU.neniAutorskopravneChranenouDatabazi:
    distribution.license_db_type = "NO";
    break;
  default:
    distribution.license_db_type = "CUSTOM";
    distribution.license_db_custom = db;
  }

  const zvlastni = spec[PU.databazeChranenaZvlastnimiPravy]["@id"];
  switch(zvlastni) {
  case CREATIVE_COMMONS.PUBLIC_ZERO_10:
    distribution.license_specialdb_type = "CC0";
    break;
  case PU.neniChranenazvlastnimPravemPorizovateleDatabaze:
    distribution.license_specialdb_type = "NO";
    break;
  default:
    distribution.license_specialdb_type = "CUSTOM";
    distribution.license_specialdb_custom = zvlastni;
  }

  const osobni = spec[PU.osobniUdaje]["@id"];
  switch (osobni) {
  case PU.obsahujeOsobniUdaje:
    distribution.license_personal_type = "YES";
    break;
  case PU.neobsahujeOsobniUdaje:
    distribution.license_personal_type = "NO";
    break;
  }
}

function loadTitles(dataset, graphData) {
  const titles = graphData[DCTERMS.title];
  if (Array.isArray(titles)) {
    titles.forEach((title) => {
      if (title["@language"] === "cs") {
        dataset.title_cs = title["@value"];
      } else if (title["@language"] === "en") {
        dataset.title_en = title["@value"];
      }
    });
  } else {  // for old files without multilang titles
    dataset.title_cs = titles["@value"];
  }
}

function loadDescriptions(dataset, graphData) {
  const descriptions = graphData[DCTERMS.description];
  if (Array.isArray(descriptions)) {
    descriptions.forEach((title) => {
      if (title["@language"] === "cs") {
        dataset.description_cs = title["@value"];
      } else if (title["@language"] === "en") {
        dataset.description_en = title["@value"];
      }
    });
  } else {  // for old files without multilang descriptions
    dataset.description_cs = descriptions["@value"];
  }
}

function loadKeywords(dataset, graphData) {
  const keywords = graphData[DCATAP.keyword];
  dataset.keywords = [];
  keywords.forEach((keyword) => {
    let key = {};
    if (Array.isArray(keyword)) {
      keyword.forEach(function (version, _) {
        const l = version["@language"];
        key[l] = version["@value"];
      });
    } else { // for old files without multilang keywords
      const l = keyword["@language"];
      key[l] = keyword["@value"];
    }
    if (!("en" in key)) key["en"] = "";
    dataset.keywords.push(key);
  });
}

function loadSpatial(dataset, graphData) {
  dataset.spatial = [];
  const spatial = graphData[DCTERMS.spatial];
  if (Array.isArray(spatial)) {
    spatial.forEach((graphItem) => {
      if (graphItem !== null) {
        let loadedItem = {
          "url": graphItem["@id"]
        };
        if (loadedItem["url"].startsWith("https://linked.cuzk.cz/resource/ruian/")) {
          loadedItem["type"] = "RUIAN";
          loadedItem["label"] = ruianLabel(loadedItem["url"], codelist, lang);
          loadedItem["ruian"] = graphItem["@id"];
        } else if (loadedItem["url"].startsWith(continentPrefix)) {
          loadedItem["type"] = "CONTINENT";
          loadedItem["label"] = continentsToLabel(loadedItem["url"], lang)
        } else if (loadedItem["url"].startsWith(countryPrefix)) {
          loadedItem["type"] = "COUNTRY";
          loadedItem["label"] = countriesToLabel(loadedItem["url"], lang)
        } else if (loadedItem["url"].startsWith(placePrefix)) {
          loadedItem["type"] = "PLACE";
          loadedItem["label"] = placesToLabel(loadedItem["url"], lang)
        } else {
          loadedItem["type"] = "URL"
        }
        dataset.spatial.push(loadedItem)
      }
    });
  } else {
    dataset.spatial.push({
      "type": "RUIAN",
      "label": ruianLabel(spatial["@id"], codelist, lang),
      "url": spatial["@id"],
      "ruian": spatial["@id"],
    });
  }
}

function loadDistribution(distribution) {
  let distr_title = {"cs": "", "en": ""};
  if (DCTERMS.title in distribution) {
    if (Array.isArray(distribution[DCTERMS.title])) {
      let distr_titles = distribution[DCTERMS.title]; // looks like this: [{"@language": "", "@value": ""}]

      distr_titles.forEach(function (t, _) {
        const l = t["@language"];
        distr_title[l] = t["@value"];
      });

    } else {
      distr_title["cs"] = distribution[DCTERMS.title];
    }
  }

  let fileOrService;
  const accessService = distribution[DCATAP.accessService];
  let endpointUrl = "";
  if (undefined !== accessService) {
    endpointUrl = accessService[DCATAP.endpointURL]["@id"];
    if (endpointUrl.length > 0) {
      fileOrService = "SERVICE";
    } else {
      fileOrService = "FILE";
    }
  } else {
    fileOrService = "FILE";
  }

  let d = createDistribution();
  d["compressFormat"] = tryGet(DCTERMS.compressFormat, distribution);
  d["format"] = tryGet(DCTERMS.format, distribution);
  d["media_type"] = tryGet(DCATAP.mediaType, distribution);
  d["packageFormat"] = tryGet(DCTERMS.packageFormat, distribution);
  d["schema"] = tryGet(DCTERMS.conformsTo, distribution);
  d["service_description"] = tryGet(DCATAP.endpointDescription, accessService);
  d["service_endpoint_url"] = endpointUrl;
  d["url"] = tryGet(DCATAP.downloadURL, distribution);
  d["title_cs"] = distr_title["cs"];
  if ("en" in distr_title) d["title_en"] = distr_title["en"];
  d["isFileOrService"] = fileOrService;

  parseLicense(d, distribution[PU.specifikace]);

  return d;
}

function loadDistributions(dataset, graphData) {
  distributions.splice(0, distributions.length, createDistribution()); //remove all and add a dummy
  graphData[DCATAP.distribution].forEach((distribution) =>
    distributions.splice(0, 0, loadDistribution(distribution))
  );

  if (distributions.length > 0) {
    distributions.pop();
  } //remove the dummy
}

function loadThemes(dataset, graphData) {
  dataset.themes = [];
  dataset.dataset_themes = [];
  dataset.dataset_custom_themes = [];
  const themes = graphData[DCATAP.theme];

  themes.forEach((theme) => {
    const t = theme["@id"];
    if (t.startsWith("http://publications.europa.eu/resource/authority/data-theme/")) {
      dataset.dataset_themes.push(t)
    } else if (t.startsWith("http://eurovoc.europa.eu/")){
      dataset.themes.push(t);
    } else {
      dataset.dataset_custom_themes.push(t)
    }
  });
}

function loadTemporal(dataset, graphData) {
  if (DCTERMS.temporal in graphData) {
    const temporal = graphData[DCTERMS.temporal];
    dataset.temporal_start = temporal[DCATAP.startDate]["@value"];
    dataset.temporal_end = temporal[DCATAP.endDate]["@value"];
  }
}

function loadContactPoint(dataset, graphData) {
  if (DCATAP.contactPoint in graphData) {
    const contact = graphData[DCATAP.contactPoint];
    dataset.contact_point_name = contact[VCARD.fn]["@value"];
    dataset.contact_point_email = contact[VCARD.hasEmail];
  }
}

function loadOfn(dataset, graphData) {
  dataset.ofn = [];
  if (DCTERMS.conformsTo in graphData) {
    const conforms = graphData[DCTERMS.conformsTo];
    conforms.forEach(function(ofn, _) {
      dataset.ofn.push(ofn["@id"]);
    });
  }
}

export function parseDump(graphData, dataset, distributions, lang, codelist, src) {
  if ("@id" in graphData && url(graphData["@id"])) dataset.iri = graphData["@id"];

  dataset.accrual_periodicity = graphData[DCTERMS.accrualPeriodicity]["@id"];
  dataset.temporal_resolution = tryGet(DCATAP.temporalResolution, graphData, "@value");
  dataset.spatial_resolution_meters = tryGet(DCATAP.spatialResolutionInMeters, graphData, "@value");
  dataset.documentation = tryGet(FOAF.page, graphData);

  loadTitles(dataset, graphData);
  loadDescriptions(dataset, graphData);
  loadKeywords(dataset, graphData);
  loadTemporal(dataset, graphData);
  loadContactPoint(dataset, graphData);
  loadThemes(dataset, graphData);
  loadOfn(dataset, graphData);
  loadSpatial(dataset, graphData);
  loadDistributions(dataset, graphData);

  src.$refs.themes.reload(dataset.themes);
}