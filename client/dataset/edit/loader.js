import {url} from "../../app-service/validators";
import {getLabel as continentsToLabel, prefix as continentPrefix} from "./codelists/continents";
import {getLabel as countriesToLabel, prefix as countryPrefix} from "./codelists/countries";
import {getLabel as placesToLabel, prefix as placePrefix} from "./codelists/places";
import {createDistribution} from "./distribution-model";
import {getItem} from "./codelists/local-storage";
import {
  DCTERMS,
  DCATAP,
  FOAF,
  VCARD,
  PU,
  CREATIVE_COMMONS,
  SCHEMA
} from "../../app-service/vocabulary";
import {FRAME} from "../../app-service/jsonld/frame";

function tryGet(key, object, nestedKey="@id", single=true) {
  try {
    if (single) {
      return getSingle(object[key])[nestedKey];
    } else {
      return object[key][nestedKey];
    }
  } catch (KeyError) {
    return null;
  }
}

function ruianLabel(iri, codelist, lang) {
  const value = getItem(codelist, "ruian", iri, lang);
  if (value === undefined) {
    return iri;
  } else {
    return value;
  }
}

function parseLicense(distribution, spec) {
  const autorskeDilo = tryGet(PU.autorskeDilo, spec);
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

  const db = tryGet(PU.databazeJakoAutorskeDilo, spec);
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

  const zvlastni = tryGet(PU.databazeChranenaZvlastnimiPravy, spec);
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

  const osobni = tryGet(PU.osobniUdaje, spec);
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
      if ("@language" in title) {
        if (title["@language"] === "cs") {
          dataset.title_cs = title["@value"];
        } else if (title["@language"] === "en") {
          dataset.title_en = title["@value"];
        }
      } else {
        dataset.title_cs = title["@value"];
      }
    });
  } else {  // for old files without multilang titles
    if ((typeof titles) === "string") {
      dataset.title_cs = titles;
    } else {
      dataset.title_cs = titles["@value"];
    }
  }
}

function loadDescriptions(dataset, graphData) {
  const descriptions = graphData[DCTERMS.description];
  if (Array.isArray(descriptions)) {
    descriptions.forEach((title) => {
      if ("@language" in title) {
        if (title["@language"] === "cs") {
          dataset.description_cs = title["@value"];
        } else if (title["@language"] === "en") {
          dataset.description_en = title["@value"];
        }
      } else {
        dataset.description_cs = title["@value"];
      }
    });
  } else {  // for old files without multilang descriptions
    if ((typeof descriptions) === "string") {
      dataset.description_cs = descriptions;
    } else {
      dataset.description_cs = descriptions["@value"];
    }
  }
}

function loadKeyword(dataset, keyword, lang) {
  let key = {};
  if (Array.isArray(keyword)) {
    keyword.forEach(function (version, _) {
      if ("@language" in version) {
        const l = version["@language"];
        key[l] = version["@value"];
      } else {
        key["cs"] = version["@value"];
      }
    });
  } else { // for old files without multilang keywords
    key[lang] = keyword["@value"];
  }
  if (!("en" in key)) key["en"] = "";
  if (!("cs" in key)) key["cs"] = "";
  dataset.keywords.push(key);
}

function loadKeywords(dataset, graphData, lang) {
  const keywords = graphData[DCATAP.keyword];

  dataset.keywords = [];

  if (!Array.isArray(keywords)) {
    let key = {"cs": "", "en": ""}
    if ((typeof keywords) === "string") {
      key[lang] = keywords;
      dataset.keywords.push(key);
    } else {
      loadKeyword(dataset, keywords, lang);
    }
    return;
  }

  if (keywords.length === 2) {
    if (keywords[0]["@language"] !== keywords[1]["@language"]) {
      loadKeyword(dataset, keywords, lang);
      return;
    }
  }

  keywords.forEach((keyword) => {
    loadKeyword(dataset, keyword, lang);
  });
}

function loadSpatial(dataset, graphData, codelist, lang) {
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

    } else if ((typeof  distribution[DCTERMS.title] === "string")) {
      distr_title["cs"] = distribution[DCTERMS.title];
    } else {
      const l = distribution[DCTERMS.title]["@language"];
      distr_title[l] = distribution[DCTERMS.title]["@value"];
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

  if (PU.specifikace in distribution) {
    parseLicense(d, getSingle(distribution[PU.specifikace]));
  }

  return d;
}

function loadDistributions(distributions, graphData) {
  distributions.splice(0, distributions.length, createDistribution()); //remove all and add a dummy

  if (Array.isArray(getSingle(graphData[DCATAP.distribution]))) {
    getSingle(graphData[DCATAP.distribution]).forEach((distribution) => {
      if (null !== distribution) distributions.splice(0, 0, loadDistribution(distribution))
    });
  } else if (Array.isArray(graphData[DCATAP.distribution])) {
    graphData[DCATAP.distribution].forEach((distribution) => {
      if (null !== distribution) distributions.splice(0, 0, loadDistribution(distribution))
    });
  } else {
    const distribution = graphData[DCATAP.distribution];
    if (null !== distribution) distributions.splice(0, 0, loadDistribution(distribution));
  }

  if (distributions.length > 0) {
    distributions.pop();
  } //remove the dummy
}

function loadTheme(dataset, theme) {
  const t = theme["@id"];
  if (t.startsWith("http://publications.europa.eu/resource/authority/data-theme/")) {
    dataset.dataset_themes.push(t)
  } else if (t.startsWith("http://eurovoc.europa.eu/")){
    dataset.themes.push(t);
  } else {
    dataset.dataset_custom_themes.push(t)
  }
}

function loadThemes(dataset, graphData) {
  dataset.themes = [];
  dataset.dataset_themes = [];
  dataset.dataset_custom_themes = [];
  const themes = graphData[DCATAP.theme];

  if (themes) {
    if (!Array.isArray(themes)) {
      if ("@id" in themes) {
        loadTheme(dataset, themes);
      }
      return;
    }

    themes.forEach((theme) => {
      loadTheme(dataset, theme);
    });
  }
}

function loadTemporal(dataset, graphData) {
  if (DCTERMS.temporal in graphData) {
    const temporal = getSingle(getSingle(graphData[DCTERMS.temporal]));
    if (DCATAP.startDate in temporal) {
      dataset.temporal_start = getSingle(temporal[DCATAP.startDate])["@value"];
    } else if (SCHEMA.startDate in temporal) {
      dataset.temporal_start = getSingle(temporal[SCHEMA.startDate])["@value"];
    }
    if (DCATAP.endDate in temporal) {
      dataset.temporal_end = getSingle(temporal[DCATAP.endDate])["@value"];
    } else if (SCHEMA.endDate in temporal) {
      dataset.temporal_end = getSingle(temporal[SCHEMA.endDate])["@value"];
    }
  }
}

function loadContactPoint(dataset, graphData) {
  if (DCATAP.contactPoint in graphData) {
    const contact = getSingle(graphData[DCATAP.contactPoint]);
    if (VCARD.fn in contact) {
      if ((typeof contact[VCARD.fn]) === "string") {
        dataset.contact_point_name = contact[VCARD.fn];
      } else {
        dataset.contact_point_name = contact[VCARD.fn]["@value"];
      }
    }

    if (VCARD.hasEmail in contact) {
      dataset.contact_point_email = contact[VCARD.hasEmail];
    }
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

function getSingle(obj) {
  if (Array.isArray(obj)) {
    return obj[0];
  } else {
    return obj;
  }
}

export function parseDump(graphData, dataset, distributions, lang, codelist, src) {
  return new Promise((resolve, reject) => {
    const jsonld = require("jsonld");
    jsonld.frame(graphData, FRAME).then((graph) => {

      if ("@id" in graphData && url(graphData["@id"])) dataset.iri = graph["@id"];

      dataset.accrual_periodicity = getSingle(graph[DCTERMS.accrualPeriodicity])["@id"];
      dataset.temporal_resolution = tryGet(DCATAP.temporalResolution, graph, "@value", true);
      dataset.spatial_resolution_meters = tryGet(DCATAP.spatialResolutionInMeters, graph, "@value", true);
      dataset.documentation = tryGet(FOAF.page, graph, "@id", true);

      loadTitles(dataset, graph);
      loadDescriptions(dataset, graph);
      loadKeywords(dataset, graph, lang);
      loadTemporal(dataset, graph);
      loadContactPoint(dataset, graph);
      loadThemes(dataset, graph);
      loadOfn(dataset, graph);
      loadSpatial(dataset, graph, codelist, lang);
      loadDistributions(distributions, graph);

      if (src) {
        src.$refs.themes.reload(dataset.themes);
      }

      resolve({
        "dataset": dataset,
        "distributions": distributions
      })
      //});
    });
  });
}