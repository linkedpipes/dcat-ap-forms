import {
  selectByType,
  getId,
  getTypes,
  getValue,
  getMultiLangString,
  unpackLangStringToProp,
  selectByIri,
} from "../app-service/import-utilities";
import {DCATAP, DCTERMS, VCARD, FOAF} from "../app-service/vocabulary";
import jsonld from "jsonld";
import {createCatalog} from "./catalog-model";

/**
 * Does not import full catalog information.
 */
export function importCatalogFromJsonLd(jsonLdContent, defaultLanguage) {
  return jsonld().flatten(jsonLdContent).then(flatJsonLd => {
    const catalogEntities = selectByType(flatJsonLd, DCATAP.Catalog);
    if (catalogEntities.length !== 1) {
      throw new Error(
        "Invalid number of catalog records (" + catalogEntities.length + ")");
    }
    const catalogEntity = catalogEntities[0];
    const title = getMultiLangString(catalogEntity, DCTERMS.title);
    return {
      ...createCatalog(),
      ...unpackLangStringToProp("title", defaultLanguage, title),
      ...loadContactPoint(flatJsonLd, catalogEntity),
      "iri": getId(catalogEntity),
      "endpoint": getValue(catalogEntity, DCATAP.endpointURL),
      "type": loadType(catalogEntity),
      "homepage": getValue(catalogEntity, FOAF.homepage) || "",
    };
  });
}

function loadContactPoint(flatJsonLd, catalogEntity) {
  const contactIri = getValue(catalogEntity, DCATAP.contactPoint);
  if (contactIri === undefined) {
    return {};
  }
  const entities = selectByIri(flatJsonLd, contactIri);
  if (entities.length < 1) {
    return {};
  }
  const contact = entities[0];
  return {
    "contact_point_name": getValue(contact, VCARD.fn) || "",
    "contact_point_email": getEmail(contact),
  };
}

function getEmail(contact) {
  let email = getValue(contact, VCARD.hasEmail) || "";
  if (email.toLowerCase().startsWith("mailto:")) {
    email = email.substr("mailto:".length);
  }
  return email;
}

function loadType(catalogEntity) {
  const types = getTypes(catalogEntity) || [];
  for (const type of types) {
    if (type === DCATAP.Catalog) {
      continue;
    }
    return type;
  }
  return undefined;
}
