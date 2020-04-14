import {getRemoteJson} from "../app-service/http";
import {
  normalize,
  getDefaultGraphData,
  getTypes,
  getByType,
  getId,
  getValue
} from "../app-service/jsonld";
import {
  DCATAP, DCTERMS
} from "../app-service/vocabulary";

function update_url(url) {
  if (DEREFERENCE_PROXY === "") {
    return url;
  } else {
    return DEREFERENCE_PROXY.replace("{}", encodeURIComponent(url));
  }
}

export function importCatalog(url) {
  return getRemoteJsonLd(url).then((response) => {
    const graphData = getDefaultGraphData(normalize(response.json));
    const catalog = getByType(graphData, DCATAP.Catalog)[0];
    if (catalog === undefined) {
      throw {"error": "FETCH"};
    }

    return {
      "iri": getId(catalog),
      "title": getValue(catalog, DCTERMS.title),
      "endpoint": getValue(catalog, DCATAP.endpointURL),
      "types": getTypes(catalog)
    }
  });
}

function getRemoteJsonLd(url) {
  return getRemoteJson(update_url(url), "application/ld+json");
}
