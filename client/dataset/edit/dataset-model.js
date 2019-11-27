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
  SKOS
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
    "err_title_en": apply(
      (t) => t.dataset, "title_en",
      provided,
      "dataset_title_invalid"),
    "err_description_cs": apply(
      (t) => t.dataset, "description_cs",
      provided,
      "dataset_description_invalid"),
    "err_description_en": apply(
      (t) => t.dataset, "description_en",
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
  return provided(dataset.title_cs) && provided(dataset.title_en) &&
        provided(dataset.description_cs) && provided(dataset.description_en) &&
        provided(dataset.spatial) &&
        provided(dataset.keywords) &&
        provided(dataset.dataset_themes) &&
        allCustomThemesValid() &&
        isValidTemporalString(dataset.temporal_resolution) &&
        isValidSpatialString(dataset.spatial_resolution_meters);
}

function isValidTemporalString(value) {
  return !provided(value) || /^(-?)P(?=.)((\d+)Y)?((\d+)M)?((\d+)D)?(T(?=.)((\d+)H)?((\d+)M)?(\d*(\.\d+)?S)?)?$/.test(value)
}

function  isValidSpatialString(value) {
  return !provided(value) || /^[-+]?[0-9]+(\.[0-9]+)?$/.test(value);
}

function allCustomThemesValid() {
  if (!provided(dataset.dataset_custom_themes)) return true;
  var bundle = {"isValid": true};
  value.forEach(function (item) { this.isValid = this.isValid & rule(item) }, bundle);
  return bundle.isValid;
}

export function do_addKeyword(dataset) {
  const key_cs = dataset.tmp_keyword_cs;
  const key_en = dataset.tmp_keyword_en;
  if (!key_cs || !key_en) return;
  const multilang = {
    "cs": key_cs,
    "en": key_en
  }
  dataset.keywords.push(multilang);
}

export function do_addSpatial(dataset, ruian_type, ruian, spatial_url, continent, country, place, active_tab, label) {
  if (active_tab === 0) {
    dataset.spatial.push({
      "type": "RUIAN",
      "ruian_type": ruian_type,
      "ruian": ruian,
      "label": label
    })
  } else if (active_tab === 1) {
    if (!continent) return false;
    dataset.spatial.push({
      "type": "CONTINENT",
      "url": continent,
      "label": label
    })
  } else if (active_tab === 2) {
    if (!country) return false;
    dataset.spatial.push({
      "type": "COUNTRY",
      "url": country,
      "label": label
    })
  } else if (active_tab === 3) {
    if (!place) return false;
    dataset.spatial.push({
      "type": "PLACE",
      "url": place,
      "label": label
    })
  } else if (active_tab === 4) {
    if (!spatial_url) return false;
    dataset.spatial.push({
      "type": "URL",
      "url": spatial_url
    })
  }
  return true;
}

export function tryGet(key, d) {
  try {
    return d[key]["@id"];
  } catch (KeyError) {
    return null;
  }
}

export function do_loadFile(file, dataset, distributions) {
  var reader = new FileReader();
  reader.onload = function() {
    dataset.tmp_file = getDefaultGraphData(normalize(JSON.parse(reader.result)));
    parse_dump(dataset.tmp_file, dataset, distributions);
  };
  reader.readAsText(file);
}

import {createDistribution} from "./distribution-model";
export function parse_dump(graphData, dataset, distributions) {
  const contactPoint = graphData[DCATAP.contactPoint];
  dataset.accrual_periodicity = graphData[DCTERMS.accrualPeriodicity]["@id"];
  dataset.temporal_resolution = graphData[DCATAP.temporalResolution]["@value"];
  dataset.spatial_resolution_meters = graphData[DCATAP.spatialResolutionInMeters]["@value"];
  dataset.documentation = graphData[FOAF.page]["@id"];

  const titles = graphData[DCTERMS.title];
  titles.forEach(function(title, _) {
    if (title["@language"] === "cs") {
      dataset.title_cs = title["@value"];
    } else if (title["@language"] === "en") {
      dataset.title_en = title["@value"];
    }
  });

  const descriptions = graphData[DCTERMS.description];
  descriptions.forEach(function(title, _) {
    if (title["@language"] === "cs") {
      dataset.description_cs = title["@value"];
    } else if (title["@language"] === "en") {
      dataset.description_en = title["@value"];
    }
  });

  const keywords = graphData[DCATAP.keyword];
  dataset.keywords = [];
  keywords.forEach(function(keyword, _) {
    var key = {};
    keyword.forEach(function(version, _) {
      const l = version["@language"];
      const v = version["@value"];
      key[l] = v;
    });
    dataset.keywords.push(key);
  });

  const temporal = graphData[DCTERMS.temporal];
  dataset.temporal_start = temporal[DCATAP.startDate]["@value"];
  dataset.temporal_end = temporal[DCATAP.endDate]["@value"];

  const contact = graphData[DCATAP.contactPoint];
  dataset.contact_point_name = contact[VCARD.fn]["@value"];
  dataset.contact_point_email = contact[VCARD.hasEmail];

  dataset.themes = [];
  dataset.dataset_themes = [];
  dataset.dataset_custom_themes = [];
  const themes = graphData[DCATAP.theme];

  themes.forEach(function(theme, _) {
    var t = theme["@id"];
    if (t.startsWith("http://publications.europa.eu/resource/authority/data-theme/")) {
      dataset.dataset_themes.push(t)
    } else if (t.startsWith("http://eurovoc.europa.eu/")){
      dataset.themes.push(t);
    } else {
      dataset.dataset_custom_themes.push(t)
    }
  });

  dataset.spatial = [];
  const spatial = graphData[DCTERMS.spatial];
  spatial.forEach(function(s, _) {
    if (s !== null) {
      dataset.spatial.push({
        "type": "URL",
        "url": s["@id"]
      })
    }
  });

  distributions.splice(0, distributions.length);
  graphData[DCATAP.distribution].forEach(function(distribution) {
    const titles = distribution[DCTERMS.title];
    var title = {};
    titles.forEach(function(t, _) {
      const l = t["@language"];
      const v = t["@value"]
      title[l] = v;
    })

    var fileOrService;
    const accessService = distribution[DCATAP.accessService];
    const endpointUrl = accessService[DCATAP.endpointURL]["@id"];
    if (endpointUrl.length > 0) {
      fileOrService = "SERVICE";
    } else {
      fileOrService = "FILE";
    }

    var d = createDistribution()
    d["compressFormat"] = tryGet(distribution, DCTERMS.compressFormat);
    d["format"] = tryGet(distribution, DCTERMS.format);
    d["isFileOrService"] = fileOrService;
    d["media_type"] = tryGet(distribution, DCATAP.mediaType);
    d["packageFormat"] = tryGet(distribution, DCTERMS.packageFormat);
    d["schema"] = tryGet(distribution, DCTERMS.conformsTo);
    d["service_description"] = tryGet(DCATAP.endpointDescription, accessService);
    d["service_endpoint_url"] = endpointUrl;
    d["url"] = tryGet(DCATAP.downloadURL, distribution);
    d["title_cs"] = title["cs"];
    d["title_en"] = title["en"];

    //
    const spec = distribution[PU.specifikace]["@id"];
    const autor = spec[PU.autor]["@value"];
    const autorskeDilo = spec[PU.autorskeDilo]["@id"];
    const db = spec[PU.databazeJakoAutorskeDilo]["@id"];
    const autor_db = spec[PU.autorDatabaze]["@value"];
    const zvlastni = spec[PU.databazeChranenaZvlastnimiPravy]["@id"];
    const osobni = spec[PU.osobniUdaje]["@id"];
    //

    distributions.push(d);
  });
}
