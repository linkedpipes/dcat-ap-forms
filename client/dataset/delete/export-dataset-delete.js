import { ADMS, STATUS } from "../../app-service/vocabulary";

/**
 * @param {{iri: string}} dataset
 */
export function exportDatasetToJsonLdForDelete(dataset) {
  return {
    "@type": "http://www.w3.org/ns/dcat#Dataset",
    "@id": dataset.iri,
    [ADMS.status]: { "@id": STATUS.Withdrawn },
  };
}
