const codelist = [
    {
        "value": "http://publications.europa.eu/resource/authority/data-theme/AGRI",
        "cs": "Zemědělství, rybolov, lesnictví a výživa"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/ECON",
        "cs": "Hospodářství a finance"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/EDUC",
        "cs": "Vzdělávání, kultura a sport"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/ENER",
        "cs": "Energie"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/ENVI",
        "cs": "Životní prostředí"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/GOVE",
        "cs": "Vláda a veřejný sektor"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/HEAL",
        "cs": "Zdraví"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/INTR",
        "cs": "Mezinárodní otázky"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/JUST",
        "cs": "Spravedlnost, právní systém a veřejná bezpečnost"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/OP_DATPRO",
        "cs": "Předběžné údaje"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/REGI",
        "cs": "Regiony a města"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
        "cs": "Populace a společnost"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/TECH",
        "cs": "Věda a technika"
    }, {
        "value": "http://publications.europa.eu/resource/authority/data-theme/TRAN",
        "cs": "Doprava"
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