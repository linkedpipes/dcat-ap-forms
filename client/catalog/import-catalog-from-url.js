import {getRemoteJson} from "../app-service/http";
import {importCatalogFromJsonLd} from "./import-catalog";

export function importCatalogFromUrlWithProxy(url) {
  return getRemoteJsonLd(updateUrl(url))
    .then(response => importCatalogFromJsonLd(response.json));
}

function getRemoteJsonLd(url) {
  return getRemoteJson(url, "application/ld+json");
}

function updateUrl(url) {
  if (DEREFERENCE_PROXY === "") {
    return url;
  } else {
    return DEREFERENCE_PROXY.replace("{}", encodeURIComponent(url));
  }
}
