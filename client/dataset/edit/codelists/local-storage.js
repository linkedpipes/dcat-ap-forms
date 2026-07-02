/*
 * Cache remote codelist results to enable IRI to label translation.
 */

import Vue from "vue";
import { fetchByGetAsJson } from "../../../app-service/http";
import { configuration } from "../../../client-configuration";

/** @type {{[name:string]: *}} */
const storage = {};

/**
 * @param {string} type
 * @param {*[]} items
 */
export function addItemsToStore(type, items) {
  if (storage[type] === undefined) {
    // We need to add this in reactive way otherwise Vue wont detect
    // the change. For more info see:
    // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
    Vue.set(storage, type, []);
  }
  const storageFotType = storage[type];
  items.forEach((item) => {
    // Again add to be reactive.
    Vue.set(storageFotType, item["code"], item);
  });
}

export function getLabelFromStore(store, type, iri, lang) {
  if (!iri) {
    return "";
  }
  const item = getItemFromStore(store, type, iri, lang);
  if (item) {
    return item[lang] || iri;
  } else {
    return iri;
  }
}

export function getItemFromStore(store, type, iri) {
  if (store[type] === undefined) {
    return undefined;
  }
  return store[type][iri];
}

export function getStore() {
  return storage;
}

export function fetchLabelFromCodeList(codeList, iri, lang) {
  if (!iri) {
    return Promise.resolve();
  }
  const url = createTitleQueryUrl(codeList, iri, lang);
  return fetchByGetAsJson(url).then((response) => {
    addItemsToStore(codeList, response.json.response.docs);
    return response.json.response.docs;
  });
}

function createTitleQueryUrl(codeList, iri, lang) {
  const escapedIri = iri.replace(":", "\\:");
  return configuration.apiPrefix + "codelist/" + codeList +
    "?iri=" + encodeURIComponent(escapedIri) +
    "&lang=" + lang;
}
