import {ADMS, STATUS} from "../../app-service/vocabulary";

/**
 * @param {{iri: string}} catalog
 * @returns
 */
export function exportCatalogToJsonLdForDelete(catalog) {
  return {
    "@context": "https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-dat/draft/katalog/kontext.jsonld",
    "typ": "Katalog",
    "iri": catalog.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}
