const catalogTypeCodeList = [
  {
    "value": "https://data.gov.cz/slovník/nkod/CkanApiLkod",
    "cs": "CKAN API",
    "en": "CKAN API",
  },
  {
    "value": "https://data.gov.cz/slovník/nkod/DcatApLkod",
    "cs": "DCAT-AP Dokumenty",
    "en": "DCAT-AP Documents",
  },
  {
    "value": "https://data.gov.cz/slovník/nkod/DcatApSparql",
    "cs": "DCAT-AP SPARQL Endpoint",
    "en": "DCAT-AP SPARQL Endpoint",
  },
];

export default catalogTypeCodeList;

export function getCatalogTypeLabel(iri, lang) {
  for (let item of catalogTypeCodeList) {
    if (item["value"] === iri) {
      return item[lang];
    }
  }
  return iri;
}
