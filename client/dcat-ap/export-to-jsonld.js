export function exportToJsonLd(dataset, distributions) {
    const output = {
        "@type": ["http://www.w3.org/ns/dcat#Dataset"],
        "http://purl.org/dc/terms/title":
            asLangString(dataset.title),
        "http://purl.org/dc/terms/description":
            asLangString(dataset.description),
        //
        "http://www.w3.org/ns/dcat#keyword":
            dataset.keywords.map((keyword) => asLangString(keyword)),
        "http://www.w3.org/ns/dcat#distribution":
            distributions.map((distribution) => exportDistribution(distribution))
    };

    if (dataset.accrual_periodicity !== "") {
        const url = dataset.accrual_periodicity;
        output["http://purl.org/dc/terms/accrualPeriodicity"] = asIri(url);
    }
    if (dataset.ruian !== null) {
        output["http://purl.org/dc/terms/spatial"] = asIri(dataset.ruian);
    }
    if (dataset.documentation !== "") {
        output["http://xmlns.com/foaf/0.1/page"] =
            asIri(dataset.documentation);
    }

    const themes = [dataset.dataset_theme, ...dataset.themes];
    output["http://www.w3.org/ns/dcat#theme"] = themes.map((t) => asIri(t));

    const temporal = exportTemporal(dataset);
    if (temporal !== undefined) {
        output["http://purl.org/dc/terms/temporal"] = temporal;
    }
    const contactPoint = exportContactPoint(dataset);
    if (contactPoint !== undefined) {
        output["http://www.w3.org/ns/dcat#contactPoint"] = contactPoint;
    }

    console.log(output);

    return output;
}

function asLangString(value) {
    return {
        "@language": "cs",
        "@value": value
    }
}

function asIri(value) {
    return {
        "@id": value
    }
}

function asValue(value) {
    return {
        "@value": value
    }
}

function exportTemporal(dataset) {
    if (dataset.temporal_start === "" &&
        dataset.temporal_end === "") {
        return undefined;
    }
    const output = {
        "@type": ["http://purl.org/dc/terms/PeriodOfTime"]
    };
    if (dataset.temporal_start !== undefined) {
        output["http://schema.org/startDate"] = {
            "@type": "http://www.w3.org/2001/XMLSchema#date",
            "@value": dataset.temporal_start
        };
    }
    if (dataset.temporal_end !== undefined) {
        output["http://schema.org/endDate"] = {
            "@type": "http://www.w3.org/2001/XMLSchema#date",
            "@value": dataset.temporal_end
        };
    }
    return output;
}

function exportContactPoint(dataset) {
    const output = {
        "@type": ["http://www.w3.org/2006/vcard/ns#Organization"]
    };
    if (dataset.contact_point_name === "" &&
        dataset.contact_point_email === "") {
        return undefined;
    }
    if (dataset.contact_point_name !== "") {
        output["http://www.w3.org/2006/vcard/ns#fn"] =
            asLangString(dataset.contact_point_name);
    }
    if (dataset.contact_point_email !== "") {
        output["http://www.w3.org/2006/vcard/ns#hasEmail"] =
            asLangString(dataset.contact_point_email);
    }
    return output;
}

function exportDistribution(distribution) {
    // url, format, license_link, schema, title
    const output = {
        "@type": ["http://www.w3.org/ns/dcat#Distribution"],
        "http://www.w3.org/ns/dcat#downloadURL" : asIri(distribution.url),
        "http://purl.org/dc/terms/mediaType" : asIri(distribution.media_type),
        "http://purl.org/dc/terms/format" : asIri(distribution.format),
        "https://data.gov.cz/slovník/podmínky-užití/specifikace": license(distribution)
    };

    if (distribution.schema !== "") {
        output["http://purl.org/dc/terms/conformsTo"] =
            asIri(distribution.schema);
    }

    if (distribution.title !== "") {
        output["http://purl.org/dc/terms/title"] =
            asLangString(distribution.title);
    }

    return output;
}

function license(distribution) {
    const output = {
        "@type": "https://data.gov.cz/slovník/podmínky-užití/Specifikace"
    };

    const pu = "https://data.gov.cz/slovník/podmínky-užití/";

    switch(distribution.license_author_type) {
        case "MULTI":
            output[pu + "autorské-dílo"] = asIri("https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/");
            break;
        case "CC BY":
            output[pu + "autorské-dílo"] = asIri("https://creativecommons.org/licenses/by/4.0/");
            output[pu + "autor"] = asValue(distribution.license_author_name);
            break;
        case "NO":
            output[pu + "autorské-dílo"] = asIri("https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/");
            break;
        case "CUSTOM":
            output[pu + "autorské-dílo"] = asIri(distribution.license_author_custom);
            break;
        default:
            logging.error("Unexpected license_author_type value:",
                distribution.license_author_type);
            break;
    }

    switch(distribution.license_db_type) {
        case "CC BY":
            output[pu + "databáze-jako-autorské-dílo"] = asIri("https://creativecommons.org/licenses/by/4.0/");
            output[pu + "autor-databáze"] = asValue(distribution.license_db_name);
            break;
        case "NO":
            output[pu + "databáze-jako-autorské-dílo"] = asIri("https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/");
            break;
        case "CUSTOM":
            output[pu + "databáze-jako-autorské-dílo"] = asIri(distribution.license_db_custom);
            break;
        default:
            console.error("Unexpected license_db_type value:",
                distribution.license_db_type);
            break;
    }

    switch (distribution.license_specialdb_type) {
        case "CC0":
            output[pu + "databáze-chráněná-zvláštními-právy"] = asIri("https://creativecommons.org/publicdomain/zero/1.0/");
            break;
        case "NO":
            output[pu + "databáze-chráněná-zvláštními-právy"] = asIri("https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/");
            break;
        case "CUSTOM":
            output[pu + "databáze-chráněná-zvláštními-právy"] = asIri(distribution.license_specialdb_custom);
            break;
        default:
            console.error("Unexpected license_specialdb_type value:",
                distribution.license_specialdb_type);
            break;
    }

    switch(distribution.license_personal_type) {
        case "YES":
            output[pu + "osobní-údaje"] = asIri("https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/");
            break;
        case "NO":
            output[pu + "osobní-údaje"] = asIri("https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/");
            break;
        default:
            console.error("Unexpected license_personal_type value:",
                distribution.license_personal_type);
            break;
    }

    return output;
}
