const codelist = [
    {
        "value": "https://data.gov.cz/slovník/nkod/Ckan",
        "cs": "CKAN API"
    },
    {
        "value": "https://data.gov.cz/slovník/nkod/DcatApLkod",
        "cs": "DCAT-AP"
    }
];

console.error("Update CKAN API IRI");

export default codelist;

export function getLabel(iri) {
    for (let index in codelist) {
        if (codelist[index]["value"] === iri) {
            return codelist[index]["cs"];
        }
    }
    return iri;
}