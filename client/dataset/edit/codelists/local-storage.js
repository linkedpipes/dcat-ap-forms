/*
 * Cache remote codelist results to enable IRI to label translation.
 */

import Vue from "vue";

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
        storageFotType[item["code"]] = item;
    });
}

export function getItem(store, type, iri, lang) {
    if (store[type] === undefined) {
        return undefined;
    }
    const item = store[type][iri];
    if (item) {
        return item["lang"];
    } else {
        return undefined;
    }
}

export function getStore() {
    return storage;
}
