export function exportToJsonLd(catalog) {
    const output = {
        "@type": ["http://www.w3.org/ns/dcat#Catalog", catalog.type],
        "http://www.w3.org/ns/dcat#endpointURL": {
            "@value": catalog.url,
            "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
        },
        "http://purl.org/dc/terms/title": asLangString(catalog.title)
    };
    const contactPoint = exportContactPoint(catalog);
    if (contactPoint !== undefined) {
        output["http://www.w3.org/ns/dcat#contactPoint"] = contactPoint;
    }
	if (catalog.homepage !== "") {
		output["http://xmlns.com/foaf/0.1/homepage"] = {
			"@id": catalog.homepage
		}
	}
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
