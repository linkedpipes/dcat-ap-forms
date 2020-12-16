/* eslint max-len: 0 */

import {importFromJsonLd} from "./import-dataset";
import {
  exportDatasetToJsonLdForLocal,
  exportDatasetToJsonLdForNational,
} from "./export-dataset";

const BYLANY = {
  "@graph": [
    {
      "@id": "https://data.gov.cz/zdroj/katalog/NKOD",
      "http://www.w3.org/ns/dcat#record": {"@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/záznam"},
      "http://www.w3.org/ns/dcat#dataset": {"@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670"},
    },
    {
      "@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2",
      "@type": "http://www.w3.org/ns/dcat#Distribution",
      "https://data.gov.cz/slovník/nkod/mediaType": "application/pdf",
      "https://data.gov.cz/slovník/nkod/typ-úložiště-datové-sady/typ\u00DAložiště": {"@id": "https://data.gov.cz/slovník/nkod/typ-úložiště-datové-sady/Web"},
      "https://data.gov.cz/slovník/podmínky-užití/specifikace": {"@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2/podmínky-užití"},
      "http://www.w3.org/ns/dcat#downloadURL": {"@id": "https://data.gov.cz/soubor/nkod/Obec%20Bylany,%20Jan%20Krupka%20SoD%201001%2017%20%20Oprava%20kuchyně%20v%20M\u0160%20III%20etapa.pdf"},
      "http://www.w3.org/ns/dcat#accessURL": {"@id": "https://data.gov.cz/soubor/nkod/Obec%20Bylany,%20Jan%20Krupka%20SoD%201001%2017%20%20Oprava%20kuchyně%20v%20M\u0160%20III%20etapa.pdf"},
    },
    {
      "@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/kontaktní-bod",
      "@type": ["http://www.w3.org/2006/vcard/ns#Kind",
        "http://www.w3.org/2006/vcard/ns#Individual"],
      "http://www.w3.org/2006/vcard/ns#fn": "Jan Málek,starosta",
      "http://www.w3.org/2006/vcard/ns#hasEmail": "ou.bylany@worldonline.cz",
    },
    {
      "@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/záznam",
      "@type": "http://www.w3.org/ns/dcat#CatalogRecord",
      "http://purl.org/dc/terms/modified": {
        "@value": "2017-08-22T00:00:00",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
      },
      "http://purl.org/dc/terms/language": {"@id": "http://publications.europa.eu/resource/authority/language/CES"},
      "http://purl.org/dc/terms/conformsTo": {"@id": "https://joinup.ec.europa.eu/release/dcat-ap/12"},
      "http://purl.org/dc/terms/issued": {
        "@value": "2017-08-22T00:00:00",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
      },
      "http://xmlns.com/foaf/0.1/primaryTopic": {"@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670"},
    },
    {
      "@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/\u010Dasové-pokrytí",
      "@type": "http://purl.org/dc/terms/PeriodOfTime",
      "http://www.w3.org/ns/dcat#endDate": {
        "@value": "2017-08-31",
        "@type": "http://www.w3.org/2001/XMLSchema#date",
      },
      "http://www.w3.org/ns/dcat#startDate": {
        "@value": "2017-06-01",
        "@type": "http://www.w3.org/2001/XMLSchema#date",
      },
    },
    {
      "@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2/podmínky-užití",
      "@type": "https://data.gov.cz/slovník/podmínky-užití/Specifikace",
      "https://data.gov.cz/slovník/podmínky-užití/autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/"},
      "https://data.gov.cz/slovník/podmínky-užití/databáze-chráněná-zvláštními-právy": {"@id": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/"},
      "https://data.gov.cz/slovník/podmínky-užití/databáze-jako-autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/"},
      "https://data.gov.cz/slovník/podmínky-užití/osobní-údaje": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/"},
    },
    {
      "@id": "https://data.gov.cz/zdroj/ovm/00269905",
      "@type": "http://xmlns.com/foaf/0.1/Agent",
      "http://xmlns.com/foaf/0.1/name": "Obec Bylany",
    },
    {
      "@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670",
      "@type": ["http://www.w3.org/ns/dcat#Dataset",
        "https://data.gov.cz/slovník/nkod/typ-datové-sady-dle-zdroje/Formulář"],
      "http://purl.org/dc/terms/modified": {
        "@value": "2017-08-22T00:00:00",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
      },
      "http://purl.org/dc/terms/title": "Obec Bylany",
      "http://purl.org/dc/terms/description": "Oprava kuchyně v M\u0160-III.etapa",
      "http://purl.org/dc/terms/identifier": ["https://data.gov.cz/zdroj/datové-sady/qmsa4he/243671670",
        "243671670"],
      "http://purl.org/dc/terms/publisher": {"@id": "https://data.gov.cz/zdroj/ovm/00269905"},
      "http://purl.org/dc/terms/spatial": {"@id": "https://linked.cuzk.cz/resource/ruian/stat/1"},
      "http://purl.org/dc/terms/issued": {
        "@value": "2017-08-22T00:00:00",
        "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
      },
      "http://www.w3.org/ns/dcat#contactPoint": {"@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/kontaktní-bod"},
      "http://www.w3.org/ns/dcat#distribution": {"@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2"},
      "http://purl.org/dc/terms/accrualPeriodicity": {"@id": "http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT"},
      "http://purl.org/dc/terms/temporal": {"@id": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/\u010Dasové-pokrytí"},
      "http://www.w3.org/ns/dcat#keyword": "obec Bylany",
    },
  ],
};

const BYLANY_EXPECTED = {
  "@context": "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670",
  "typ": "Datová sada",
  "název": {
    "cs": "Obec Bylany",
  },
  "popis": {
    "cs": "Oprava kuchyně v MŠ-III.etapa",
  },
  "prvek_rúian": [
    "https://linked.cuzk.cz/resource/ruian/stat/1",
  ],
  "geografické_území": [],
  "prostorové_pokrytí": [],
  "časové_pokrytí": {
    "typ": "Časový interval",
    "začátek": "2017-06-01",
    "konec": "2017-08-31",
  },
  "klíčové_slovo": {
    "cs": [
      "obec Bylany",
    ],
    "en": [],
  },
  "periodicita_aktualizace": "http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT",
  "kontaktní_bod": {
    "typ": "Organizace",
    "jméno": {
      "cs": "Jan Málek,starosta",
    },
    "e-mail": "mailto:ou.bylany@worldonline.cz",
  },
  "koncept_euroVoc": [],
  "téma": [],
  "distribuce": [
    {
      "iri": "https://data.gov.cz/zdroj/datové-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2",
      "typ": "Distribuce",
      "soubor_ke_stažení": "https://data.gov.cz/soubor/nkod/Obec%20Bylany,%20Jan%20Krupka%20SoD%201001%2017%20%20Oprava%20kuchyně%20v%20MŠ%20III%20etapa.pdf",
      "přístupové_url": "https://data.gov.cz/soubor/nkod/Obec%20Bylany,%20Jan%20Krupka%20SoD%201001%2017%20%20Oprava%20kuchyně%20v%20MŠ%20III%20etapa.pdf",
      "podmínky_užití": {
        "typ": "Specifikace podmínek užití",
        "autorské_dílo": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/",
        "databáze_jako_autorské_dílo": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/",
        "databáze_chráněná_zvláštními_právy": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/",
        "osobní_údaje": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/",
      },
    },
  ],
};

test("Bylany from json-ld and back.", () => {
  return importFromJsonLd(BYLANY, "cs").then(data => {
    const actual = exportDatasetToJsonLdForNational(data.dataset, data.distributions);
    expect(actual).toEqual(BYLANY_EXPECTED);
  });
});

const ISS94 = {
  "@id": "_:ds",
  "@type": [
    "http://www.w3.org/ns/dcat#Dataset",
    "https://data.gov.cz/slovník/nkod/typ-datové-sady-dle-zdroje/Formulář",
  ],
  "http://purl.org/dc/terms/title": [
    {
      "@language": "cs",
      "@value": "aaabbb",
    },
  ],
  "http://purl.org/dc/terms/description": [
    {
      "@language": "cs",
      "@value": "bbb",
    },
  ],
  "http://www.w3.org/ns/dcat#keyword": [
    [
      {
        "@language": "cs",
        "@value": "cccs",
      },
      {
        "@language": "en",
        "@value": "en",
      },
    ],
  ],
  "http://www.w3.org/ns/dcat#distribution": [
    {
      "@type": "http://www.w3.org/ns/dcat#Distribution",
      "http://purl.org/dc/terms/title": [
        {
          "@language": "cs",
          "@value": "Moje webservica",
        },
        {
          "@language": "en",
          "@value": "my webservice",
        },
      ],
      "http://www.w3.org/ns/dcat#accessURL": {
        "@id": "https://url.cz",
      },
      "http://www.w3.org/ns/dcat#accessService": {
        "@type": "http://www.w3.org/ns/dcat#DataService",
        "http://www.w3.org/ns/dcat#endpointURL": {
          "@id": "https://url.cz",
        },
        "http://www.w3.org/ns/dcat#endpointDescription": {
          "@id": "https://popis.url",
        },
        "http://purl.org/dc/terms/title": [
          {
            "@language": "cs",
            "@value": "Moje webservica",
          },
          {
            "@language": "en",
            "@value": "my webservice",
          },
        ],
        "http://www.w3.org/ns/dcat#servesDataset": {
          "@id": "_:ds",
        },
      },
      "https://data.gov.cz/slovník/podmínky-užití/specifikace": {
        "@type": "https://data.gov.cz/slovník/podmínky-užití/Specifikace",
        "https://data.gov.cz/slovník/podmínky-užití/autorské-dílo": {
          "@id": "https://creativecommons.org/licenses/by/4.0/",
        },
        "https://data.gov.cz/slovník/podmínky-užití/autor": {
          "@language": "cs",
          "@value": "Zelenka",
        },
        "https://data.gov.cz/slovník/podmínky-užití/databáze-jako-autorské-dílo": {
          "@id": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/",
        },
        "https://data.gov.cz/slovník/podmínky-užití/databáze-chráněná-zvláštními-právy": {
          "@id": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/",
        },
        "https://data.gov.cz/slovník/podmínky-užití/osobní-údaje": {
          "@id": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/",
        },
      },
    },
  ],
  "http://purl.org/dc/terms/accrualPeriodicity": {
    "@id": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
  },
  "http://purl.org/dc/terms/spatial": [
    {
      "@id": "https://linked.cuzk.cz/resource/ruian/stat/1",
    },
    {
      "@id": "https://linked.cuzk.cz/resource/ruian/stat/1",
    },
    {
      "@id": "https://linked.cuzk.cz/resource/ruian/stat/1",
    },
  ],
  "http://www.w3.org/ns/dcat#theme": [
    {
      "@id": "http://publications.europa.eu/resource/authority/data-theme/ENER",
    },
  ],
  "http://purl.org/dc/terms/conformsTo": [],
  "http://www.w3.org/ns/dcat#contactPoint": {
    "@id": "_:kontaktní-bod",
    "@type": ["http://www.w3.org/2006/vcard/ns#Kind",
      "http://www.w3.org/2006/vcard/ns#Individual"],
    "http://www.w3.org/2006/vcard/ns#fn": "Pavel",
    "http://www.w3.org/2006/vcard/ns#hasEmail": "mailto:pavel@email.cz",
  },
  "http://purl.org/dc/terms/publisher": [{"@id": "https://data.gov.cz/zdroj/ovm/66003008"}],
};

const ISS94_EXPECTED = {
  "@context": "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "https://local-publisher",
  "typ": "Datová sada",
  "název": {
    "cs": "aaabbb",
  },
  "popis": {
    "cs": "bbb",
  },
  "klíčové_slovo": {
    "cs": [
      "cccs",
    ],
    "en": [
      "en",
    ],
  },
  "periodicita_aktualizace": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
  "prvek_rúian": [
    "https://linked.cuzk.cz/resource/ruian/stat/1",
  ],
  "geografické_území": [],
  "prostorové_pokrytí": [],
  "téma": [
    "http://publications.europa.eu/resource/authority/data-theme/ENER",
  ],
  "koncept_euroVoc": [],
  "poskytovatel": "https://data.gov.cz/zdroj/ovm/66003008",
  "kontaktní_bod": {
    "typ": "Organizace",
    "jméno": {
      "cs": "Pavel",
    },
    "e-mail": "mailto:pavel@email.cz",
  },
  "distribuce": [
    {
      "iri": "https://local-publisher/distribuce/1",
      "typ": "Distribuce",
      "název": {
        "cs": "Moje webservica",
        "en": "my webservice",
      },
      "přístupové_url": "https://url.cz",
      "přístupová_služba": {
        "iri": "https://local-publisher/distribuce/1/přístupová-služba",
        "typ": "Datová služba",
        "přístupový_bod": "https://url.cz",
        "popis_přístupového_bodu": "https://popis.url",
        "název": {
          "cs": "Moje webservica",
          "en": "my webservice",
        },
        "poskytuje_datovou_sadu": "https://local-publisher",
      },
      "podmínky_užití": {
        "typ": "Specifikace podmínek užití",
        "autorské_dílo": "https://creativecommons.org/licenses/by/4.0/",
        "autor": {
          "cs": "Zelenka",
        },
        "databáze_jako_autorské_dílo": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/",
        "databáze_chráněná_zvláštními_právy": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/",
        "osobní_údaje": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/",
      },
    },
  ],
};

test("ISS94 from json-ld and back.", () => {
  return importFromJsonLd(ISS94, "cs").then(data => {
    // We set it here to simulate set by application.
    data.dataset.iri = "https://local-publisher";
    const actual = exportDatasetToJsonLdForLocal(data.dataset, data.distributions);
    expect(actual).toEqual(ISS94_EXPECTED);
  });
});

const ISS95 = {
  "@type": [
    "http://www.w3.org/ns/dcat#Dataset",
    "https://data.gov.cz/slovník/nkod/typ-datové-sady-dle-zdroje/Formulář",
  ],
  "http://purl.org/dc/terms/title": {
    "@language": "cs",
    "@value": "Aktuality",
  },
  "http://purl.org/dc/terms/description": {
    "@language": "cs",
    "@value": "V této sekci jsou definovány jednotlivé třídy a jejich vlastnosti potřebné pro popis aktualit. Pro každou vlastnost je uveden její identifikátor, který je pro její reprezentaci použit ve všech datových formátech, její název, datový typ, popis a příklad.",
  },
  "http://www.w3.org/ns/dcat#keyword": [
    {
      "@language": "cs",
      "@value": "Aktuality",
    },
    {
      "@language": "cs",
      "@value": "Novinky",
    },
    {
      "@language": "cs",
      "@value": "Informace",
    },
  ],
  "http://www.w3.org/ns/dcat#distribution": [
    {
      "@type": [
        "http://www.w3.org/ns/dcat#Distribution",
      ],
      "http://www.w3.org/ns/dcat#downloadURL": {
        "@id": "http://nesmysl.cz",
      },
      "http://www.w3.org/ns/dcat#mediaType": {
        "@id": "http://www.iana.org/assignments/media-types/application/json",
      },
      "http://purl.org/dc/terms/format": {
        "@id": "http://publications.europa.eu/resource/authority/file-type/JSON",
      },
      "http://www.w3.org/ns/dcat#packageFormat": {
        "@id": "http://www.iana.org/assignments/media-types/application/json-lines",
      },
      "http://www.w3.org/ns/dcat#compressFormat": {
        "@id": "http://www.iana.org/assignments/media-types/application/json",
      },
      "https://data.gov.cz/slovník/podmínky-užití/specifikace": {
        "@type": "https://data.gov.cz/slovník/podmínky-užití/Specifikace",
        "https://data.gov.cz/slovník/podmínky-užití/autorské-dílo": {
          "@id": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/",
        },
        "https://data.gov.cz/slovník/podmínky-užití/databáze-jako-autorské-dílo": {
          "@id": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/",
        },
        "https://data.gov.cz/slovník/podmínky-užití/databáze-chráněná-zvláštními-právy": {
          "@id": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/",
        },
        "https://data.gov.cz/slovník/podmínky-užití/osobní-údaje": {
          "@id": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/",
        },
      },
    },
  ],
  "http://purl.org/dc/terms/accrualPeriodicity": {
    "@id": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
  },
  "http://purl.org/dc/terms/spatial": {
    "@id": "https://linked.cuzk.cz/resource/ruian/stat/1",
  },
  "http://www.w3.org/ns/dcat#theme": [
    {
      "@id": "http://publications.europa.eu/resource/authority/data-theme/SOCI",
    },
  ],
};

const ISS95_EXPECTED = {
  "@context": "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "_:b0",
  "typ": "Datová sada",
  "název": {
    "cs": "Aktuality",
  },
  "popis": {
    "cs": "V této sekci jsou definovány jednotlivé třídy a jejich vlastnosti potřebné pro popis aktualit. Pro každou vlastnost je uveden její identifikátor, který je pro její reprezentaci použit ve všech datových formátech, její název, datový typ, popis a příklad.",
  },
  "klíčové_slovo": {
    "cs": [
      "Aktuality",
      "Novinky",
      "Informace",
    ],
    "en" :[

    ],
  },
  "periodicita_aktualizace": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
  "prvek_rúian": [
    "https://linked.cuzk.cz/resource/ruian/stat/1",
  ],
  "geografické_území": [],
  "prostorové_pokrytí": [],
  "téma": [
    "http://publications.europa.eu/resource/authority/data-theme/SOCI",
  ],
  "koncept_euroVoc": [],
  "kontaktní_bod": {},
  "distribuce": [
    {
      "typ": "Distribuce",
      "soubor_ke_stažení": "http://nesmysl.cz",
      "přístupové_url": "http://nesmysl.cz",
      "typ_média": "http://www.iana.org/assignments/media-types/application/json",
      "formát": "http://publications.europa.eu/resource/authority/file-type/JSON",
      "typ_média_balíčku": "http://www.iana.org/assignments/media-types/application/json-lines",
      "typ_média_komprese": "http://www.iana.org/assignments/media-types/application/json",
      "podmínky_užití": {
        "typ": "Specifikace podmínek užití",
        "autorské_dílo": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/",
        "databáze_jako_autorské_dílo": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/",
        "databáze_chráněná_zvláštními_právy": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/",
        "osobní_údaje": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/",
      },
    },
  ],
};

test("ISS95 from json-ld and back.", () => {
  return importFromJsonLd(ISS95, "cs").then(data => {
    const actual = exportDatasetToJsonLdForNational(data.dataset, data.distributions);
    expect(actual).toEqual(ISS95_EXPECTED);
  });
});

const ISS97a = {
  "@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/154129471",
  "@type": ["https://data.gov.cz/slovník/nkod/typ-datové-sady-dle-zdroje/Formulář", "http://www.w3.org/ns/dcat#Dataset"],
  "http://purl.org/dc/terms/modified": [{
    "@value": "2017-01-24T00:00:00",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  }],
  "http://purl.org/dc/terms/title": [{
    "@value": "Faktury CENDIS 2016",
    "@language": "cs",
  }],
  "http://purl.org/dc/terms/description": [{
    "@value": "Uhrazené faktury CENDIS (resort dopravy) v roce 2016",
    "@language": "cs",
  }],
  "http://purl.org/dc/terms/identifier": [{
    "@value": "https://data.gov.cz/zdroj/datové-sady/n75aau3/154129471",
    "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
  }, "154129471"],
  "http://purl.org/dc/terms/publisher": [{"@id": "https://data.gov.cz/zdroj/ovm/66003008"}],
  "http://purl.org/dc/terms/issued": [{
    "@value": "2017-01-24T00:00:00",
    "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
  }],
  "http://www.w3.org/ns/dcat#theme": [
    {
      "@id": "http://eurovoc.europa.eu/2175"
    }, {
      "@id": "http://eurovoc.europa.eu/4304"
    }
  ],
  "http://purl.org/dc/terms/spatial": [{"@id": "https://linked.cuzk.cz/resource/ruian/stat/1"}],
  "http://purl.org/dc/terms/accrualPeriodicity": [{"@id": "http://publications.europa.eu/resource/authority/frequency/MONTHLY"}],
  "http://www.w3.org/ns/dcat#distribution": [{"@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/154129471/distribuce/6d24ab88c1e4a0432a2a6e1cd383c0c7"}],
  "http://www.w3.org/ns/dcat#keyword": "faktura",
};

const ISS97a_EXPECTED = {
  "@context": "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/kontexty/rozhraní-katalogů-otevřených-dat.jsonld",
  "iri": "https://data.gov.cz/zdroj/datové-sady/MDopravy/154129471",
  "typ": "Datová sada",
  "název": {
    "cs": "Faktury CENDIS 2016",
  },
  "popis": {
    "cs": "Uhrazené faktury CENDIS (resort dopravy) v roce 2016",
  },
  "klíčové_slovo": {
    "cs": [
      "faktura",
    ],
    "en": [],
  },
  "periodicita_aktualizace": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
  "prvek_rúian": [
    "https://linked.cuzk.cz/resource/ruian/stat/1",
  ],
  "geografické_území": [],
  "prostorové_pokrytí": [],
  "téma": [],
  "koncept_euroVoc": [
    "http://eurovoc.europa.eu/2175",
    "http://eurovoc.europa.eu/4304"
  ],
  "kontaktní_bod": {},
  "distribuce": [],
};

test("ISS97a from json-ld and back.", () => {
  return importFromJsonLd(ISS97a, "cs").then(data => {
    const actual = exportDatasetToJsonLdForNational(data.dataset, data.distributions);
    expect(actual).toEqual(ISS97a_EXPECTED);
  });
});
