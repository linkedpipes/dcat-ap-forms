import {
    ADMS,
    STATUS
} from "@/app-service/vocabulary";

export function exportToJsonLd(catalog) {
    const output = {
        "@type": catalog.types,
        "@id": catalog.iri,
        [ADMS.status]: {"@id": STATUS.Withdrawn}
    };
    console.log("jsonld:", output);
    return output;
}
