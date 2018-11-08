const prefix = "http://publications.europa.eu/resource/authority/frequency/";

const codelist = [
    {
        "value": prefix + "DAILY",
        "cs": "denní",
        "en": "denní"
    },
    {
        "value": prefix + "WEEKLY",
        "cs": "týdenní",
        "en": "týdenní"
    },
    {
        "value": prefix + "MONTHLY",
        "cs": "měsíční",
        "en": "měsíční"
    },
    {
        "value": prefix + "QUARTERLY",
        "cs": "čtvrtletní",
        "en": "čtvrtletní"
    },
    {
        "value": prefix + "ANNUAL_2",
        "cs": "pololetní",
        "en": "pololetní"
    },
    {
        "value": prefix + "ANNUAL",
        "cs": "roční",
        "en": "roční"
    },
    {
        "value": prefix + "UPDATE_CONT",
        "cs": "průběžně aktualizovaná",
        "en": "průběžně aktualizovaná"
    },
    {
        "value": prefix + "NEVER",
        "cs": "nikdy",
        "en": "nikdy"
    },
    {
        "value": prefix + "IRREG",
        "cs": "nepravidelná",
        "en": "nepravidelná"
    },
    {
        "value": prefix + "UNKNOWN",
        "cs": "neznámá",
        "en": "neznámá"
    },
    {
        "value": prefix + "DAILY_2",
        "cs": "dvakrát denně",
        "en": "dvakrát denně"
    },
    {
        "value": prefix + "WEEKLY_2",
        "cs": "dvakrát týdně",
        "en": "dvakrát týdně"
    },
    {
        "value": prefix + "WEEKLY_3",
        "cs": "třikrát týdně",
        "en": "třikrát týdně"
    },
    {
        "value": prefix + "BIWEEKLY",
        "cs": "jednou za čtrnáct dní",
        "en": "jednou za čtrnáct dní"
    },
    {
        "value": prefix + "MONTHLY_2",
        "cs": "dvakrát za měsíc",
        "en": "dvakrát za měsíc"
    },
    {
        "value": prefix + "MONTHLY_3",
        "cs": "třikrát za měsíc",
        "en": "třikrát za měsíc"
    },
    {
        "value": prefix + "BIMONTHLY",
        "cs": "jednou za dva měsíce",
        "en": "jednou za dva měsíce"
    },
    {
        "value": prefix + "ANNUAL_3",
        "cs": "třikrát do roka",
        "en": "třikrát do roka"
    },
    {
        "value": prefix + "BIENNIAL",
        "cs": "jednou za dva roky",
        "en": "jednou za dva roky"
    },
    {
        "value": prefix + "TRIENNIAL",
        "cs": "jednou za tři roky",
        "en": "jednou za tři roky"
    },
    {
        "value": prefix + "CONT",
        "cs": "průběžně",
        "en": "průběžně"
    },
    {
        "value": prefix + "OTHER",
        "cs": "ostatní",
        "en": "ostatní"
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
