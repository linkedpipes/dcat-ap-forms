import {apply, applyEach, email, provided, url, temporal, decimal} from "@/app-service/validators";
import dataset from "./dataset";
import {getItem} from "./codelists/local-storage";

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
  parseDataset, parseThemes, parseContactPoint, parseTemporal, parseDistributions
} from "@/dataset/import-from-url";

import {
  DCTERMS,
  DCATAP,
  FOAF,
  VCARD,
  SCHEMA,
  PU,
  SKOS,
  CREATIVE_COMMONS,
} from "@/app-service/vocabulary";

export function createDataset() {
  return decorateDataset({
    "iri": undefined,
    "title_cs": "",
    "title_en": "",
    "description_cs": "",
    "description_en": "",
    "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
    "spatial": [],
    "temporal_start": "",
    "temporal_end": "",
    "temporal_resolution": "",
    "spatial_resolution_meters": "",
    "documentation": "",
    "dataset_themes": [],
    "dataset_custom_themes": [],
    "themes": [],
    "ofn": [],
    "contact_point_name": "",
    "contact_point_email": "",
    "keywords": [],

    "tmp_keyword_cs": "",
    "tmp_keyword_en": "",

    "tmp_file": null,
    "tmp": null,
  })
}

export function decorateDataset(dataset) {
  return {
    ...dataset,
    "$validators": {
      "force": false
    }
  }
}

export function createDatasetValidators() {
  return {
    "err_title_cs": apply(
      (t) => t.dataset, "title_cs",
      provided,
      "dataset_title_invalid"),
    "err_description_cs": apply(
      (t) => t.dataset, "description_cs",
      provided,
      "dataset_description_invalid"),
    "err_dataset_spatial": apply(
      (t) => t.dataset, "spatial",
      (value) => value.length > 0,
      "dataset_spatial_invalid"),
    "err_keywords": apply(
      (t) => t.dataset, "keywords",
      (value) => value.length > 0,
      "keywords_error"),
    "err_contact_point_email": apply(
      (t) => t.dataset, "contact_point_email",
      email,
      "contact_point_email_invalid"),
    "err_documentation": apply(
      (t) => t.dataset, "documentation",
      url,
      "documentation_invalid"),
    "err_dataset_theme": apply(
      (t) => t.dataset, "dataset_themes",
      (value) => value.length > 0,
      "dataset_theme_invalid"),
    "err_dataset_theme_custom": applyEach(
      (t) => t.dataset, "dataset_custom_themes",
      url, "dataset_theme_invalid_url"),
    "err_dataset_ofn": applyEach(
      (t) => t.dataset, "ofn",
      url, "dataset_theme_invalid_url"
    ),
    "err_temporal": apply(
      (t) => t.dataset, "temporal_resolution",
      temporal,
      "temporal_invalid"),
    "err_spatial": apply(
      (t) => t.dataset, "spatial_resolution_meters",
      decimal,
      "spatial_invalid"),
  };
}


export function isDatasetValid(dataset) {
  return provided(dataset.title_cs)  &&
        provided(dataset.description_cs)  &&
        provided(dataset.spatial) &&
        provided(dataset.keywords) &&
        provided(dataset.dataset_themes) &&
        allCustomThemesValid(dataset.dataset_custom_theme) &&
        allCustomThemesValid(dataset.ofn) &&
        isValidTemporalString(dataset.temporal_resolution) &&
        isValidSpatialString(dataset.spatial_resolution_meters);
}

function isValidTemporalString(value) {
  return !provided(value) || /^(-?)P(?=.)((\d+)Y)?((\d+)M)?((\d+)D)?(T(?=.)((\d+)H)?((\d+)M)?(\d*(\.\d+)?S)?)?$/.test(value)
}

function  isValidSpatialString(value) {
  return !provided(value) || /^[-+]?[0-9]+(\.[0-9]+)?$/.test(value);
}

function allCustomThemesValid(value) {
  if (!provided(value)) return true;
  var bundle = {"isValid": true};
  value.forEach(function (item) { this.isValid = this.isValid & url(item) }, bundle);
  return bundle.isValid;
}

function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

function not_present_multi(lst, multi) {
  return lst.some(function (item) {
    var bundle = { "value": false};
    Object.keys(multi).forEach(function(key) { //loop over 2 lang tags
      if (key in item) {
        if ((!isEmpty(item[key]) || !isEmpty(multi[key])) && (item[key] === multi[key])) {
          // will report true if we match any respective language equivalent regardless of the other
          // so a match in the Czech version of the keyword or a match in the English version of the keyword
          // will yield a duplicity
          this.value = true;
        }
      }
    }, bundle);
    return bundle.value;
  });
}

export function do_addKeyword(dataset) {
  const key_cs = dataset.tmp_keyword_cs;
  const key_en = dataset.tmp_keyword_en;
  if (!key_cs) return;
  const multilang = {
    "cs": key_cs,
    "en": key_en
  }
  if (!not_present_multi(dataset.keywords, multilang)) dataset.keywords.push(multilang);
}

function create_spatial(type, url, label) {
  return {
    "type": type,
    "url": url,
    "label": label
  }
}

function not_present_single(lst, type, url) {
  return lst.some(function(item) {
    if ((item["type"] === type) && (item["url"] === url)) {return true}
    else return false;
  });
}

export function do_addSpatial(dataset, ruian_type, ruian, spatial_url, continent, country, place, active_tab, label) {

  if (active_tab === 0) {
    var bundle = {"present": false};
    dataset.spatial.forEach(function(item) {
      if ((item.type === "RUIAN") && (item.ruian === ruian)) {this.present = true}
    }, bundle);

    if (!bundle.present) {
      dataset.spatial.push({
        "type": "RUIAN",
        "ruian_type": ruian_type,
        "ruian": ruian,
        "label": label
      })
    }
  } else if (active_tab === 1) {
    if (!continent) return false;
    if (!not_present_single(dataset.spatial, "CONTINENT", continent)) dataset.spatial.push(create_spatial("CONTINENT", continent, label));
  } else if (active_tab === 2) {
    if (!country) return false;
    if (!not_present_single(dataset.spatial, "COUNTRY", country)) dataset.spatial.push(create_spatial("COUNTRY", country, label));
  } else if (active_tab === 3) {
    if (!place) return false;
    if (!not_present_single(dataset.spatial, "PLACE", place)) dataset.spatial.push(create_spatial("PLACE", place, label));
  } else if (active_tab === 4) {
    if (!spatial_url) return false;
    if (!not_present_single(dataset.spatial, "URL", spatial_url)) dataset.spatial.push({
      "type": "URL",
      "url": spatial_url
    })
  }
  return true;
}

// === Loading from file
export function tryGet(key, d, x="@id") {
  try {
    return d[key][x];
  } catch (KeyError) {
    return null;
  }
}

export function do_loadFile(file, dataset, distributions, lang, codelist, src) {
  var reader = new FileReader();
  reader.onload = function() {
    dataset.tmp_file = getDefaultGraphData(normalize(JSON.parse(reader.result)));
    parse_dump(dataset.tmp_file, dataset, distributions, lang, codelist, src);
  };
  reader.readAsText(file);
}

import {createDistribution} from "./distribution-model";
import {prefix as continentPrefix} from "./codelists/continents";
import {prefix as countryPrefix} from "./codelists/countries";
import {prefix as placePrefix} from "./codelists/places";
import {getLabel as continentsToLabel} from "./codelists/continents";
import {getLabel as countriesToLabel} from "./codelists/countries";
import {getLabel as placesToLabel} from "./codelists/places";
function ruianLabel(iri, codelist, lang) {
  const value = getItem(codelist, "ruian", iri, lang);
  if (value === undefined) {
    return iri;
  } else {
    return value;
  }
}

function parse_license(distribution, spec) {
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

function parse_dump(graphData, dataset, distributions, lang, codelist, src) {
  if ("@id" in graphData) if (url(graphData["@id"])) dataset.iri = graphData["@id"];
  const contactPoint = graphData[DCATAP.contactPoint];
  dataset.accrual_periodicity = graphData[DCTERMS.accrualPeriodicity]["@id"];
  dataset.temporal_resolution = tryGet(DCATAP.temporalResolution, graphData, "@value");
  dataset.spatial_resolution_meters = tryGet(DCATAP.spatialResolutionInMeters, graphData, "@value");
  dataset.documentation = tryGet(FOAF.page, graphData);

  const titles = graphData[DCTERMS.title];
  if (Array.isArray(titles)) {
    titles.forEach(function (title, _) {
      if (title["@language"] === "cs") {
        dataset.title_cs = title["@value"];
      } else if (title["@language"] === "en") {
        dataset.title_en = title["@value"];
      }
    });
  } else {  // legacy
    dataset.title_cs = titles["@value"];
  }

  const descriptions = graphData[DCTERMS.description];
  if (Array.isArray(descriptions)) {
    descriptions.forEach(function (title, _) {
      if (title["@language"] === "cs") {
        dataset.description_cs = title["@value"];
      } else if (title["@language"] === "en") {
        dataset.description_en = title["@value"];
      }
    });
  } else {  // legacy
    dataset.description_cs = descriptions["@value"];
  }

  const keywords = graphData[DCATAP.keyword];
  dataset.keywords = [];
  keywords.forEach(function (keyword, _) {
    var key = {};
    if (Array.isArray(keyword)) {
      keyword.forEach(function (version, _) {
        const l = version["@language"];
        const v = version["@value"];
        key[l] = v;
      });
    } else { // legacy
      const l = keyword["@language"];
      const v = keyword["@value"];
      key[l] = v;
    }
    if (!("en" in key)) key["en"] = "";
    dataset.keywords.push(key);
  });
  if (DCTERMS.temporal in graphData) {
    const temporal = graphData[DCTERMS.temporal];
    dataset.temporal_start = temporal[DCATAP.startDate]["@value"];
    dataset.temporal_end = temporal[DCATAP.endDate]["@value"];
  }

  if (DCATAP.contactPoint in graphData) {
    const contact = graphData[DCATAP.contactPoint];
    dataset.contact_point_name = contact[VCARD.fn]["@value"];
    dataset.contact_point_email = contact[VCARD.hasEmail];
  }

  dataset.themes = [];
  dataset.dataset_themes = [];
  dataset.dataset_custom_themes = [];
  const themes = graphData[DCATAP.theme];

  themes.forEach(function(theme, _) {
    const t = theme["@id"];
    if (t.startsWith("http://publications.europa.eu/resource/authority/data-theme/")) {
      dataset.dataset_themes.push(t)
    } else if (t.startsWith("http://eurovoc.europa.eu/")){
      dataset.themes.push(t);
    } else {
      dataset.dataset_custom_themes.push(t)
    }
  });

  dataset.ofn = [];
  if (DCTERMS.conformsTo in graphData) {
    const conforms = graphData[DCTERMS.conformsTo];
    conforms.forEach(function(ofn, _) {
      dataset.ofn.push(ofn["@id"]);
    });
  }

  dataset.spatial = [];
  const spatial = graphData[DCTERMS.spatial];
  if (Array.isArray(spatial)) {
    spatial.forEach(function (s, _) {
      if (s !== null) {
        var x = {
          "url": s["@id"]
        }
        if (x["url"].startsWith("https://linked.cuzk.cz/resource/ruian/")) {
          x["type"] = "RUIAN";
          x["label"] = ruianLabel(x["url"], codelist, lang);
          x["ruian"] = s["@id"];
        } else if (x["url"].startsWith(continentPrefix)) {
          x["type"] = "CONTINENT";
          x["label"] = continentsToLabel(x["url"], lang)
        } else if (x["url"].startsWith(countryPrefix)) {
          x["type"] = "COUNTRY";
          x["label"] = countriesToLabel(x["url"], lang)
        } else if (x["url"].startsWith(placePrefix)) {
          x["type"] = "PLACE";
          x["label"] = placesToLabel(x["url"], lang)
        } else {
          x["type"] = "URL"
        }
        dataset.spatial.push(x)
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

  distributions.splice(0, distributions.length, createDistribution()); //remove all and add a dummy
  graphData[DCATAP.distribution].forEach(function(distribution) {
    var distr_title = {"cs": "", "en": ""};
    if (DCTERMS.title in distribution) {
      if (Array.isArray(distribution[DCTERMS.title])) {
        var distr_titles = distribution[DCTERMS.title]; // [{"@language": "", "@value": ""}]

        distr_titles.forEach(function (t, _) {
          const l = t["@language"];
          const v = t["@value"]
          distr_title[l] = v;
        });

      } else {
        distr_titles["cs"] = distribution[DCTERMS.title];
      }
    }

    var fileOrService;
    const accessService = distribution[DCATAP.accessService];
    var endpointUrl = "";
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

    var d = createDistribution()
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

    parse_license(d, distribution[PU.specifikace]);

    distributions.splice(0, 0, d); //add
  });

  if (distributions.length > 0) {
    distributions.pop();
  } //remove the dummy
  src.$refs.themes.reload(dataset.themes);
}
