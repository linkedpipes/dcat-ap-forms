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
            "@value": catalog.url,
            "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
        },
        [DCTERMS.title]: asLangString(catalog.title)
    };
    const contactPoint = exportContactPoint(catalog);
    if (contactPoint !== undefined) {
        output[DCATAP.contactPoint] = contactPoint;
    }
    if (catalog.homepage !== "") {
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
