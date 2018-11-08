const prefix = "http://publications.europa.eu/resource/authority/data-theme/";

const codelist = [
    {
        "value": prefix + "TRAN",
        "cs": "Doprava",
        "en": "Doprava"
    }, {
        "value": prefix + "ENER",
        "cs": "Energie",
        "en": "Energie"
    }, {
        "value": prefix + "ECON",
        "cs": "Hospodářství a finance",
        "en": "Hospodářství a finance"
    }, {
        "value": prefix + "INTR",
        "cs": "Mezinárodní otázky",
        "en": "Mezinárodní otázky"
    }, {
        "value": prefix + "SOCI",
        "cs": "Populace a společnost",
        "en": "Populace a společnost"
    }, {
        "value": prefix + "OP_DATPRO",
        "cs": "Předběžné údaje",
        "en": "Předběžné údaje"
    }, {
        "value": prefix + "REGI",
        "cs": "Regiony a města",
        "en": "Regiony a města"
    }, {
        "value": prefix + "JUST",
        "cs": "Spravedlnost, právní systém a veřejná bezpečnost",
        "en": "Spravedlnost, právní systém a veřejná bezpečnost"
    }, {
        "value": prefix + "TECH",
        "cs": "Věda a technika",
        "en": "Věda a technika"
    }, {
        "value": prefix + "GOVE",
        "cs": "Vláda a veřejný sektor",
        "en": "Vláda a veřejný sektor"
    }, {
        "value": prefix + "EDUC",
        "cs": "Vzdělávání, kultura a sport",
        "en": "Vzdělávání, kultura a sport"
    }, {
        "value": prefix + "HEAL",
        "cs": "Zdraví",
        "en": "Zdraví"
    }, {
        "value": prefix + "AGRI",
        "cs": "Zemědělství, rybolov, lesnictví a výživa",
        "en": "Zemědělství, rybolov, lesnictví a výživa"
    }, {
        "value": prefix + "ENVI",
        "cs": "Životní prostředí",
        "en": "Životní prostředí"
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
