import {importFromJsonLd} from "./import-dataset";
import {getRemoteJson} from "../app-service/http";
import {
  SPATIAL_RUIAN,
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
} from "./dataset-model";
import {fetchLabelFromCodeList} from "./edit/codelists/local-storage";
import {
  RUIAN,
  CONTINENTS,
  COUNTRIES,
} from "./edit/codelists/server-codelists";

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
  dataset.spatial.forEach((spatial) => {
    switch (spatial.type) {
    case SPATIAL_COUNTRY:
      fetchLabelFromCodeList(COUNTRIES, spatial.url, lang);
      break;
    case SPATIAL_CONTINENT:
      fetchLabelFromCodeList(CONTINENTS, spatial.url, lang);
      break;
    case SPATIAL_RUIAN:
      fetchLabelFromCodeList(RUIAN, spatial.url, lang);
      break;
    }
  });
}
