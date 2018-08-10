import {
    apply,
    email,
    provided,
    url,
    applyArray,
    shouldValidate
} from "@/app-service/validators";

export function createDistribution() {
    return decorateDistribution({
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
        "title": ""
    });
}

export function decorateDistribution(distribution) {
    return {
        ...distribution,
        "$validators": {
            "force": false
        }
    }
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
        //
        "err_url": applyArray(
            (t) => t.distribution, "url",
            [
                [provided, "distribution_url_missing"],
                [url, "distribution_url_invalid"]
            ]),
        "err_format": apply(
            (t) => t.distribution, "format",
            provided, "format_missing"),
        "err_media_type": apply(
            (t) => t.distribution, "media_type",
            provided, "media_type_missing"),
        "err_schema": apply(
            (t) => t.distribution, "schema",
            url,
            "distribution_schema_invalid")
    };
}

function isValidFormat(value) {
    return value.includes('/');
}

export function isDistributionValid(dist) {
    return provided(dist.url) &&
        url(dist.url) &&
        provided(dist.format) &&
        isValidFormat(dist.format) &&
        provided(dist.media_type) &&
        isAuthorValid(
            dist.license_author_type, dist.license_author_name) &&
        isCustomValid(
            dist.license_author_type, dist.license_author_custom) &&
        isAuthorValid(
            dist.license_db_type, dist.license_db_name) &&
        isCustomValid(
            dist.license_db_type, dist.license_db_custom) &&
        isCustomValid(
            dist.license_specialdb_type, dist.license_specialdb_custom);
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
            return [this.$labels.get("author_name_missing")];
        }
    }
}

function isAuthorValid(licence, value) {
    if (licence !== "CC BY") {
        return true;
    }
    return value !== "";
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
        if (value === "") {
            return [this.$labels.get("custom_license_missing")];
        }
        if (url(value)) {
            return [];
        } else {
            return [this.$labels.get(invalid_prop)]
        }
    }
}

function isCustomValid(licence, value) {
    if (licence !== "CUSTOM") {
        return true;
    }
    return provided(value) && url(value);
}