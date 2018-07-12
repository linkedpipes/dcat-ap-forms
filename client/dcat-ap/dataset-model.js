import {apply, email, provided, url} from "@/app-service/validators";

export function createDataset() {
    return {
        "title": "",
        "description": "",
        "accrual_periodicity": "",
        "ruian_type": "obec",
        "ruian": "",
        "temporal_start": "",
        "temporal_end": "",
        "documentation": "",
        "themes": [],
        "contact_point_name": "",
        "contact_point_email": "",
        "keywords": [],
        "$validators": {
            "force": false
        }
    }
}


export function createDatasetValidators() {
    return {
        "err_title": apply(
            (t) => t.dataset, "title",
            provided,
            "dataset_title_invalid"),
        "err_description": apply(
            (t) => t.dataset, "description",
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
            "documentation_invalid")
    };
}


export function isDatasetValid(dataset) {
    return provided(dataset.title) &&
        provided(dataset.description) &&
        provided(dataset.keywords);
}