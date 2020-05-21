import {
  FOAF,
  ADMS,
  STATUS,
} from "../app-service/vocabulary";

const context = "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/" +
  "kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

export function exportToJsonLdForDelete(catalog) {
  return {
    "@context": context,
    "typ": "Katalog",
    "iri": catalog.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}

export function exportToJsonLd(catalog) {
  const output = {
    "@context": context,
    "@type": ["Katalog", catalog.type],
    "endpoint": catalog.endpoint,
    "název": asLangMap(catalog.title_cs, catalog.title_en),
    ...exportContactPoint(catalog),
  };
  if (isNotEmpty(catalog.homepage)) {
    output[FOAF.homepage] = {
      "@id": catalog.homepage,
    };
  }
  return output;
}

function asLangMap(value_cs, value_en) {
  const result = {};
  if (isNotEmpty(value_cs)) {
    result["cs"] = value_cs;
  }
  if (isNotEmpty(value_en)) {
    result["en"] = value_en;
  }
  return result;
}

function isNotEmpty(value) {
  return !isEmpty(value);
}

function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

function exportContactPoint(catalog) {
  if (isEmpty(catalog.contact_point_name) &&
    isEmpty(catalog.contact_point_email)) {
    return {};
  }
  const output = {
    "typ": "Organizace",
  };
  if (isNotEmpty(catalog.contact_point_name)) {
    output["jméno"] = asLangMap(catalog.contact_point_name);
  }
  if (isNotEmpty(catalog.contact_point_email)) {
    output["e-mail"] = catalog.contact_point_email;
  }
  return output;
}
