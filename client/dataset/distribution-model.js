import {
  apply,
  provided,
  url,
  applyArray,
  shouldValidate,
} from "../app-service/validators";

export const DIST_TYPE_FILE = "FILE";

export const DIST_TYPE_SERVICE = "SERVICE";

export function createDistribution() {
  return decorateDistribution({
    "iri": "",
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
    "url": "",
    "format": "",
    "media_type": "",
    "schema": "",
    "title_cs": "",
    "title_en": "",
    "package_format": "",
    "compress_format": "",
    //
    "service_iri": "",
    "service_endpoint_url": "",
    "service_description": "",
    "service_conforms_to": "",
    // type -> type
    "type": DIST_TYPE_FILE,
  });
}

export function decorateDistribution(distribution) {
  return {
    ...distribution,
    "$validators": {
      "force": false,
    },
  };
}

export function createDistributionValidators() {
  return {
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
    "err_title": apply(
      (t) => t.distribution, "title_cs",
      provided, "title_missing"),
    "err_conforms_to": apply(
      (t) => t.distribution, "service_conforms_to",
      url, "service_conforms_to_invalid"),
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

export function isDistributionValid(dist) {
  return isAccessValid(dist)
    && isAuthorValid(
      dist.license_author_type, dist.license_author_name)
    && isCustomValid(
      dist.license_author_type, dist.license_author_custom)
    && isAuthorValid(
      dist.license_db_type, dist.license_db_name)
    && isCustomValid(
      dist.license_db_type, dist.license_db_custom)
    && isCustomValid(
      dist.license_specialdb_type, dist.license_specialdb_custom)
    && isPersonalValid(
      dist.license_personal_type);
}

const fileValidators = createFileDistributionValidators();

const serviceValidators = createServiceDistributionValidators();

function isAccessValid(dist) {
  // We need to mock the UI entity, to provide all
  // functions the validators need.
  const wrappedDistribution = {
    "distribution": dist,
    "$t": (message) => message,
  };
  let validators;
  if (dist.type === DIST_TYPE_FILE) {
    validators = fileValidators;
  } else {
    validators = serviceValidators;
  }
  for (let validator of Object.values(validators)) {
    const errorMessages = validator.call(wrappedDistribution);
    if (errorMessages.length > 0) {
      return false;
    }
  }
  return true;
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

function isPersonalValid(value) {
  return value !== "UNKNOWN";
}
