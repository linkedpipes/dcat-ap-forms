import {
  DCATAP,
  NKOD,
  ADMS,
  STATUS
} from "../../app-service/vocabulary";

export function exportToJsonLd(dataset) {
  const output = {
    "@type": [DCATAP.Dataset, NKOD.Formular],
    "@id": dataset.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn}
  };
  return output;
}
