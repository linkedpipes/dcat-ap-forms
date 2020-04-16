const prefix = "http://publications.europa.eu/resource/authority/data-theme/";

const codelist = [
  {
    "value": prefix + "TRAN",
    "cs": "Doprava",
    "en": "Transport",
  }, {
    "value": prefix + "ENER",
    "cs": "Energie",
    "en": "Energy",
  }, {
    "value": prefix + "ECON",
    "cs": "Hospodářství a finance",
    "en": "Economy and finance",
  }, {
    "value": prefix + "INTR",
    "cs": "Mezinárodní otázky",
    "en": "International issues",
  }, {
    "value": prefix + "SOCI",
    "cs": "Populace a společnost",
    "en": "Population and society",
  }, {
    "value": prefix + "OP_DATPRO",
    "cs": "Předběžné údaje",
    "en": "Provisional data",
  }, {
    "value": prefix + "REGI",
    "cs": "Regiony a města",
    "en": "Regions and cities",
  }, {
    "value": prefix + "JUST",
    "cs": "Spravedlnost, právní systém a veřejná bezpečnost",
    "en": "Justice, legal system and public safety",
  }, {
    "value": prefix + "TECH",
    "cs": "Věda a technika",
    "en": "Science and technology",
  }, {
    "value": prefix + "GOVE",
    "cs": "Vláda a veřejný sektor",
    "en": "Government and public sector",
  }, {
    "value": prefix + "EDUC",
    "cs": "Vzdělávání, kultura a sport",
    "en": "Education, culture and sport",
  }, {
    "value": prefix + "HEAL",
    "cs": "Zdraví",
    "en": "Health",
  }, {
    "value": prefix + "AGRI",
    "cs": "Zemědělství, rybolov, lesnictví a výživa",
    "en": "Agriculture, fisheries, forestry and food",
  }, {
    "value": prefix + "ENVI",
    "cs": "Životní prostředí",
    "en": "Environment",
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
