const codelist = [
    {
        "cs": "denní",
        "value": "http://publications.europa.eu/resource/authority/frequency/DAILY"
    },
    {
        "cs": "týdenní",
        "value": "http://publications.europa.eu/resource/authority/frequency/WEEKLY"
    },
    {
        "cs": "měsíční",
        "value": "http://publications.europa.eu/resource/authority/frequency/MONTHLY"
    },
    {
        "cs": "čtvrtletní",
        "value": "http://publications.europa.eu/resource/authority/frequency/QUARTERLY"
    },
    {
        "cs": "pololetní",
        "value": "http://publications.europa.eu/resource/authority/frequency/ANNUAL_2"
    },
    {
        "cs": "roční",
        "value": "http://publications.europa.eu/resource/authority/frequency/ANNUAL"
    },
    {
        "cs": "průběžně aktualizovaná",
        "value": "http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT"
    },
    {
        "cs": "nikdy",
        "value": "http://publications.europa.eu/resource/authority/frequency/NEVER"
    },
    {
        "cs": "nepravidelná",
        "value": "http://publications.europa.eu/resource/authority/frequency/IRREG"
    },
    {
        "cs": "neznámá",
        "value": "http://publications.europa.eu/resource/authority/frequency/UNKNOWN"
    },
    {
        "cs": "dvakrát denně",
        "value": "http://publications.europa.eu/resource/authority/frequency/DAILY_2"
    },
    {
        "cs": "dvakrát týdně",
        "value": "http://publications.europa.eu/resource/authority/frequency/WEEKLY_2"
    },
    {
        "cs": "třikrát týdně",
        "value": "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3"
    },
    {
        "cs": "jednou za čtrnáct dní",
        "value": "http://publications.europa.eu/resource/authority/frequency/BIWEEKLY"
    },
    {
        "cs": "dvakrát za měsíc",
        "value": "http://publications.europa.eu/resource/authority/frequency/MONTHLY_2"
    },
    {
        "cs": "třikrát za měsíc",
        "value": "http://publications.europa.eu/resource/authority/frequency/MONTHLY_3"
    },
    {
        "cs": "jednou za dva měsíce",
        "value": "http://publications.europa.eu/resource/authority/frequency/BIMONTHLY"
    },
    {
        "cs": "třikrát do roka",
        "value": "http://publications.europa.eu/resource/authority/frequency/ANNUAL_3"
    },
    {
        "cs": "jednou za dva roky",
        "value": "http://publications.europa.eu/resource/authority/frequency/BIENNIAL"
    },
    {
        "cs": "jednou za tři roky",
        "value": "http://publications.europa.eu/resource/authority/frequency/TRIENNIAL"
    },
    {
        "cs": "průběžně",
        "value": "http://publications.europa.eu/resource/authority/frequency/CONT"
    },
    {
        "cs": "ostatní",
        "value": "http://publications.europa.eu/resource/authority/frequency/OTHER"
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