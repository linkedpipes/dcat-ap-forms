export const DCTERMS = {
    "title": "http://purl.org/dc/terms/title",
    "temporal": "http://purl.org/dc/terms/temporal",
    "description": "http://purl.org/dc/terms/description",
    "accrualPeriodicity": "http://purl.org/dc/terms/accrualPeriodicity",
    "spatial": "http://purl.org/dc/terms/spatial",
    "format": "http://purl.org/dc/terms/format",
    "conformsTo": "http://purl.org/dc/terms/conformsTo",
    "PeriodOfTime": "http://purl.org/dc/terms/PeriodOfTime"
};

export const DCATAP = {
    "Dataset" : "http://www.w3.org/ns/dcat#Dataset",
    "contactPoint": "http://www.w3.org/ns/dcat#contactPoint",
    "distribution": "http://www.w3.org/ns/dcat#distribution",
    "theme": "http://www.w3.org/ns/dcat#theme",
    "keyword": "http://www.w3.org/ns/dcat#keyword",
    "downloadURL": "http://www.w3.org/ns/dcat#downloadURL",
    "mediaType": "http://www.w3.org/ns/dcat#mediaType",
    "Distribution": "http://www.w3.org/ns/dcat#Distribution"
};

export const FOAF = {
    "page": "http://xmlns.com/foaf/0.1/page"
};

export const VCARD = {
    "fn": "http://www.w3.org/2006/vcard/ns#fn",
    "hasEmail": "http://www.w3.org/2006/vcard/ns#hasEmail",
    "Organization": "http://www.w3.org/2006/vcard/ns#Organization"
};

export const SCHEMA = {
    "endDate": "http://schema.org/endDate",
    "startDate": "http://schema.org/startDate"
};

const PU_PREFIX = "https://data.gov.cz/podmínky-užití/";
const PU_VOCAB_PREFIX = "https://data.gov.cz/slovník/podmínky-užití/";
export const PU = {
    "specifikace": PU_VOCAB_PREFIX + "specifikace",
    "autorskeDilo": PU_VOCAB_PREFIX + "autorské-dílo",
    "databazeJakoAutorskeDilo": PU_VOCAB_PREFIX + "databáze-jako-autorské-dílo",
    "databazeChranenaZvlastnimiPravy": PU_VOCAB_PREFIX + "databáze-chráněná-zvláštními-právy",
    "autor": PU_VOCAB_PREFIX + "autor",
    "autorDatabaze": PU_VOCAB_PREFIX + "autor-databáze",
    "osobniUdaje": PU_VOCAB_PREFIX + "osobní-údaje",
    "Specifikace": PU_VOCAB_PREFIX + "Specifikace",
    "obsahujeViceAutorskychDel": PU_PREFIX + "obsahuje-více-autorských-děl",
    "neobsahujeAutorskaDila": PU_PREFIX + "neobsahuje-autorská-díla",
    "neniAutorskopravneChranenouDatabazi": PU_PREFIX + "není-autorskoprávně-chráněnou-databází",
    "neniChranenazvlastnimPravemPorizovateleDatabaze": PU_PREFIX + "není-chráněna-zvláštním-právem-pořizovatele-databáze",
    "obsahujeOsobniUdaje": PU_PREFIX + "obsahuje-osobní-údaje",
    "neobsahujeOsobniUdaje": PU_PREFIX + "neobsahuje-osobní-údaje"
};

export const CREATIVE_COMMONS = {
    "BY_40": "https://creativecommons.org/licenses/by/4.0/",
    "PUBLIC_ZERO_10": "https://creativecommons.org/publicdomain/zero/1.0/"
};

export const NKOD = {
    "Formular": "https://data.gov.cz/slovník/nkod/typ-datové-sady-dle-zdroje/Formulář"
};
