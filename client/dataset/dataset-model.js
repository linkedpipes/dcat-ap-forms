import {
  apply,
  applyEach,
  decimal,
  email,
  provided,
  temporal,
  url,
} from "../app-service/validators";
import { EUROPE } from "../app-service/vocabulary";
import { NON_PUBLIC_LEGISLATION } from "./edit/codelists/non-public";

//
// Section : High Value Dataset (HVD)
//

/**
 * @param {string[]} legislation
 * @returns {boolean}
 */
export function includesHvdLegislation(legislation) {
  // We require only EUROPE.hvd for backwards compatibility.
  return legislation.includes(EUROPE.hvd);
}

/**
 * @param {string[]} legislation
 * @returns {string[]}
 */
export function filterHvdLegislation(legislation) {
  return legislation.filter(iri =>
    iri !== EUROPE.hvd && iri !== EUROPE.openData);
}

//
// Section : Non-Public Dataset
//

/**
 * @param {string[]} legislation
 * @returns {boolean}
 */
export function includesNonPublicLegislation(legislation) {
  return NON_PUBLIC_LEGISLATION.every(iri => legislation.includes(iri));
}

/**
 * @param {string[]} legislation
 * @returns {string[]}
 */
export function filterNonPublicLegislation(legislation) {
  return legislation.filter(iri => !NON_PUBLIC_LEGISLATION.includes(iri));
}

//
//
//


export const SPATIAL_RUIAN = "RUIAN";

export const SPATIAL_CONTINENT = "CONTINENT";

export const SPATIAL_COUNTRY = "COUNTRY";

export const SPATIAL_PLACE = "PLACE";

export const SPATIAL_URL = "URL";

/**
 * New dataset entry for NKOD, no URL is provided.
 */
export const EXPORT_NKOD = "nkod";

/**
 * Edit of existing dataset.
 */
export const EXPORT_EDIT = "edit";

/**
 * New dataset for LKOD with custom URL not provided
 * in the URL.
 */
export const EXPORT_LKOD = "lkod";

const MONTHLY_ACCRUAL_PERIODICITY =
  "http://publications.europa.eu/resource/authority/frequency/MONTHLY";

export const MODE_OPEN_DATA = "default";

export const MODE_HVD = "hvd";

export const MODE_NON_PUBLIC = "non-public";
/**
 * @param {"default" | "hvd" | "non-public"} mode
 */
export function createDataset(mode) {
  return {
    "mode": mode,
    //
    "iri": undefined,
    "title_cs": "",
    "title_en": "",
    "description_cs": "",
    "description_en": "",
    "accrual_periodicity": MONTHLY_ACCRUAL_PERIODICITY,
    "spatial": [],
    "temporal_start": "",
    "temporal_end": "",
    "temporal_resolution": "",
    "spatial_resolution_meters": "",
    "documentation": "",
    "dataset_themes": [],
    "legislation": [],
    "dataset_custom_themes": [],
    "themes": [],
    "ofn": [],
    "contact_point_name": "",
    "contact_point_email": "",
    "keywords_cs": [],
    "keywords_en": [],
    "url_to_load_from": "",
    "ruian": "",
    "ruian_type": "",
    "publisher": undefined,
    "landing_page": "",
    // mode === "hvd"
    "hvd_categories": [],
    // mode === "non-public"
    "isvs": "",
    "related_terms": [],
    // By default do not force validation on new item.
    "$validators": {
      "force": false,
      "forceHvd": false,
    },
  };
}

/**
 * Create validators for all dataset fields.
 */
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
      provided,
      "dataset_spatial_invalid"),
    "err_keywords_cs": apply(
      (t) => t.dataset, "keywords_cs",
      provided,
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
      provided,
      "dataset_theme_invalid"),
    "err_dataset_theme_custom": applyEach(
      (t) => t.dataset, "dataset_custom_themes",
      url, "dataset_theme_invalid_url"),
    "err_dataset_ofn": applyEach(
      (t) => t.dataset, "ofn",
      url,
      "dataset_ofn_invalid_url"
    ),
    "err_temporal": apply(
      (t) => t.dataset, "temporal_resolution",
      temporal,
      "temporal_invalid"),
    "err_spatial": apply(
      (t) => t.dataset, "spatial_resolution_meters",
      decimal,
      "spatial_invalid"),
    "err_url_load": apply(
      (t) => t.dataset, "url_to_load_from",
      url, "load_invalid_url"
    ),
    "err_legislation": function () {
      // We validate HDF only when datasets and distributions are valid.
      // Here we use `validation` object directly, we are not using it
      // anywhere else as it was not originally passed around.
      const shouldSkipValidation =
        shouldSkipDatasetValidation(this.dataset)
        || !this.dataset.$validators.forceHvd;
      if (shouldSkipValidation) {
        return [];
      }
      if (this.dataset.mode !== MODE_HVD) {
        return [];
      }
      // Check there is at leas one HVD distribution.
      for (const distribution of this.distributions) {
        if (includesHvdLegislation(distribution.legislation)) {
          return [];
        }
      }
      return [this.$t("missing_distribution_with_hvd")];
    },
    "err_hvd_categories": function () {
      if (shouldSkipDatasetValidation(this.dataset)) {
        return [];
      }
      if (includesHvdLegislation(this.dataset.legislation)
        && this.dataset.hvd_categories.length === 0) {
        return [this.$t("missing_hvd_categories")];
      }
      return [];
    },
    "err_isvs": function () {
      if (shouldSkipDatasetValidation(this.dataset)) {
        return [];
      }
      if (this.dataset.mode === MODE_NON_PUBLIC
        && !this.dataset.isvs) {
        return [this.$t("missing_isvs")];
      }
      return [];
    },
    "err_related_terms": function () {
      if (shouldSkipDatasetValidation(this.dataset)) {
        return [];
      }
      if (this.dataset.mode === MODE_NON_PUBLIC
        && this.dataset.related_terms.length === 0) {
        return [this.$t("missing_related_terms")];
      }
      return [];
    },
    "err_landing_page": apply(
      (t) => t.dataset, "landing_page",
      url,
      "landing_page_invalid"),
  };
}

/**
 * Return true when validation is forced, this happens when we navigate
 * from dataset to distribution detail. In other words we do not validate
 * until user fills in the form.
 *
 * Similar functionality is implemented by shouldValidate function
 * in validators.js file.
 */
function shouldSkipDatasetValidation(dataset) {
  return !dataset.$validators.force;
}

const validators = createDatasetValidators();

/**
 * @param {*[]} dataset
 * @param {*[]} distributions
 * @returns
 */
export function isDatasetValid(dataset, distributions) {
  // We mock the UI entity, to provide all functions the validators need.
  const wrapped = {
    "dataset": dataset,
    "distributions": distributions,
    /**
     * @param {string} message
     */
    "$t": (message) => message,
  };
  for (let validator of Object.values(validators)) {
    const errorMessages = validator.call(wrapped);
    if (errorMessages.length > 0) {
      return false;
    }
  }
  return true;
}
