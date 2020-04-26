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

/**
 * Support only one value per language.
 */
export function getLangString(entity, predicate) {
  const value = entity[predicate];
  if (value === undefined || value === null) {
    return undefined;
  }
  const result = {};
  if (Array.isArray(value)) {
    value.forEach((valueEntry) => {
      const [lang, text] = getStringForValue(valueEntry);
      result[lang] = text;
    });
  } else {
    const [lang, text] = getStringForValue(value);
    result[lang] = text;
  }
  return result;
}

/**
 * Return language tag and string value.
 */
function getStringForValue(value) {
  const language = value["@language"] || "";
  const text = value["@value"] || value;
  return [language, text];
}