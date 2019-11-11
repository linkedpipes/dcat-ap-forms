import {apply, applyEach, email, provided, url, temporal, decimal} from "@/app-service/validators";
import dataset from "./dataset";

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
      "ruian_invalid"),
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
  return !provided(value) || /^[-+]?[0-9]+\.[0-9]+$/.test(value);
}

function allCustomThemesValid() {
  if (!provided(dataset.dataset_custom_themes)) return true;
  var bundle = {"isValid": true};
  value.forEach(function (item) { this.isValid = this.isValid & rule(item) }, bundle);
  return bundle.isValid;
}

export function do_addKeyword(dataset) {
  console.log("Do add keyword");
  const key_cs = dataset.tmp_keyword_cs;
  const key_en = dataset.tmp_keyword_en;
  const multilang = {
    "cs": key_cs,
    "en": key_en
  }
  dataset.keywords.push(multilang);
}