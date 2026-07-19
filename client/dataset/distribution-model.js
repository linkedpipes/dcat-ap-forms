import {
  apply,
  provided,
  url,
  applyArray,
  shouldValidate,
  email,
} from "../app-service/validators";
import { includesHvdLegislation, MODE_HVD } from "./dataset-model";

export const DIST_TYPE_FILE = "FILE";

export const DIST_TYPE_SERVICE = "SERVICE";

/**
 * Distribution can be default one or HVD one.
 * The detection is done based on the legislation.
 */
export function createDistribution() {
  return {
    "type": DIST_TYPE_FILE,
    //
    // Terms of use
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
    //
    // Distribution
    //
    "iri": "",
    /** @lc-property dcat:downloadURL */
    "url": "",
    "format": "",
    "media_type": "",
    "schema": "",
    "title_cs": "",
    "title_en": "",
    "package_format": "",
    "compress_format": "",
    "legislation": [],
    //
    // dataset.mode === "hvd"
    //
    "is_hvd": false,
    //
    // dataset.mode === "non-public"
    //
    "typy_obsahu": [],
    "zpusoby_sdileni": [],
    "zpusoby_ziskani": [],
    "zprostredkovava_sdileni": [],
    //
    // Data service
    //
    "service_iri": "",
    /** @lc-property dcat:endpointURL */
    "service_endpoint_url": "",
    /** @lc-property dcat:endpointDescription */
    "service_description": "",
    /** @lc-property dct:conformsTo */
    "service_conforms_to": "",
    //
    // HVD Data service
    //
    "contact_point_name": "",
    "contact_point_email": "",
    "contact_point_url": "",
    /** @lc-property foaf:page */
    "documentation": "",
    /** When true title_cs, and title_en should be used. */
    "service_title_copy": true,
    "service_title_cs": "",
    "service_title_en": "",
    // By default do not force validation on new item.
    "$validators": {
      "force": false,
    },
  };
}

export function createZprostredkovavaSdileni() {
  return {
    "typy_obsahu": null,
    "zpusoby_sdileni": null,
    "zpusoby_ziskani": null,
    "related_terms": null,
  };
}

/**
 * Create validators for all distribution fields.
 */
export function createDistributionValidators() {
  return {
    // Terms of use section.
    "err_license_author_name": validateAuthor(
      "license_author_type", "license_author_name"),
    "err_license_author_custom": validateCustom(
      "license_author_type",
      "license_author_custom",
      "license_author_custom_invalid"
    ),
    "err_license_db_name": validateAuthor(
      "license_db_type", "license_db_name"),
    "err_license_db_custom": validateCustom(
      "license_db_type",
      "license_db_custom",
      "license_db_custom_invalid"
    ),
    "err_license_specialdb_custom": validateCustom(
      "license_specialdb_type",
      "license_specialdb_custom",
      "license_specialdb_custom_invalid"
    ),
    "err_personal": validatePersonal(),
    "err_zprostredkovava_sdileni": function () {
      if (!this.distribution.$validators.force) {
        return [];
      }
      for (const item of this.distribution.zprostredkovava_sdileni) {
        if (!item.typy_obsahu || !item.zpusoby_sdileni
          || !item.zpusoby_ziskani || !item.related_terms) {
          return [this.$t("zprostredkovava_sdileni_incomplete")];
        }
      }
      return [];
    },
    // HVD
    "err_is_hvd": function() {
      // When mode is HVD we require at least one distribution to be HVD.
      if (this.mode !== MODE_HVD) {
        return [];
      }
      for (const distribution of this.distributions) {
        if (distribution.is_hvd) {
          return [];
        }
      }
      return [this.$t("missing_distribution_with_hvd")];
    },
    //
    ...createFileDistributionValidators(),
    ...createServiceDistributionValidators(),
  };
}

function createFileDistributionValidators() {
  return {
    "err_url": applyArray(
      (t) => t.distribution, "url",
      [
        [provided, "distribution_url_missing"],
        [url, "distribution_url_invalid"],
      ]),
    "err_format": apply(
      (t) => t.distribution, "format",
      provided, "format_missing"),
    "err_media_type": apply(
      (t) => t.distribution, "media_type",
      provided, "media_type_missing"),
    "err_schema": apply(
      (t) => t.distribution, "schema",
      url, "distribution_schema_invalid"),
  };
}

function createServiceDistributionValidators() {
  return {
    "err_description": applyArray(
      (t) => t.distribution, "service_description",
      [
        [provided, "endpoint_description_missing"],
        [url, "endpoint_description_invalid"],
      ]),
    "err_endpoint": applyArray(
      (t) => t.distribution, "service_endpoint_url",
      [
        [provided, "endpoint_url_missing"],
        [url, "endpoint_url_invalid"],
      ]),
    "err_title_cs": apply(
      (t) => t.distribution, "title_cs",
      provided, "title_missing"),
    "err_conforms_to": apply(
      (t) => t.distribution, "service_conforms_to",
      url, "service_conforms_to_invalid"),
    // High value dataset section
    "err_contact_point_name": applyArray(
      (t) => t.distribution, "contact_point_name",
      [[provided, "contact_point_name_missing"]],
      (t) => includesHvdLegislation(t.distribution.legislation)),
    "err_contact_point_email": applyArray(
      (t) => t.distribution, "contact_point_email",[
        [provided, "contact_point_email_missing"],
        [email, "contact_point_email_invalid"],
      ], (t) => includesHvdLegislation(t.distribution.legislation)),
    "err_contact_point_url": applyArray(
      (t) => t.distribution, "contact_point_url", [
        [provided, "contact_point_url_missing"],
        [url, "contact_point_url_invalid"],
      ], (t) => includesHvdLegislation(t.distribution.legislation)),
    "err_documentation": applyArray(
      (t) => t.distribution, "documentation", [
        [provided, "distribution_documentation_missing"],
        [url, "distribution_documentation_invalid"],
      ], (t) => includesHvdLegislation(t.distribution.legislation)),
    "err_service_title_cs": applyArray(
      (t) => t.distribution, "service_title_cs",
      [[provided, "service_title_missing"]],
      (t) => includesHvdLegislation(t.distribution.legislation) &&
        !t.distribution.service_title_copy),
  };
}

function validateAuthor(licence_prop, name_prop) {
  return function () {
    const licence = this.distribution[licence_prop];
    const value = this.distribution[name_prop];
    const validators = this.distribution["$validators"];
    if (!shouldValidate(value, validators, name_prop)) {
      return [];
    }
    if (isAuthorValid(licence, value)) {
      return [];
    } else {
      return [this.$t("author_name_missing")];
    }
  };
}

function validateCustom(licence_prop, custom_prop, invalid_prop) {
  return function () {
    const licence = this.distribution[licence_prop];
    const value = this.distribution[custom_prop];
    const validators = this.distribution["$validators"];
    if (!shouldValidate(value, validators, custom_prop)) {
      return [];
    }
    if (licence !== "CUSTOM") {
      return [];
    }
    if (!provided(value)) {
      return [this.$t("custom_license_missing")];
    }
    if (url(value)) {
      return [];
    } else {
      return [this.$t(invalid_prop)];
    }
  };
}

function validatePersonal() {
  return function () {
    const value = this.distribution["license_personal_type"];
    if (value === "UNKNOWN") {
      return [this.$t("personal_invalid")];
    } else {
      return [];
    }
  };
}

const fileValidators = createFileDistributionValidators();

const serviceValidators = createServiceDistributionValidators();

export function isDistributionValid(distribution) {
  // We mock the UI entity, to provide all functions the validators need.
  const wrapped = {
    "distribution": distribution,
    /**
     * @param {string} message
     */
    "$t": (message) => message,
  };
  // Select validators based on the distribution type and mode.
  let validators;
  if (distribution.type === DIST_TYPE_FILE) {
    validators = fileValidators;
  } else {
    validators = serviceValidators;
  }
  // Run the validators.
  for (let validator of Object.values(validators)) {
    const errorMessages = validator.call(wrapped);
    if (errorMessages.length > 0) {
      return false;
    }
  }
  //
  return isAuthorValid(
    distribution.license_author_type,
    distribution.license_author_name)
    && isCustomValid(
      distribution.license_author_type,
      distribution.license_author_custom)
    && isAuthorValid(
      distribution.license_db_type,
      distribution.license_db_name)
    && isCustomValid(
      distribution.license_db_type,
      distribution.license_db_custom)
    && isCustomValid(
      distribution.license_specialdb_type,
      distribution.license_specialdb_custom)
    && isPersonalValid(
      distribution.license_personal_type);
}

function isAuthorValid(licence, value) {
  if (licence !== "CC BY") {
    return true;
  }
  return provided(value);
}

function isCustomValid(licence, value) {
  if (licence !== "CUSTOM") {
    return true;
  }
  return provided(value) && url(value);
}

/**
 * @param {string} value
 * @returns
 */
function isPersonalValid(value) {
  return value !== "UNKNOWN";
}
