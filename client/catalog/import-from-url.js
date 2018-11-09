import {getRemoteJson} from "@/app-service/http";
import {
    normalize,
    getDefaultGraphData,
    getByType,
    getValue,
    getValues,
    getByIri,
    getId
} from "@/app-service/jsonld";
import {
    DCTERMS,
    DCATAP,
    FOAF,
    VCARD,
    SCHEMA,
    PU,
    SKOS,
    NKOD
} from "@/app-service/vocabulary";

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
        return parseCatalog(catalog);
    });
}

function getRemoteJsonLd(url) {
    return getRemoteJson(update_url(url), "application/ld+json");
}

function parseCatalog(dataset) {
    const catalogUrl = getValue(dataset, NKOD.lkod);
    if (catalogUrl === undefined) {
        throw {
            "error": "INVALID_DATA",
            "message": "missing_lkod_reference"
        };
    } else {
        return {
            "url": catalogUrl
        }
    }
}