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
  const language = value["@language"] ?? "";
  const text = value["@value"] ?? value;
  return [language, text];
}

/**
 * Select a string for given language.
 */
export function selectString(languageString, language) {
  if (languageString[language]) {
    return languageString[language][0];
  } else {
    return undefined;
  }
}

export function selectStrings(languageString, language) {
  if (languageString[language]) {
    return languageString[language];
  } else {
    return [];
  }
}

export function getMultiLangString(entity, predicate) {
  const value = entity[predicate];
  if (value === undefined || value === null) {
    return {};
  }

  // We may get only a single string value.
  if (!Array.isArray(value)) {
    const [lang, text] = getStringForValue(value);
    return {
      [lang]: [text],
    };
  }

  const result = {};
  for (let item of value) {
    const [lang, text] = getStringForValue(item);
    if (result[lang]) {
      result[lang].push(text);
    } else {
      result[lang] = [text];
    }
  }
  return result;
}

export function selectByType(flatJsonLd, type) {
  const result = [];
  flatJsonLd.forEach((entity) => {
    if (entity["@graph"]) {
      result.push(...selectByType(entity["@graph"], type));
      return;
    }
    const entityType = getTypes(entity);
    if (entityType.includes(type)) {
      result.push(entity);
    }
  });
  return result;
}

export function selectByIri(flatJsonLd, iri) {
  const result = [];
  flatJsonLd.forEach((entity) => {
    if (entity["@graph"]) {
      result.push(...selectByIri(entity["@graph"], iri));
      return;
    }
    if (iri === getId(entity)) {
      result.push(entity);
    }
  });
  return result;
}

export function unpackLangStringToProp(
  targetProperty, defaultLanguage, langString) {
  if (langString === undefined) {
    return {
      [targetProperty + "_cs"]: "",
      [targetProperty + "_en"]: "",
    };
  }
  const stringCs = selectString(langString, "cs");
  const stringEn = selectString(langString, "en");
  const stringEmpty = selectString(langString, "");
  const result = {
    [targetProperty + "_cs"]: stringCs || "",
    [targetProperty + "_en"]: stringEn || "",
  };
  // If there is string without language we can use it for
  // defaultLanguage language value.
  const defaultLanguageProp = targetProperty + "_" + defaultLanguage;
  if (stringEmpty && result[defaultLanguageProp] === "") {
    result[defaultLanguageProp] = stringEmpty;
  }
  return result;
}
