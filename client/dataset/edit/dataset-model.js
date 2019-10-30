import {apply, email, provided, url, temporal, decimal} from "@/app-service/validators";

export function createDataset() {
  return decorateDataset({
    "iri": undefined,
    "title_cs": "",
    "title_en": "",
    "description_cs": "",
    "description_en": "",
    "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
    "ruian_type": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
    "ruian": "https://linked.cuzk.cz/resource/ruian/stat/1",
    "temporal_start": "",
    "temporal_end": "",
    "temporal_resolution": "",
    "spatial_resolution_meters": "",
    "documentation": "",
    "dataset_theme": "",
    "themes": [],
    "contact_point_name": "",
    "contact_point_email": "",
    "keywords": []
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
    "err_ruian": apply(
      (t) => t.dataset, "ruian",
      provided,
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
      (t) => t.dataset, "dataset_theme",
      provided,
      "dataset_theme_invalid"),
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
  return provided(dataset.title) &&
        provided(dataset.description) &&
        provided(dataset.ruian) &&
        provided(dataset.keywords) &&
        provided(dataset.dataset_theme) &&
        isValidTemporalString(dataset.temporal_resolution) &&
        isValidSpatialString(dataset.spatial_resolution_meters);
}

function isValidTemporalString(value) {
  return !provided(value) || /^(-?)P(?=.)((\d+)Y)?((\d+)M)?((\d+)D)?(T(?=.)((\d+)H)?((\d+)M)?(\d*(\.\d+)?S)?)?$/.test(value)
}

function  isValidSpatialString(value) {
  return !provided(value) || /^[-+]?[0-9]+\.[0-9]+$/.test(value);
}
