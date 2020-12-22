import {ADMS, STATUS} from "../../app-service/vocabulary";

const CONTEXT =
  "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/"
  + "kontexty/rozhraní-katalogů-otevřených-dat.jsonld";


export function exportCatalogToJsonLdForDelete(catalog) {
  return {
    "@context": CONTEXT,
    "typ": "Katalog",
    "iri": catalog.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}
