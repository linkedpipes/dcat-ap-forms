import {
    DCTERMS,
    DCATAP,
    FOAF,
    VCARD
} from "@/app-service/vocabulary";

export function exportToJsonLd(catalog) {
    const output = {
        "@type": [DCATAP.Catalog, catalog.type],
        [DCATAP.endpointURL]: {
            "@value": catalog.endpoint,
            "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
        },
        [DCTERMS.title]: asLangString(catalog.title)
    };
    const contactPoint = exportContactPoint(catalog);
    if (isNotEmpty(contactPoint)) {
        output[DCATAP.contactPoint] = contactPoint;
    }
    if (isNotEmpty(catalog.homepage)) {
        output[FOAF.homepage] = {
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

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== "";
}

function exportContactPoint(catalog) {
    const output = {
        "@type": [VCARD.Organization]
    };
    if (catalog.contact_point_name === "" &&
        catalog.contact_point_email === "") {
        return undefined;
    }
    if (catalog.contact_point_name !== "") {
        output[VCARD.fn] = asLangString(catalog.contact_point_name);
    }
    if (catalog.contact_point_email !== "") {
        output[VCARD.hasEmail] = catalog.contact_point_email;
    }
    return output;
}
