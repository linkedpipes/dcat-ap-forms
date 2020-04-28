import {importFromJsonLd} from "./import-dataset";
import {getRemoteJson} from "../app-service/http";
import {SPATIAL_RUIAN} from "./dataset-model";
import {fetchLabelFromCodeList} from "./edit/codelists/local-storage";

/**
 * Used when importing dataset for edit for example from SPARQL endpoint.
 */
export function importDatasetFromUrlWithProxy(url, defaultLanguage) {
  return importFromRemote(getRemoteJsonLd(updateUrl(url)), defaultLanguage);
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

export function importDatasetFromUrl(url, defaultLanguage) {
  return importFromRemote(getRemoteFile(url, defaultLanguage));
}

function getRemoteFile(url) {
  return getRemoteJson(url, "*");
}

function importFromRemote(getFunction, defaultLanguage) {
  return getFunction.then((response) => {
    return importFromJsonLd(response.json, defaultLanguage);
  });
}

export function fetchCodelistLabels(dataset, distributions, lang) {
  const formats = new Set();
  const mediaTypes = new Set();
  distributions.forEach((distribution) => {
    formats.add(distribution.format);
    mediaTypes.add(distribution.media_type);
  });
  formats.forEach((iri) => {
    fetchLabelFromCodeList("file-type", iri, lang);
  });
  mediaTypes.forEach((iri) => {
    fetchLabelFromCodeList("media-types", iri, lang);
  });
  //
  const ruian = new Set();
  for (let spatial of dataset.spatial) {
    if (spatial.type === SPATIAL_RUIAN) {
      ruian.add(spatial.url);
    }
  }
  ruian.forEach((iri) => {
    fetchLabelFromCodeList("ruian", iri, lang);
  });
}
