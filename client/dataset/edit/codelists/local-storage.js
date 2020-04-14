/*
 * Cache remote codelist results to enable IRI to label translation.
 */

import Vue from "vue";
import {getLocalJson} from "../../../app-service/http";

const storage = {};

// We can change language on fly, so the items need to contains all language
// mutations.
export function addItems(type, items) {
  if (storage[type] === undefined) {
    // We need to add this in reactive way otherwise Vue wont detect
    // the change. For more info see:
    // https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
    Vue.set(storage, type, [])
  }
  const storageFotType = storage[type];
  items.forEach((item) => {
    // Again add to be reactive.
    Vue.set(storageFotType, item["code"], item)
  });
}

export function getItem(store, type, iri, lang) {
  if (store[type] === undefined) {
    return undefined;
  }
  const item = store[type][iri];
  if (item) {
    return item[lang];
  } else {
    return undefined;
  }
}

export function getStore() {
  return storage;
}

export function fetchLabelFromCodeList(codeList, iri, lang) {
  const url = createTitleQueryUrl(codeList, iri, lang);
  return getLocalJson(url).then((response) => {
    addItems(codeList, response.json.response.docs);
    return response.json.response.docs;
  });
}

function createTitleQueryUrl(codeList, iri, lang) {
  const escapedIri = iri.replace(":", "\\:");
  return "/api/v1/codelist/" + codeList +
        "?iri=" + encodeURIComponent(escapedIri) +
        "&lang=" + lang;
}


