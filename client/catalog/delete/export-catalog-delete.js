import {
    DCTERMS,
    DCATAP,
    FOAF,
    VCARD,
    SCHEMA,
    PU,
    CREATIVE_COMMONS,
    NKOD,
    ADMS,
    STATUS
} from "@/app-service/vocabulary";

export function exportToJsonLd(dataset) {
    const output = {
        "@type": [DCATAP.Catalog, NKOD.Formular],
        "@id": dataset.iri,
        [ADMS.status]: [STATUS.Withdrawn]
    };
    return output;
}
