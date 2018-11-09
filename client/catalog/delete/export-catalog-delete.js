import {
    ADMS,
    STATUS
} from "@/app-service/vocabulary";

export function exportToJsonLd(catalog) {
    const output = {
        "@type": catalog.types,
        "@id": {"@id": catalog.iri},
        [ADMS.status]: [STATUS.Withdrawn]
    };
    return output;
}
