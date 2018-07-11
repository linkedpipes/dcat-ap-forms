export function exportToJsonLd(dataset, distributions) {
    const output = {
        "@type": ["http://www.w3.org/ns/dcat#Dataset"],
        "http://purl.org/dc/terms/title":
            asLangString(dataset.title),
        "http://purl.org/dc/terms/description":
            asLangString(dataset.description),
        //
        "https://data.gov.cz/slovník/nkod/ruian_code":
            asValue(dataset.ruian_code),
        "http://www.w3.org/ns/dcat#keyword":
            dataset.keywords.map((keyword) => asLangString(keyword)),
        "http://www.w3.org/ns/dcat#distribution":
            distributions.map((distribution) => exportDistribution(distribution))
    };

    if (dataset.accrual_periodicity !== "") {
        output["http://purl.org/dc/terms/accrualPeriodicity"] =
            asIri(dataset.accrual_periodicity);
    }
    if (dataset.ruian_type !== "") {
        output["https://data.gov.cz/slovník/nkod/ruian_type"] =
            asValue(dataset.ruian_type);
    }
    if (dataset.documentation !== "") {
        output["http://xmlns.com/foaf/0.1/page"] =
            asIri(dataset.documentation);
    }
    if (dataset.themes.length > 0) {
        output["http://www.w3.org/ns/dcat#theme"] =
            dataset.themes.map((theme) => asIri(theme));
    }
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
        // TODO Conversion to URL?
        // http://www.w3.org/ns/dcat#mediaType
        // http://purl.org/dc/terms/format
        // https://data.gov.cz/slovník/nkod/mediaType
        "http://purl.org/dc/terms/format" : asValue(distribution.format)
    };

    // TODO
    // http://purl.org/dc/terms/license

    if (distribution.schema !== "") {
        output["http://purl.org/dc/terms/conformsTo"] =
            asIri(distribution.schema);
    }

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