
export const RUIAN = "ruian";

const ruianPrefix = "https://linked.cuzk.cz/resource/ruian/";

export function isRuian(iri) {
  return iri.startsWith(ruianPrefix);
}

export const CONTINENTS = "continents";

const continentPrefix =
  "http://publications.europa.eu/resource/authority/continent/";

export function isContinent(url) {
  return url.startsWith(continentPrefix);
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

export function isPlace(iri) {
  return iri.startsWith(placePrefix);
}

export const EUROVOC = "themes";

export const MEDIA_TYPES = "media-types";

export const FILE_TYPE = "file-type";
