import {getRemoteJson} from "../app-service/http";
import {importCatalogFromJsonLd} from "./import-catalog";
import {configuration} from "./../client-configuration";

export function importCatalogFromUrlWithProxy(url) {
  return getRemoteJsonLd(updateUrl(url))
    .then(response => importCatalogFromJsonLd(response.json));
}

function getRemoteJsonLd(url) {
  return getRemoteJson(url, "application/ld+json");
}

function updateUrl(url) {
  if (configuration.dereferenceTemplate === "") {
    return url;
  } else {
    return configuration.dereferenceTemplate
      .replace("{}", encodeURIComponent(url));
  }
}
