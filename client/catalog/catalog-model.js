import {
    apply,
    provided,
    url,
    email,
    applyArray
} from "@/app-service/validators";

export function createCatalog() {
    return {
        "title": "Title",
        "url": "http://url",
        "contact_point_name": "",
        "contact_point_email": "email@com.cz",
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
            "catalog_title_invalid"),
        "err_url": applyArray(
            (t) => t.catalog, "url",
            [
                [provided, "catalog_url_missing"],
                [url, "catalog_url_invalid"]
            ]),
        "err_contact_point_email": applyArray(
            (t) => t.catalog, "contact_point_email",
            [
                [provided, "contact_contact_point_email_missing"],
                [email, "contact_contact_point_email_invalid"]
            ]),
    };
}

export function isCatalogValid(catalog) {
    return provided(catalog.title) &&
        provided(catalog.url) &&
        url(catalog.url) &&
        provided(catalog.contact_point_email) &&
        email(catalog.contact_point_email) &&
        provided(catalog.type);
}
