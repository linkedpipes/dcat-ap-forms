export const continentPrefix =
  "http://publications.europa.eu/resource/authority/continent/";

const continentCodelist = [
  {
    "value": continentPrefix + "EUROPE",
    "cs": "Evropa",
    "en": "Europe",
  },
  {
    "value": continentPrefix + "AMERICA",
    "cs": "Amerika",
    "en": "America",
  },
  {
    "value": continentPrefix + "ASIA",
    "cs": "Asie",
    "en": "Asia",
  },
  {
    "value": continentPrefix + "AFRICA",
    "cs": "Africa",
    "en": "Africa",
  },
  {
    "value": continentPrefix + "OCEANIA",
    "cs": "Oceánie",
    "en": "Oceania",
  },
  {
    "value": continentPrefix + "ANTARCTICA",
    "cs": "Antarktida",
    "en": "Antarctica",
  },
  {
    "value": continentPrefix + "OP_DATPRO",
    "cs": "Předběžné údaje",
    "en": "Provisional data",
  },
];

export default continentCodelist;

export function getContinentLabel(iri, lang) {
  for (let index in continentCodelist) {
    if (continentCodelist[index]["value"] === iri) {
      return continentCodelist[index][lang];
    }
  }
  return iri;
}
