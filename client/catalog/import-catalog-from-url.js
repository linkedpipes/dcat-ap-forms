import {getRemoteJsonLd} from "../app-service/http";
import {importCatalogFromJsonLd} from "./import-catalog";
import {configuration} from "./../client-configuration";

/**
 * Import dcat-ap:Catalog record.
 *
 * The given URL may be substituted to the proxy dereference template pattern.
 */
export async function importCatalogFromUrlWithProxy(url) {
  const response = await getRemoteJsonLd(applyUrlProxyTemplate(url));
  return importCatalogFromJsonLd(response.json);
}

function applyUrlProxyTemplate(url) {
  const urlTemplate = configuration.dereferenceTemplate;
  if (urlTemplate === "") {
    return url;
  } else {
    return urlTemplate.replace("{}", encodeURIComponent(url));
  }
}
