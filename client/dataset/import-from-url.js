import {getRemoteJson} from "../app-service/http";
import {
  normalize,
  getDefaultGraphData,
  getByType,
  getValue,
  getValues,
  getId
} from "../app-service/jsonld";
import {
  DCTERMS,
  DCATAP,
  FOAF,
} from "../app-service/vocabulary";
import {typeFromUrl} from "./edit/codelists/ruian-type";
import {parseDump} from "./edit/loader";
import {createDataset} from "./edit/dataset-model";
import {createDistribution} from "./edit/distribution-model";

function update_url(url) {
  if (DEREFERENCE_PROXY === "") {
    return url;
  } else {
    return DEREFERENCE_PROXY.replace("{}", encodeURIComponent(url));
  }
}

export function importDataset(url, lang, codelist, update) {
  // Keep this as much consistent with dataset-model! any
  // parsing logic must go into parseDump
  return new Promise((resolve) => {
    let get = getRemoteJsonLdFile;
    if (update) {
      get = getRemoteJsonLd;
    }

    get(url).then((response) => {
      const graphData = getDefaultGraphData(normalize(response.json));
      let pkg = {
        "dataset": createDataset(),
        "distributions": [createDistribution()]
      };
      parseDump(graphData, pkg.dataset, pkg.distributions, lang, codelist, null)
        .then((pkg) => {
          resolve(pkg);
        });
    });
  });
}

function getRemoteJsonLd(url) {
  return getRemoteJson(update_url(url), "application/ld+json");
}

function getRemoteJsonLdFile(url) {
  return getRemoteJson(url, "*");
}

function parseDataset(dataset) {
  return {
    "iri": getId(dataset),
    "title": getValue(dataset, DCTERMS.title),
    "description": getValue(dataset, DCTERMS.description),
    "accrual_periodicity": getValue(dataset, DCTERMS.accrualPeriodicity),
    "documentation": getValue(dataset, FOAF.page),
    "keywords": getValues(dataset, DCATAP.keyword),
    //
    "ruian_type": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
    "ruian": "",
    //
    ...parseSpatial(getValues(dataset, DCTERMS.spatial))
  }
}

function parseSpatial(values) {
  // https://linked.cuzk.cz/resource/ruian/stat/1
  let url = undefined;
  for (let index in values) {
    if (!Object.prototype.hasOwnProperty.call(values, index)) {
      continue;
    }
    // We can not dereference, so we manually parse instead.
    if (!values[index].startsWith("https://linked.cuzk.cz/resource/ruian")) {
      continue;
    }
    url = values[index];
    break;
  }
  if (url === undefined) {
    return {};
  }
  let type = typeFromUrl(url);
  if (type === undefined) {
    console.warn("Can't resolve type for:", url);
  }
  return {
    "ruian": url,
    "ruian_type": type
  };
}

export function importMinimalDataset(url) {
  return getRemoteJsonLd(url).then((response) => {
    const graphData = getDefaultGraphData(normalize(response.json));
    const dataset = getByType(graphData, DCATAP.Dataset)[0];
    if (dataset === undefined) {
      throw {"error": "FETCH"};
    }

    const datasetModel = {
      ...parseDataset(dataset),
    };

    return {
      "dataset": datasetModel,
    };
  });
}

