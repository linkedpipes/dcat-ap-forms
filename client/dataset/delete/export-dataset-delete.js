import {ADMS, STATUS} from "../../app-service/vocabulary";

const CONTEXT = "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/"
  + "2021-01-11/kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

export function exportDatasetToJsonLdForDelete(dataset) {
  return {
    "@context": CONTEXT,
    "typ": "Datová sada",
    "iri": dataset.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}
