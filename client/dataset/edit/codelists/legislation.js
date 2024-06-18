
const HVD = "http://data.europa.eu/eli/reg_impl/2023/138/oj";

const legislationCodelist = [
  {
    "value": HVD,
    "cs": "High Value Dataset (HVD)",
    "en": "High Value Dataset (HVD)",
  }, {
    "value": "https://www.e-sbirka.cz/eli/cz/sb/1999/106/2024-01-01/dokument/norma/cast_1/par_3a/odst_6",
    "cs": "Dynamická data",
    "en": "Dynamic data",
  }, {
    "value": "https://www.e-sbirka.cz/eli/cz/sb/1999/106/2024-01-01/dokument/norma/cast_1/par_5a/odst_1",
    "cs": "Data z veřejných registrů",
    "en": "Data from public registries",
  },
];

export default legislationCodelist;

export function getLegislationCodelist(iri, lang) {
  for (let index in legislationCodelist) {
    if (legislationCodelist[index]["value"] === iri) {
      return legislationCodelist[index][lang];
    }
  }
  return iri;
}

export function includesHvd(types) {
  return (types ?? []).includes(HVD);
}
