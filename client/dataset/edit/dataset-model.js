import {apply, applyEach, decimal, email, provided, spatial, temporal, url} from "@/app-service/validators";
import {getDefaultGraphData, normalize,} from "@/app-service/jsonld";
import {parseDump} from "./loader";

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
        temporal(dataset.temporal_resolution) &&
        spatial(dataset.spatial_resolution_meters);
}

function allCustomThemesValid(value) {
  if (!provided(value)) return true;
  let bundle = {"isValid": true};
  value.forEach(function (item) { this.isValid = this.isValid & url(item) }, bundle);
  return bundle.isValid;
}

function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

function keywordNotPresent(keywords, multilang) {
  return keywords.some(function (keyword) {
    let bundle = { "value": false};
    Object.keys(multilang).forEach(function(langTag) { //loop over 2 lang tags
      if (langTag in keyword) {
        if ((!isEmpty(keyword[langTag]) || !isEmpty(multilang[langTag])) && (keyword[langTag] === multilang[langTag])) {
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

export function do_addKeyword(dataset, key_cs, key_en) {
  if (!key_cs) return;
  const multilang = {
    "cs": key_cs,
    "en": key_en
  };
  if (!keywordNotPresent(dataset.keywords, multilang)) dataset.keywords.push(multilang);
}

function createSpatial(type, url, label) {
  return {
    "type": type,
    "url": url,
    "label": label
  }
}

function spatialNotPresent(spatial, type, url) {
  return spatial.some(function(item) {
    return (item["type"] === type) && (item["url"] === url);
  });
}

export function do_addSpatial(dataset, ruian_type, ruian, spatial_url, continent, country, place, active_tab, label) {
  if (active_tab === 0) {
    let bundle = {"present": false};
    dataset.spatial.forEach(function(item) {
      if ((item.type === "RUIAN") && (item.ruian === ruian)) { this.present = true }
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
    if (!spatialNotPresent(dataset.spatial, "CONTINENT", continent)) {
      dataset.spatial.push(createSpatial("CONTINENT", continent, label));
    }
  } else if (active_tab === 2) {
    if (!country) return false;
    if (!spatialNotPresent(dataset.spatial, "COUNTRY", country)) {
      dataset.spatial.push(createSpatial("COUNTRY", country, label));
    }
  } else if (active_tab === 3) {
    if (!place) return false;
    if (!spatialNotPresent(dataset.spatial, "PLACE", place)) {
      dataset.spatial.push(createSpatial("PLACE", place, label));
    }
  } else if (active_tab === 4) {
    if (!spatial_url) return false;
    if (!spatialNotPresent(dataset.spatial, "URL", spatial_url)) dataset.spatial.push({
      "type": "URL",
      "url": spatial_url
    })
  }
  return true;
}

export function tryGet(key, d, x="@id") {
  try {
    return d[key][x];
  } catch (KeyError) {
    return null;
  }
}

export function do_loadFile(file, dataset, distributions, lang, codelist, src) {
  let reader = new FileReader();
  reader.onload = function() {
    const file_data = getDefaultGraphData(normalize(JSON.parse(reader.result)));
    parseDump(file_data, dataset, distributions, lang, codelist, src);
  };
  reader.readAsText(file);
}
