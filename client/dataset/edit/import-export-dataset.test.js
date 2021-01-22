/* eslint max-len: 0 */

import {importFromJsonLd} from "../import-dataset";
import {
  exportDatasetForStirData,
} from "./export-dataset-edit-stirdata";

const ISS94 = {
  "@id": "http://dataset",
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
        "http://purl.org/dc/terms/conformsTo": {
          "@id": "https://ofn.gov.cz/kontakty/2020-07-01/",
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

const ISS94_EXPECTED_STIR = {
  "@id": "http://dataset",
  "@type": "http://www.w3.org/ns/dcat#Dataset",
  "http://purl.org/dc/terms/title": [{
    "@value": "aaabbb",
    "@language": "cs",
  }],
  "http://purl.org/dc/terms/description": [{
    "@value": "bbb",
    "@language": "cs",
  }],
  "http://www.w3.org/ns/dcat#keyword": [
    {
      "@value": "en",
      "@language": "en",
    },
    {
      "@value": "cccs",
      "@language": "cs",
    },
  ],
  "http://purl.org/dc/terms/accrualPeriodicity": {
    "@id": "http://publications.europa.eu/resource/authority/frequency/MONTHLY",
  },
  "http://purl.org/dc/terms/spatial": [
    {"@id": "https://linked.cuzk.cz/resource/ruian/stat/1"},
  ],
  "http://www.w3.org/ns/dcat#theme": [
    {
      "@id": "http://publications.europa.eu/resource/authority/data-theme/ENER",
    },
  ],
  "http://purl.org/dc/terms/publisher": {
    "@id": "https://data.gov.cz/zdroj/ovm/66003008",
  },
  "http://www.w3.org/ns/dcat#contactPoint": {
    "@type": "http://www.w3.org/2006/vcard/ns#Organization",
    "http://www.w3.org/2006/vcard/ns#fn": [{
      // We store contact point in the main language.
      "@language": "en",
      "@value": "Pavel",
    }],
    "http://www.w3.org/2006/vcard/ns#hasEmail": {
      "@id": "mailto:pavel@email.cz",
    },
  },
  "http://www.w3.org/ns/dcat#distribution": [
    {
      "@id": "http://dataset/distribution/0",
      "@type": "http://www.w3.org/ns/dcat#Distribution",
      "http://purl.org/dc/terms/title": [
        {
          "@language": "en",
          "@value": "my webservice",
        }, {
          "@language": "cs",
          "@value": "Moje webservica",
        },
      ],
      "http://www.w3.org/ns/dcat#accessURL": {
        "@id": "https://url.cz",
      },
      "http://www.w3.org/ns/dcat#accessService": {
        "@id": "http://dataset/distribution/0/data-service",
        "@type": "http://www.w3.org/ns/dcat#DataService",
        "http://www.w3.org/ns/dcat#endpointURL": {
          "@id": "https://url.cz",
        },
        "http://purl.org/dc/terms/conformsTo": {
          "@id": "https://ofn.gov.cz/kontakty/2020-07-01/",
        },
        "http://www.w3.org/ns/dcat#endpointDescription": {
          "@id": "https://popis.url",
        },
        "http://purl.org/dc/terms/title": [
          {
            "@language": "en",
            "@value": "my webservice",
          }, {
            "@language": "cs",
            "@value": "Moje webservica",
          },
        ],
        "http://www.w3.org/ns/dcat#servesDataset": {
          "@id": "http://dataset",
        },
      },
    },
  ],
};

test("ISS94 from json-ld and back for STIRData.", () => {
  // We need to be able to detect that the language is 'cs'.
  return importFromJsonLd(ISS94, "es").then(data => {
    const actual = exportDatasetForStirData(data.dataset, data.distributions);
    expect(actual).toEqual(ISS94_EXPECTED_STIR);
  });
});
