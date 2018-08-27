/*
 * Cache remote codelist results to enable IRI to label translation.
 */

import Vue from "vue";

const storage = {};

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

export function getItem(store, type, iri) {
    if (store[type] === undefined) {
        return undefined;
    }
    return store[type][iri];
}

export function getStore() {
    return storage;
}
