import * as http from "@/app-service/http";
import {importFromUrl} from "./import-from-url";

const REMOTE_SOURCE = {
    "https://dev.nkod.opendata.cz/sparql?query=define%20sql%3Adescribe-mode%20%22CBD%22%20%20DESCRIBE%20%3Chttps%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2FMDopravy%2Fkatalog-mdcr%2Fa86cec494eba42b5b8a35f0e7c8e4f92%3E&output=application%2Fld%2Bjson": {
        "@graph": [
            {
                "@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92",
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
                    "@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92/kontaktní-bod"
                },
                "http://www.w3.org/ns/dcat#distribution": {
                    "@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92/distribuce/2500ebd65703ed8d53ad2c0d72759463"
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
    "https://dev.nkod.opendata.cz/sparql?query=define%20sql%3Adescribe-mode%20%22CBD%22%20%20DESCRIBE%20%3Chttps%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2FMDopravy%2Fkatalog-mdcr%2Fa86cec494eba42b5b8a35f0e7c8e4f92%2Fkontaktn%C3%AD-bod%3E&output=application%2Fld%2Bjson": {
        "@graph": [
            {
                "@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92/kontaktní-bod",
                "@type": "http://www.w3.org/2006/vcard/ns#Organization",
                "http://www.w3.org/2006/vcard/ns#fn": {
                    "@value": "Ministerstvo dopravy, Odbor veřejné dopravy",
                    "@language": "cs"
                },
                "http://www.w3.org/2006/vcard/ns#hasEmail": "sekretariat.190@mdcr.cz"
            }
        ]
    },
    "https://dev.nkod.opendata.cz/sparql?query=define%20sql%3Adescribe-mode%20%22CBD%22%20%20DESCRIBE%20%3Chttps%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2FMDopravy%2Fkatalog-mdcr%2Fa86cec494eba42b5b8a35f0e7c8e4f92%2Fdistribuce%2F2500ebd65703ed8d53ad2c0d72759463%3E&output=application%2Fld%2Bjson": {
        "@graph": [
            {
                "@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92/distribuce/2500ebd65703ed8d53ad2c0d72759463",
                "@type": "http://www.w3.org/ns/dcat#Distribution",
                "http://purl.org/dc/terms/format": {"@id": "http://publications.europa.eu/resource/authority/file-type/CSV"},
                "https://data.gov.cz/slovník/nkod/typ-úložiště-datové-sady/typÚložiště": {"@id": "https://data.gov.cz/slovník/nkod/typ-úložiště-datové-sady/Web"},
                "https://data.gov.cz/slovník/podmínky-užití/specifikace": {"@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92/podmínky-užití"},
                "http://www.w3.org/ns/dcat#downloadURL": {"@id": "ftp://ftp.cisjr.cz/seznamy/dopravci.csv"},
                "http://www.w3.org/ns/dcat#mediaType": {"@id": "http://www.iana.org/assignments/media-types/text/csv"},
                "http://www.w3.org/ns/dcat#accessURL": {"@id": "ftp://ftp.cisjr.cz/seznamy/dopravci.csv"}
            }
        ]
    },
    "https://dev.nkod.opendata.cz/sparql?query=define%20sql%3Adescribe-mode%20%22CBD%22%20%20DESCRIBE%20%3Chttp%3A%2F%2Fpublications.europa.eu%2Fresource%2Fauthority%2Fdata-theme%2FTRAN%3E&output=application%2Fld%2Bjson": {
        "@graph": [
            {
                "@id": "http://publications.europa.eu/resource/authority/data-theme/TRAN",
                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                "http://www.w3.org/2004/02/skos/core#inScheme": {"@id": "http://publications.europa.eu/resource/authority/data-theme"}
            }
        ]
    },
    "https://dev.nkod.opendata.cz/sparql?query=define%20sql%3Adescribe-mode%20%22CBD%22%20%20DESCRIBE%20%3Chttp%3A%2F%2Feurovoc.europa.eu%2F4512%3E&output=application%2Fld%2Bjson": {
        "@graph": [
            {
                "@id": "http://eurovoc.europa.eu/4512",
                "@type": "http://www.w3.org/2004/02/skos/core#Concept",
                "http://www.w3.org/2004/02/skos/core#inScheme": [{"@id": "http://eurovoc.europa.eu/100238"},
                    {"@id": "http://eurovoc.europa.eu/"},
                    {"@id": "http://eurovoc.europa.eu/100141"}],
            }
        ]
    },
    "https://dev.nkod.opendata.cz/sparql?query=define%20sql%3Adescribe-mode%20%22CBD%22%20%20DESCRIBE%20%3Chttps%3A%2F%2Fdata.gov.cz%2Fzdroj%2Fdatov%C3%A9-sady%2FMDopravy%2Fkatalog-mdcr%2Fa86cec494eba42b5b8a35f0e7c8e4f92%2Fpodm%C3%ADnky-u%C5%BEit%C3%AD%3E&output=application%2Fld%2Bjson": {
        "@graph": [
            {
                "@id": "https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92/podmínky-užití",
                "@type": "https://data.gov.cz/slovník/podmínky-užití/Specifikace",
                "https://data.gov.cz/slovník/podmínky-užití/autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/"},
                "https://data.gov.cz/slovník/podmínky-užití/databáze-chráněná-zvláštními-právy": {"@id": "https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/"},
                "https://data.gov.cz/slovník/podmínky-užití/databáze-jako-autorské-dílo": {"@id": "https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/"},
                "https://data.gov.cz/slovník/podmínky-užití/osobní-údaje": {"@id": "https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/"}
            }
        ]
    }
};

http.getRemoteJson = (url) => {
    return Promise.resolve({"json": REMOTE_SOURCE[url]});
};

test("Seznam dopravců veřejné osobní dopravy obsažených v CIS JŘ", () => {
    const promise = importFromUrl("https://data.gov.cz/zdroj/datové-sady/MDopravy/katalog-mdcr/a86cec494eba42b5b8a35f0e7c8e4f92");
    const expectedDataset = {
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
    const expectedDistribution = {
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

    return promise.then((actual) => {
        const distributions = Object.values(actual.distributions);
        expect(actual.dataset).toEqual(expectedDataset);
        expect(distributions.length).toBe(1);
        expect(distributions[0]).toEqual(expectedDistribution);
    });
});

