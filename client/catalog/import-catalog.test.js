import {createCatalog} from "./catalog-model";
import {importCatalogFromJsonLd} from "./import-catalog";

test("Import catalog from JSON-LD object with cs default.", () => {
  const input = {
    "@id": "urn:Catalog",
    "@type": ["http://www.w3.org/ns/dcat#Catalog", "urn:type"],
    "http://purl.org/dc/terms/title": [{
      "@language": "cs",
      "@value": "Title",
    },
    "Empty language",
    ],
    "http://www.w3.org/ns/dcat#endpointURL": "urn:endpoint",
  };
  const expected = {
    ...createCatalog(),
    "iri": "urn:Catalog",
    "title_cs": "Title",
    "title_en": "",
    "endpoint": "urn:endpoint",
    "types": ["http://www.w3.org/ns/dcat#Catalog", "urn:type"],
  };
  return importCatalogFromJsonLd(input, "cs").then(actual => {
    expect(actual).toEqual(expected);
  });
});

test("Import catalog from @graph JSON-LD object with en default", () => {
  const input = {
    "@graph": [{
      "@graph": {
        "@id": "urn:Catalog",
        "@type": ["http://www.w3.org/ns/dcat#Catalog", "urn:type"],
        "http://purl.org/dc/terms/title": [{
          "@language": "cs",
          "@value": "Title",
        },
        "Empty language",
        ],
        "http://www.w3.org/ns/dcat#endpointURL": "urn:endpoint",
      },
      "@id": "@graph",
    }],
  };
  const expected = {
    ...createCatalog(),
    "iri": "urn:Catalog",
    "title_cs": "Title",
    "title_en": "Empty language",
    "endpoint": "urn:endpoint",
    "types": ["http://www.w3.org/ns/dcat#Catalog", "urn:type"],
  };
  return importCatalogFromJsonLd(input, "en").then(actual => {
    expect(actual).toEqual(expected);
  });
});
