import {
    DCATAP,
    NKOD,
    ADMS,
    STATUS
} from "@/app-service/vocabulary";

export function exportToJsonLd(catalog) {
    const output = {
        "@type": [DCATAP.Catalog, NKOD.Formular],
        "@id": {"@id": catalog.iri},
        [ADMS.status]: [STATUS.Withdrawn]
    };
    return output;
}
