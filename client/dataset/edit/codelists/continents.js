const prefix = "http://publications.europa.eu/resource/authority/continent/";

const codelist = [
  {
    "value": prefix + "EUROPE",
    "cs": "Evropa",
    "en": "Europe"
  },
  {
    "value": prefix + "AMERICA",
    "cs": "Amerika",
    "en": "America"
  },
  {
    "value": prefix + "ASIA",
    "cs": "Asie",
    "en": "Asia"
  },
  {
    "value": prefix + "AFRICA",
    "cs": "Africa",
    "en": "Africa"
  },
  {
    "value": prefix + "OCEANIA",
    "cs": "Oceánie",
    "en": "Oceania"
  },
  {
    "value": prefix + "ANTARCTICA",
    "cs": "Antarktida",
    "en": "Antarctica"
  },
  {
    "value": prefix + "OP_DATPRO",
    "cs": "Předběžné údaje",
    "en": "Provisional data"
  },
];

export default codelist;

export function getLabel(iri, lang) {
  for (let index in codelist) {
    if (codelist[index]["value"] === iri) {
      return codelist[index][lang];
    }
  }
  return iri;
}
