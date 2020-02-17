import * as http from "@/app-service/http";
import {importDataset} from "./import-from-url";
import {exportToJsonLd} from "./edit/export-dataset-edit";
import {getRemoteJson} from "@/app-service/http";
import {createDistribution} from "./edit/distribution-model";
import {createDataset} from "./edit/dataset-model";

/*const DEREFERENCE_REMOTE_SOURCE = {
  "https://katalog-mdcr/a86": {
    "@graph": [
      {
        "@id": "https://katalog-mdcr/a86",
        "@type": [
          "http://www.w3.org/ns/dcat#Dataset",
          "https://data.gov.cz/slovník/nkod/typ-datové-sady-dle-zdroje/DcatLkod"
        ],
        "http://purl.org/dc/terms/title": {
          "@value": "Seznam dopravců veřejné osobní dopravy obsažených v CIS JŘ",
          "@language": "cs"
        },
        "http://purl.org/dc/terms/description": {
          "@value": "Obsahem datové sady je ....",
          "@language": "cs"
        },
        "http://purl.org/dc/terms/identifier": {
          "@value": "https://data.gov.cz/lkod/mdcr/datové-sady/seznam-dopravci",
          "@type": "http://www.w3.org/2001/XMLSchema#anyURI"
        },
        "http://xmlns.com/foaf/0.1/page": {
          "@id": "https://www.mdcr.cz/Dokumenty/Verejna-doprava/Jizdni-rady,-kalendare-pro-jizdni-rady,-metodi-(1)/Jizdni-rady-verejne-dopravy"
        },
        "http://purl.org/dc/terms/publisher": {
          "@id": "https://data.gov.cz/zdroj/ovm/MDopravy"
        },
        "http://purl.org/dc/terms/spatial": [
          {"@id": "http://publications.europa.eu/resource/authority/country/CZE"},
          {"@id": "https://linked.cuzk.cz/resource/ruian/stat/1"}
        ],
        "http://www.w3.org/ns/dcat#contactPoint": {
          "@id": "https://katalog-mdcr/a86/kontaktní-bod"
        },
        "http://www.w3.org/ns/dcat#distribution": {
          "@id": "https://katalog-mdcr/a86/distribuce/25"
        },
        "http://purl.org/dc/terms/accrualPeriodicity": {
          "@id": "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3"
        },
        "http://www.w3.org/ns/dcat#keyword": [
          {"@value": "dopravce", "@language": "cs"},
          {"@value": "jízdní řády", "@language": "cs"},
          {"@value": "drážní doprava", "@language": "cs"},
          {"@value": "veřejná linková doprava", "@language": "cs"},
          {"@value": "městská doprava", "@language": "cs"},
          {"@value": "CIS JŘ", "@language": "cs"}
        ],
        "http://www.w3.org/ns/dcat#theme": [
          {"@id": "http://publications.europa.eu/resource/authority/data-theme/TRAN"},
          {"@id": "http://eurovoc.europa.eu/4512"}
        ]
      }
    ]
  },
  "https://katalog-mdcr/a86/kontaktní-bod": {
    "@graph": [
      {
        "@id": "https://katalog-mdcr/a86/kontaktní-bod",
        "@type": "http://www.w3.org/2006/vcard/ns#Organization",
        "http://www.w3.org/2006/vcard/ns#fn": {
          "@value": "Ministerstvo dopravy, Odbor veřejné dopravy",
          "@language": "cs"
        },
        "http://www.w3.org/2006/vcard/ns#hasEmail": "sekretariat.190@mdcr.cz"
      }
    ]
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
        "http://www.w3.org/ns/dcat#accessURL": {"@id": "ftp://ftp.cisjr.cz/seznamy/dopravci.csv"}
      }
    ]
  },
  "https://katalog-mdcr/a86/podmínky-užití": {
    "@graph": [
      {
        "@id": "https://katalog-mdcr/a86/podmínky-užití",
        "@type": "https://data.gov.cz/slovník/podmínky-užití/Specifikace",
        "https://data.gov.cz/slovník/podmínky-užití/autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/"},
        "https://data.gov.cz/slovník/podmínky-užití/databáze-chráněná-zvláštními-právy": {"@id": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/"},
        "https://data.gov.cz/slovník/podmínky-užití/databáze-jako-autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/"},
        "https://data.gov.cz/slovník/podmínky-užití/osobní-údaje": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/"}
      }
    ]
  }
};

// Construct data for a single fetch request.

const ALL_IN_ONE_REMOTE_SOURCE = {
  "https://katalog-mdcr/a86/all": {
    "@graph": [
      DEREFERENCE_REMOTE_SOURCE["https://katalog-mdcr/a86"]["@graph"][0],
      ...DEREFERENCE_REMOTE_SOURCE["https://katalog-mdcr/a86/kontaktní-bod"]["@graph"],
      ...DEREFERENCE_REMOTE_SOURCE["https://katalog-mdcr/a86/distribuce/25"]["@graph"],
      ...DEREFERENCE_REMOTE_SOURCE["https://katalog-mdcr/a86/podmínky-užití"]["@graph"]
    ]
  }
};
*/
let REMOTE_SOURCE;

http.getRemoteJson = (url) => {
  for (let key in REMOTE_SOURCE) {
    if (!REMOTE_SOURCE.hasOwnProperty(key)) {
      continue;
    }
    if (url === key) {
      return Promise.resolve({"json": REMOTE_SOURCE[key]});
    }
  }
  return Promise.reject({"error": "Request for: " + url});
};

/*const EXPECTED_DATASET = {
  "iri": "https://katalog-mdcr/a86",
  "title": "Seznam dopravců veřejné osobní dopravy obsažených v CIS JŘ",
  "description": "Obsahem datové sady je ....",
  "accrual_periodicity": "http://publications.europa.eu/resource/authority/frequency/WEEKLY_3",
  "ruian_type": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
  "ruian": "https://linked.cuzk.cz/resource/ruian/stat/1",
  "documentation": "https://www.mdcr.cz/Dokumenty/Verejna-doprava/Jizdni-rady,-kalendare-pro-jizdni-rady,-metodi-(1)/Jizdni-rady-verejne-dopravy",
  "keywords": ["dopravce", "jízdní řády", "drážní doprava", "veřejná linková doprava", "městská doprava", "CIS JŘ"],
  "temporal_start": "",
  "temporal_end": "",
  "contact_point_name": "Ministerstvo dopravy, Odbor veřejné dopravy",
  "contact_point_email": "sekretariat.190@mdcr.cz",
  "dataset_theme": "http://publications.europa.eu/resource/authority/data-theme/TRAN",
  "themes": ["http://eurovoc.europa.eu/4512"],
};
const EXPECTED_DISTRIBUTION = {
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
  "schema": "",
  "title": ""
};

test("Load by dereference.", () => {
  REMOTE_SOURCE = DEREFERENCE_REMOTE_SOURCE;
  const promise = importDataset("https://katalog-mdcr/a86");
  return promise.then((actual) => {
    const distributions = Object.values(actual.distributions);
    expect(actual.dataset).toEqual(EXPECTED_DATASET);
    expect(distributions.length).toBe(1);
    expect(distributions[0]).toEqual(EXPECTED_DISTRIBUTION);
  });
});

test("Load from single request.", () => {
  REMOTE_SOURCE  = ALL_IN_ONE_REMOTE_SOURCE;
  const promise = importDataset("https://katalog-mdcr/a86/all");
  return promise.then((actual) => {
    const distributions = Object.values(actual.distributions);
    expect(actual.dataset).toEqual(EXPECTED_DATASET);
    expect(distributions.length).toBe(1);
    expect(distributions[0]).toEqual(EXPECTED_DISTRIBUTION);
  });
});*/

const BYLANY = { "@graph": [
  { "@id": "https://data.gov.cz/zdroj/katalog/NKOD",
    "http://www.w3.org/ns/dcat#record": { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/z\u00E1znam"},
    "http://www.w3.org/ns/dcat#dataset": { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670"} },
  { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2",
    "@type": "http://www.w3.org/ns/dcat#Distribution",
    "https://data.gov.cz/slovn\u00EDk/nkod/mediaType": "application/pdf",
    "https://data.gov.cz/slovn\u00EDk/nkod/typ-\u00FAlo\u017Ei\u0161t\u011B-datov\u00E9-sady/typ\u00DAlo\u017Ei\u0161t\u011B": { "@id": "https://data.gov.cz/slovn\u00EDk/nkod/typ-\u00FAlo\u017Ei\u0161t\u011B-datov\u00E9-sady/Web"},
    "https://data.gov.cz/slovn\u00EDk/podm\u00EDnky-u\u017Eit\u00ED/specifikace": { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2/podm\u00EDnky-u\u017Eit\u00ED"},
    "http://www.w3.org/ns/dcat#downloadURL": { "@id": "https://data.gov.cz/soubor/nkod/Obec%20Bylany,%20Jan%20Krupka%20SoD%201001%2017%20%20Oprava%20kuchyn\u011B%20v%20M\u0160%20III%20etapa.pdf"},
    "http://www.w3.org/ns/dcat#accessURL": { "@id": "https://data.gov.cz/soubor/nkod/Obec%20Bylany,%20Jan%20Krupka%20SoD%201001%2017%20%20Oprava%20kuchyn\u011B%20v%20M\u0160%20III%20etapa.pdf"} },
  { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/kontaktn\u00ED-bod",
    "@type": [ "http://www.w3.org/2006/vcard/ns#Kind",
      "http://www.w3.org/2006/vcard/ns#Individual" ],
    "http://www.w3.org/2006/vcard/ns#fn": "Jan M\u00E1lek,starosta",
    "http://www.w3.org/2006/vcard/ns#hasEmail": "ou.bylany@worldonline.cz" },
  { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/z\u00E1znam",
    "@type": "http://www.w3.org/ns/dcat#CatalogRecord",
    "http://purl.org/dc/terms/modified": { "@value" : "2017-08-22T00:00:00" , "@type" : "http://www.w3.org/2001/XMLSchema#dateTime" },
    "http://purl.org/dc/terms/language": { "@id": "http://publications.europa.eu/resource/authority/language/CES"},
    "http://purl.org/dc/terms/conformsTo": { "@id": "https://joinup.ec.europa.eu/release/dcat-ap/12"},
    "http://purl.org/dc/terms/issued": { "@value" : "2017-08-22T00:00:00" , "@type" : "http://www.w3.org/2001/XMLSchema#dateTime" },
    "http://xmlns.com/foaf/0.1/primaryTopic": { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670"} },
  { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/\u010Dasov\u00E9-pokryt\u00ED",
    "@type": "http://purl.org/dc/terms/PeriodOfTime",
    "http://schema.org/endDate": { "@value" : "2017-08-31" , "@type" : "http://www.w3.org/2001/XMLSchema#date" },
    "http://schema.org/startDate": { "@value" : "2017-06-01" , "@type" : "http://www.w3.org/2001/XMLSchema#date" } },
  { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2/podm\u00EDnky-u\u017Eit\u00ED",
    "@type": "https://data.gov.cz/slovn\u00EDk/podm\u00EDnky-u\u017Eit\u00ED/Specifikace",
    "https://data.gov.cz/slovn\u00EDk/podm\u00EDnky-u\u017Eit\u00ED/autorsk\u00E9-d\u00EDlo": { "@id": "https://data.gov.cz/podm\u00EDnky-u\u017Eit\u00ED/neobsahuje-autorsk\u00E1-d\u00EDla/"},
    "https://data.gov.cz/slovn\u00EDk/podm\u00EDnky-u\u017Eit\u00ED/datab\u00E1ze-chr\u00E1n\u011Bn\u00E1-zvl\u00E1\u0161tn\u00EDmi-pr\u00E1vy": { "@id": "https://data.gov.cz/podm\u00EDnky-u\u017Eit\u00ED/nen\u00ED-chr\u00E1n\u011Bna-zvl\u00E1\u0161tn\u00EDm-pr\u00E1vem-po\u0159izovatele-datab\u00E1ze/"},
    "https://data.gov.cz/slovn\u00EDk/podm\u00EDnky-u\u017Eit\u00ED/datab\u00E1ze-jako-autorsk\u00E9-d\u00EDlo": { "@id": "https://data.gov.cz/podm\u00EDnky-u\u017Eit\u00ED/nen\u00ED-autorskopr\u00E1vn\u011B-chr\u00E1n\u011Bnou-datab\u00E1z\u00ED/"},
    "https://data.gov.cz/slovn\u00EDk/podm\u00EDnky-u\u017Eit\u00ED/osobn\u00ED-\u00FAdaje": { "@id": "https://data.gov.cz/podm\u00EDnky-u\u017Eit\u00ED/neobsahuje-osobn\u00ED-\u00FAdaje/"} },
  { "@id": "https://data.gov.cz/zdroj/ovm/00269905",
    "@type": "http://xmlns.com/foaf/0.1/Agent",
    "http://xmlns.com/foaf/0.1/name": "Obec Bylany" },
  { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670",
    "@type": [ "http://www.w3.org/ns/dcat#Dataset",
      "https://data.gov.cz/slovn\u00EDk/nkod/typ-datov\u00E9-sady-dle-zdroje/Formul\u00E1\u0159" ],
    "http://purl.org/dc/terms/modified": { "@value" : "2017-08-22T00:00:00" , "@type" : "http://www.w3.org/2001/XMLSchema#dateTime" },
    "http://purl.org/dc/terms/title": "Obec Bylany",
    "http://purl.org/dc/terms/description": "Oprava kuchyn\u011B v M\u0160-III.etapa",
    "http://purl.org/dc/terms/identifier": [ "https://data.gov.cz/zdroj/datov\u00E9-sady/qmsa4he/243671670",
      "243671670" ],
    "http://purl.org/dc/terms/publisher": { "@id": "https://data.gov.cz/zdroj/ovm/00269905"},
    "http://purl.org/dc/terms/spatial": { "@id": "https://linked.cuzk.cz/resource/ruian/stat/1"},
    "http://purl.org/dc/terms/issued": { "@value" : "2017-08-22T00:00:00" , "@type" : "http://www.w3.org/2001/XMLSchema#dateTime" },
    "http://www.w3.org/ns/dcat#contactPoint": { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/kontaktn\u00ED-bod"},
    "http://www.w3.org/ns/dcat#distribution": { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/distribuce/95ef5f639b386aa769c3e38125c116e2"},
    "http://purl.org/dc/terms/accrualPeriodicity": { "@id": "http://publications.europa.eu/resource/authority/frequency/UPDATE_CONT"},
    "http://purl.org/dc/terms/temporal": { "@id": "https://data.gov.cz/zdroj/datov\u00E9-sady/Bylany/243671670/\u010Dasov\u00E9-pokryt\u00ED"},
    "http://www.w3.org/ns/dcat#keyword": "obec Bylany" }
] };

const BYLANY_DS = {
  "https://data.eghuro.cz/dump/bylany.json" : BYLANY
}

// download, import, export, should be 1:1 match
let loaderTest = (iri) => {
  return new Promise((resolve, reject) => {
    let dataset = createDataset();
    let distributions = [createDistribution()];
    importDataset(iri, "en", {}, dataset, distributions).then((result) => {
      console.log("*** Imported ***");
      resolve(exportToJsonLd(dataset, distributions));
    });
  });
}

test("Bylany", done => {
  REMOTE_SOURCE = BYLANY_DS;
  const srcIri = "https://data.eghuro.cz/dump/bylany.json";
  getRemoteJson(srcIri).then((expected) => {
    console.log(expected.json);
    console.log("***");
    loaderTest(srcIri).then((output) => {
      expect(output).toEqual(output);
      done();
    })
  })
});
