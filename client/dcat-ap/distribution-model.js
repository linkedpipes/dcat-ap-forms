import {
    apply,
    email,
    provided,
    url,
    applyArray
} from "@/app-service/validators";

export function createDistribution() {
    return {
        "license_author_type": "",
        "license_author_name": "",
        "license_author_custom": "",
        "license_db_type": "",
        "license_db_name": "",
        "license_db_custom": "",
        "license_specialdb_type": "",
        "license_specialdb_custom": "",
        "license_personal_type": "",
        //
        "url": "",
        "format": "",
        "schema": "",
        "title": "",
        //
        "$validators": {
            "force": false
        }
    }
}


export function createDistributionValidators() {
    return {
        "err_license_author_custom": apply(
            (t) => t.distribution, "license_author_custom",
            url,
            "license_author_custom_invalid"),
        "err_license_db_custom": apply(
            (t) => t.distribution, "license_db_custom",
            url,
            "license_db_custom_invalid"),
        "err_license_specialdb_custom": apply(
            (t) => t.distribution, "license_specialdb_custom",
            url,
            "license_specialdb_custom_invalid"),
        //
        "err_url": applyArray(
            (t) => t.distribution, "url",
            [
                [provided, "distribution_url_missing"],
                [url, "distribution_url_invalid"]
            ]),
        "err_format": applyArray(
            (t) => t.distribution, "format",
            [
                [provided, "format_missing"],
                [(value) => isValidFormat, "format_invalid"]
            ]),
        "err_schema": apply(
            (t) => t.distribution, "schema",
            url,
            "distribution_schema_invalid")
    };
}

export function isDistributionValid(distribution) {
    return distribution.url.length > 0 &&
        distribution.format.length > 0 &&
        distribution.format.includes('/') &&
        distribution.license_link.length > 0 ;
}