
export const RUIAN = "ruian";

const ruianPrefix = "https://linked.cuzk.cz/resource/ruian/";

/**
 * @param {string} value
 */
export function isRuian(value) {
  return value.startsWith(ruianPrefix);
}

export const CONTINENTS = "continents";

const continentPrefix =
  "http://publications.europa.eu/resource/authority/continent/";

/**
 * @param {string} value
 */
export function isContinent(value) {
  return value.startsWith(continentPrefix);
}

export const COUNTRIES = "countries";

const countriesPrefix =
  "http://publications.europa.eu/resource/authority/country/";

export function isCountry(iri) {
  return iri.startsWith(countriesPrefix);
}

export const PLACES = "places";

const placePrefix =
  "http://publications.europa.eu/resource/authority/place/";

/**
 * @param {string} value
 */
export function isPlace(value) {
  return value.startsWith(placePrefix);
}

export const EUROVOC = "themes";

export const MEDIA_TYPES = "media-types";

export const FILE_TYPE = "file-type";

export const HVD_CATEGORIES = "hvd-categories";

export const DATASET_THEME = "dataset-theme";

export const FREQUENCY = "frequency";

export const ISVS = "isvs";

export const RELATED_TERMS = "related-terms";
