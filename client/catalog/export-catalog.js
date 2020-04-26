import {
  DCTERMS,
  DCATAP,
  FOAF,
  VCARD,
  ADMS,
  STATUS,
} from "../app-service/vocabulary";

export function exportToJsonLdForDelete(catalog) {
  return {
    "@type": catalog.types,
    "@id": catalog.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}

export function exportToJsonLd(catalog) {
  const output = {
    "@type": [DCATAP.Catalog, catalog.type],
    [DCATAP.endpointURL]: {
      "@value": catalog.endpoint,
      "@type": "http://www.w3.org/2001/XMLSchema#anyURI",
    },
    [DCTERMS.title]: asLangString(catalog.title_cs, catalog.title_en),
  };
  const contactPoint = exportContactPoint(catalog);
  if (contactPoint !== undefined) {
    output[DCATAP.contactPoint] = contactPoint;
  }
  if (isNotEmpty(catalog.homepage)) {
    output[FOAF.homepage] = {
      "@id": catalog.homepage,
    };
  }
  return output;
}

function asLangString(value_cs, value_en) {
  const result = [{
    "@language": "cs",
    "@value": value_cs,
  }];
  if (isNotEmpty(value_en)) {
    result.push({
      "@language": "en",
      "@value": value_en,
    });
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
  const output = {
    "@type": [VCARD.Organization],
  };
  if (isEmpty(catalog.contact_point_name) &&
    isEmpty(catalog.contact_point_email)) {
    return undefined;
  }
  if (isNotEmpty(catalog.contact_point_name)) {
    output[VCARD.fn] = asLangString(catalog.contact_point_name);
  }
  if (isNotEmpty(catalog.contact_point_email)) {
    output[VCARD.hasEmail] = catalog.contact_point_email;
  }
  return output;
}
