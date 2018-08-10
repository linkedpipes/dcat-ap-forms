/*
Cache remote codelist results to enable IRI to label translation.
*/

const storage = {};

export function addItems(type, items) {
    if (storage[type] === undefined) {
        storage[type] = {};
    }
    const storageFotType = storage[type];
    items.forEach((item) => {
        storageFotType[item["code"]] = item;
    });
}

export function getItem(type, url) {
    if (storage[type] === undefined) {
        return undefined;
    }
    return storage[type][url];
}

