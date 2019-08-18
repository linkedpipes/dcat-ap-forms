const codelist = [
  {
    "value": "https://data.gov.cz/slovník/nkod/CkanApiLkod",
    "cs": "CKAN API",
    "en": "CKAN API"
  },
  {
    "value": "https://data.gov.cz/slovník/nkod/DcatApLkod",
    "cs": "DCAT-AP Dokumenty",
    "en": "DCAT-AP Documents"
  },
  {
    "value": "https://data.gov.cz/slovník/nkod/DcatApSparql",
    "cs": "DCAT-AP SPARQL Endpoint",
    "en": "DCAT-AP SPARQL Endpoint"
  }
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
