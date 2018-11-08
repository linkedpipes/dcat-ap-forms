export function getId(entity) {
    if (entity["@id"]) {
        return entity["@id"];
    } else if (entity["id"]) {
        return entity["id"];
    } else {
        // Blank node.
        return undefined;
    }
}

export function getTypes(entity) {
    if (entity["@type"]) {
        return entity ["@type"];
    } else {
        return [];
    }
}

export function getValue(entity, predicate) {
    return getValues(entity, predicate)[0];
}

export function getValues(entity, predicate) {
    let value = entity[predicate];
    if (value === undefined) {
        return [];
    }
    const output = [];
    if (!Array.isArray(value)) {
        value = [value];
    }
    value.forEach((item) => {
        if (item["@value"] !== undefined) {
            output.push(item["@value"]);
        } else if (item["@id"] !== undefined) {
            output.push(item["@id"]);
        } else {
            output.push(item);
        }
    });
    return output;
}
