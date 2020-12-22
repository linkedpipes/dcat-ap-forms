/* eslint max-len: 0 */

import * as http from "../app-service/http";
import {createDataset, SPATIAL_COUNTRY, SPATIAL_RUIAN} from "./dataset-model";
import {importDatasetFromUrl} from "./import-dataset-from-url";
import {createDistribution} from "./distribution-model";

let REMOTE_SOURCE = {};

(function mockHttpService() {
  // eslint-disable-next-line no-import-assign
  http.getRemoteJson = (url) => {
    for (let key of Object.keys(REMOTE_SOURCE)) {
      if (!Object.prototype.hasOwnProperty.call(REMOTE_SOURCE, key)) {
        continue;
      }
      if (url === key) {
        return Promise.resolve({"json": REMOTE_SOURCE[key]});
      }
    }
    return Promise.reject({"error": "Request for: " + url});
  };
})();

//
//
//

const A86 = {
  "https://katalog-mdcr/a86": {
    "@graph": [
      {
        "@id": "https://katalog-mdcr/a86",
        "@type": [
          "http://www.w3.org/ns/dcat#Dataset",
          "https://data.gov.cz/slovník/nkod/typ-datové-sady-dle-zdroje/DcatLkod",
        ],
        "http://purl.org/dc/terms/title": {
          "@value": "Seznam dopravců veřejné osobní dopravy obsažených v CIS JŘ",
          "@language": "cs",
        },
        "http://purl.org/dc/terms/description": {
          "@value": "Obsahem datové sady je ....",
          "@language": "cs",
        },
        "http://purl.org/dc/terms/identifier": {
          "@value": "https://data.gov.cz/lkod/mdcr/datové-sady/seznam-dopravci",
          "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
        },
        "http://xmlns.com/foaf/0.1/page": {
          "@id": "https://www.mdcr.cz/Dokumenty/Verejna-doprava/Jizdni-rady,-kalendare-pro-jizdni-rady,-metodi-(1)/Jizdni-rady-verejne-dopravy",
        },
        "http://purl.org/dc/terms/publisher": {
          "@id": "https://data.gov.cz/zdroj/ovm/MDopravy",
        },
        "http://purl.org/dc/terms/spatial": [
          {"@id": "http://publications.europa.eu/resource/authority/country/CZE"},
          {"@id": "https://linked.cuzk.cz/resource/ruian/stat/1"},
        ],
        "http://www.w3.org/ns/dcat#contactPoint": {
          "@id": "https://katalog-mdcr/a86/kontaktní-bod",
        },
        "http://www.w3.org/ns/dcat#distribution": {
          "@id": "https://katalog-mdcr/a86/distribuce/25",
        },
        "http://purl.org/dc/terms/accrualPeriodicity": {
          "@id": "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3",
        },
        "http://www.w3.org/ns/dcat#keyword": [
          {"@value": "dopravce", "@language": "cs"},
          {"@value": "jízdní řády", "@language": "cs"},
          {"@value": "drážní doprava", "@language": "cs"},
          {"@value": "veřejná linková doprava", "@language": "cs"},
          {"@value": "městská doprava", "@language": "cs"},
          {"@value": "CIS JŘ", "@language": "cs"},
        ],
        "http://www.w3.org/ns/dcat#theme": [
          {"@id": "http://publications.europa.eu/resource/authority/data-theme/TRAN"},
          {"@id": "http://eurovoc.europa.eu/4512"},
        ],
      },
    ],
  },
  "https://katalog-mdcr/a86/kontaktní-bod": {
    "@graph": [
      {
        "@id": "https://katalog-mdcr/a86/kontaktní-bod",
        "@type": "http://www.w3.org/2006/vcard/ns#Organization",
        "http://www.w3.org/2006/vcard/ns#fn": {
          "@value": "Ministerstvo dopravy, Odbor veřejné dopravy",
          "@language": "cs",
        },
        "http://www.w3.org/2006/vcard/ns#hasEmail": "sekretariat.190@mdcr.cz",
      },
    ],
  },
  "https://katalog-mdcr/a86/distribuce/25": {
    "@graph": [
      {
        "@id": "https://katalog-mdcr/a86/distribuce/25",
        "@type": "http://www.w3.org/ns/dcat#Distribution",
        "http://purl.org/dc/terms/format": {"@id": "http://publications.europa.eu/resource/authority/file-type/CSV"},
        "https://data.gov.cz/slovník/nkod/typ-úložiště-datové-sady/typÚložiště": {"@id": "https://data.gov.cz/slovník/nkod/typ-úložiště-datové-sady/Web"},
        "https://data.gov.cz/slovník/podmínky-užití/specifikace": {"@id": "https://katalog-mdcr/a86/podmínky-užití"},
        "http://www.w3.org/ns/dcat#downloadURL": {"@id": "ftp://ftp.cisjr.cz/seznamy/dopravci.csv"},
        "http://www.w3.org/ns/dcat#mediaType": {"@id": "http://www.iana.org/assignments/media-types/text/csv"},
        "http://www.w3.org/ns/dcat#accessURL": {"@id": "ftp://ftp.cisjr.cz/seznamy/dopravci.csv"},
      },
    ],
  },
  "https://katalog-mdcr/a86/podmínky-užití": {
    "@graph": [
      {
        "@id": "https://katalog-mdcr/a86/podmínky-užití",
        "@type": "https://data.gov.cz/slovník/podmínky-užití/Specifikace",
        "https://data.gov.cz/slovník/podmínky-užití/autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/"},
        "https://data.gov.cz/slovník/podmínky-užití/databáze-chráněná-zvláštními-právy": {"@id": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/"},
        "https://data.gov.cz/slovník/podmínky-užití/databáze-jako-autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/"},
        "https://data.gov.cz/slovník/podmínky-užití/osobní-údaje": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/"},
      },
    ],
  },
};

const A86_EXPECTED_DATASET = {
  ...createDataset(),
  "iri": "https://katalog-mdcr/a86",
  "title_cs": "Seznam dopravců veřejné osobní dopravy obsažených v CIS JŘ",
  "title_en": "",
  "description_cs": "Obsahem datové sady je ....",
  "description_en": "",
  "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3",
  "spatial": [{
    "url": "http://publications.europa.eu/resource/authority/country/CZE",
    "type": SPATIAL_COUNTRY,
  }, {
    "url": "https://linked.cuzk.cz/resource/ruian/stat/1",
    "type": SPATIAL_RUIAN,
  }],
  "documentation": "https://www.mdcr.cz/Dokumenty/Verejna-doprava/Jizdni-rady,-kalendare-pro-jizdni-rady,-metodi-(1)/Jizdni-rady-verejne-dopravy",
  "keywords_cs": [
    "dopravce",
    "jízdní řády",
    "drážní doprava",
    "veřejná linková doprava",
    "městská doprava",
    "CIS JŘ",
  ],
  "publisher": "https://data.gov.cz/zdroj/ovm/MDopravy",
  "keywords_en": [],
  "temporal_start": "",
  "temporal_end": "",
  "contact_point_name": "Ministerstvo dopravy, Odbor veřejné dopravy",
  "contact_point_email": "sekretariat.190@mdcr.cz",
  "dataset_themes": [
    "http://publications.europa.eu/resource/authority/data-theme/TRAN",
  ],
  "themes": ["http://eurovoc.europa.eu/4512"],
};

const A86_EXPECTED_DISTRIBUTION = {
  ...createDistribution(),
  "iri": "https://katalog-mdcr/a86/distribuce/25",
  "license_author_type": "NO",
  "license_author_name": "",
  "license_author_custom": "",
  "license_db_type": "NO",
  "license_db_name": "",
  "license_db_custom": "",
  "license_specialdb_type": "NO",
  "license_specialdb_custom": "",
  "license_personal_type": "NO",
  "url": "ftp://ftp.cisjr.cz/seznamy/dopravci.csv",
  "format": "http://publications.europa.eu/resource/authority/file-type/CSV",
  "media_type": "http://www.iana.org/assignments/media-types/text/csv",
};

test("Load A86 by single request.", () => {
  // We get all data in a single request.
  REMOTE_SOURCE = {
    "https://katalog-mdcr/a86/all": {
      "@graph": [
        A86["https://katalog-mdcr/a86"]["@graph"][0],
        ...A86["https://katalog-mdcr/a86/kontaktní-bod"]["@graph"],
        ...A86["https://katalog-mdcr/a86/distribuce/25"]["@graph"],
        ...A86["https://katalog-mdcr/a86/podmínky-užití"]["@graph"],
      ],
    },
  };
  const promise = importDatasetFromUrl("https://katalog-mdcr/a86/all");
  return promise.then((actual) => {
    const distributions = actual.distributions;
    expect(actual.dataset).toEqual(A86_EXPECTED_DATASET);
    expect(distributions.length).toEqual(1);
    expect(distributions[0]).toEqual(A86_EXPECTED_DISTRIBUTION);
  });
});
