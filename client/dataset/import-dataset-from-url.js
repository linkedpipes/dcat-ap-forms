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
import {configuration} from "./../client-configuration";

/**
 * Import dcat-ap:Dataset record.
 *
 * The given URL may be substituted to the proxy dereference template pattern.
 */
export function importDatasetFromUrlWithProxy(url, defaultLanguage) {
  return importFromRemote(getRemoteJsonLd(updateUrl(url)), defaultLanguage);
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

/**
 * Import dcat-ap:Dataset record from given URL.
 * Use this only if the record is complete as there is no request
 * for additional resources.
 */
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

/**
 * Fetch and add labels to the given dataset and distributions.
 */
export function fetchCodelistLabels(dataset, distributions, language) {
  const formats = new Set();
  const mediaTypes = new Set();
  distributions.forEach((distribution) => {
    formats.add(distribution.format);
    mediaTypes.add(distribution.media_type);
  });
  formats.forEach((iri) => {
    fetchLabelFromCodeList("file-type", iri, language);
  });
  mediaTypes.forEach((iri) => {
    fetchLabelFromCodeList("media-types", iri, language);
  });
  dataset.spatial.forEach((spatial) => {
    switch (spatial.type) {
    case SPATIAL_COUNTRY:
      fetchLabelFromCodeList(COUNTRIES, spatial.url, language);
      break;
    case SPATIAL_CONTINENT:
      fetchLabelFromCodeList(CONTINENTS, spatial.url, language);
      break;
    case SPATIAL_RUIAN:
      fetchLabelFromCodeList(RUIAN, spatial.url, language);
      break;
    }
  });
}
