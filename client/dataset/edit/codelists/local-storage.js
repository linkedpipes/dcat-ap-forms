/*
 * Cache remote codelist results to enable IRI to label translation.
 */

import Vue from "vue";
import {getLocalJson} from "../../../app-service/http";

const storage = {};

// We can change language on fly, so the items need to contains all language
// mutations.
export function addStoreItems(type, items) {
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

export function getStoreLabel(store, type, iri, lang) {
  if (!iri) {
    return "";
  }
  const item = getStoreItem(store, type, iri, lang);
  if (item) {
    return item[lang] || iri;
  } else {
    return iri;
  }
}

export function getStoreItem(store, type, iri) {
  if (store[type] === undefined) {
    return undefined;
  }
  return store[type][iri];
}

export function getStore() {
  return storage;
}

export function fetchLabelFromCodeList(codeList, iri, lang) {
  if (!iri){
    return Promise.resolve();
  }
  const url = createTitleQueryUrl(codeList, iri, lang);
  return getLocalJson(url).then((response) => {
    addStoreItems(codeList, response.json.response.docs);
    return response.json.response.docs;
  });
}

function createTitleQueryUrl(codeList, iri, lang) {
  const escapedIri = iri.replace(":", "\\:");
  return "/api/v1/codelist/" + codeList +
        "?iri=" + encodeURIComponent(escapedIri) +
        "&lang=" + lang;
}
