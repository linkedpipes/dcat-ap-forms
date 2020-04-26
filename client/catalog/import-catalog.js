import {
  selectByType,
  getId,
  getTypes,
  getValue,
  getMultiLangString,
  unpackLangStringToProp,
} from "../app-service/import-utilities";
import {DCATAP, DCTERMS} from "../app-service/vocabulary";
import jsonld from "jsonld";
import {createCatalog} from "./catalog-model";

/**
 * Does not import full catalog information.
 */
export function importCatalogFromJsonLd(jsonLdContent, defaultLanguage) {
  return jsonld().flatten(jsonLdContent).then(flatJsonLd => {
    const catalogEntities = selectByType(flatJsonLd, DCATAP.Catalog);
    if (catalogEntities.length !== 1) {
      throw new Error(
        "Invalid number of catalog records (" + catalogEntities.length + ")");
    }
    const catalogEntity = catalogEntities[0];
    const title = getMultiLangString(catalogEntity, DCTERMS.title);
    return {
      ...createCatalog(),
      ...unpackLangStringToProp("title", defaultLanguage, title),
      "iri": getId(catalogEntity),
      "endpoint": getValue(catalogEntity, DCATAP.endpointURL),
      "types": getTypes(catalogEntity),
    };
  });
}
