import {ADMS, STATUS} from "../../app-service/vocabulary";

const CONTEXT = "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/" +
  "kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

export function exportDatasetToJsonLdForDelete(dataset) {
  return {
    "@context": CONTEXT,
    "typ": "Datová sada",
    "iri": dataset.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}
