import {
    apply,
    provided,
    url,
    email,
    applyArray
} from "@/app-service/validators";

export function createCatalog() {
    return {
        "title": "",
        "iri": undefined,
        "endpoint": "",
        "contact_point_name": "",
        "contact_point_email": "",
		"homepage": "",
        "type": "https://data.gov.cz/slovník/nkod/DcatApLkod",
        "$validators": {
            "force": false
        }
    }
}

export function createCatalogValidators() {
    return {
        "err_title": apply(
            (t) => t.catalog, "title",
            provided,
            "catalog_title_missing"),
        "err_endpoint": applyArray(
            (t) => t.catalog, "endpoint",
            [
                [provided, "catalog_url_missing"],
                [url, "catalog_url_invalid"]
            ]),
        "err_contact_point_email": applyArray(
            (t) => t.catalog, "contact_point_email",
            [
                [provided, "catalog_contact_point_email_missing"],
                [email, "catalog_contact_point_email_invalid"]
            ]),
		"err_contact_point_name": applyArray(
            (t) => t.catalog, "contact_point_name",
            [
                [provided, "catalog_contact_point_name_missing"]
            ]),
		"err_homepage": applyArray(
            (t) => t.catalog, "homepage",
            [
                [url, "homepage_invalid"]
            ]),
    };
}

export function isCatalogValid(catalog) {
    return provided(catalog.title) &&
        provided(catalog.endpoint) &&
        url(catalog.endpoint) &&
        provided(catalog.contact_point_email) &&
        provided(catalog.contact_point_name) &&
        email(catalog.contact_point_email) &&
		url(catalog.homepage) &&
        provided(catalog.type);
}
