const codelist = [
    {
        "value": "https://data.gov.cz/slovník/nkod/CkanApiLkod",
        "cs": "CKAN API"
    },
    {
        "value": "https://data.gov.cz/slovník/nkod/DcatApLkod",
        "cs": "DCAT-AP Dokumenty"
    },
	{
        "value": "https://data.gov.cz/slovník/nkod/DcatApSparql",
        "cs": "DCAT-AP SPARQL Endpoint"
    }
];

export default codelist;

export function getLabel(iri) {
    for (let index in codelist) {
        if (codelist[index]["value"] === iri) {
            return codelist[index]["cs"];
        }
    }
    return iri;
}