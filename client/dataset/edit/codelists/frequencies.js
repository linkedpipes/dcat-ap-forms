const prefix = "http://publications.europa.eu/resource/authority/frequency/";

const codelist = [
  {
    "value": prefix + "DAILY",
    "cs": "denní",
    "en": "daily"
  },
  {
    "value": prefix + "WEEKLY",
    "cs": "týdenní",
    "en": "weekly"
  },
  {
    "value": prefix + "MONTHLY",
    "cs": "měsíční",
    "en": "monthly"
  },
  {
    "value": prefix + "QUARTERLY",
    "cs": "čtvrtletní",
    "en": "quarterly"
  },
  {
    "value": prefix + "ANNUAL_2",
    "cs": "pololetní",
    "en": "semiannual"
  },
  {
    "value": prefix + "ANNUAL",
    "cs": "roční",
    "en": "annual"
  },
  {
    "value": prefix + "UPDATE_CONT",
    "cs": "průběžně aktualizovaná",
    "en": "continuously updated"
  },
  {
    "value": prefix + "NEVER",
    "cs": "nikdy",
    "en": "never"
  },
  {
    "value": prefix + "IRREG",
    "cs": "nepravidelná",
    "en": "irregular"
  },
  {
    "value": prefix + "UNKNOWN",
    "cs": "neznámá",
    "en": "unknown"
  },
  {
    "value": prefix + "DAILY_2",
    "cs": "dvakrát denně",
    "en": "twice a day"
  },
  {
    "value": prefix + "WEEKLY_2",
    "cs": "dvakrát týdně",
    "en": "semiweekly"
  },
  {
    "value": prefix + "WEEKLY_3",
    "cs": "třikrát týdně",
    "en": "three times a week"
  },
  {
    "value": prefix + "BIWEEKLY",
    "cs": "jednou za čtrnáct dní",
    "en": "biweekly"
  },
  {
    "value": prefix + "MONTHLY_2",
    "cs": "dvakrát za měsíc",
    "en": "semimonthly"
  },
  {
    "value": prefix + "MONTHLY_3",
    "cs": "třikrát za měsíc",
    "en": "three times a month"
  },
  {
    "value": prefix + "BIMONTHLY",
    "cs": "jednou za dva měsíce",
    "en": "bimonthly"
  },
  {
    "value": prefix + "ANNUAL_3",
    "cs": "třikrát do roka",
    "en": "three times a year"
  },
  {
    "value": prefix + "BIENNIAL",
    "cs": "jednou za dva roky",
    "en": "biennial"
  },
  {
    "value": prefix + "TRIENNIAL",
    "cs": "jednou za tři roky",
    "en": "triennial"
  },
  {
    "value": prefix + "CONT",
    "cs": "průběžně",
    "en": "continuous"
  },
  {
    "value": prefix + "OTHER",
    "cs": "ostatní",
    "en": "other"
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
