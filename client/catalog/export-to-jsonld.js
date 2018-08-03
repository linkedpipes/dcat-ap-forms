export function exportToJsonLd(catalog) {
    const output = {
        "@id": catalog.url,
        "@type": ["http://www.w3.org/ns/dcat#Catalog", catalog.type],
        "http://purl.org/dc/terms/title": asLangString(catalog.title)
    };

    const contactPoint = exportContactPoint(catalog);
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

function exportContactPoint(catalog) {
    const output = {
        "@type": ["http://www.w3.org/2006/vcard/ns#Organization"]
    };
    if (catalog.contact_point_name === "" &&
        catalog.contact_point_email === "") {
        return undefined;
    }
    if (catalog.contact_point_name !== "") {
        output["http://www.w3.org/2006/vcard/ns#fn"] =
            asLangString(catalog.contact_point_name);
    }
    if (catalog.contact_point_email !== "") {
        output["http://www.w3.org/2006/vcard/ns#hasEmail"] =
            asLangString(catalog.contact_point_email);
    }
    return output;
}
