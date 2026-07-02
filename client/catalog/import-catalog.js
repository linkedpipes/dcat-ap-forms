import {
  selectByType,
  getId,
  getTypes,
  getValue,
  getMultiLangString,
  selectByIri,
  selectString,
} from "../app-service/jsonld/properties";
import {DCATAP, DCTERMS, VCARD, FOAF} from "../app-service/vocabulary";
import jsonld from "jsonld";
import {createCatalog} from "./catalog-model";
import {getRemoteJsonLd} from "../app-service/http";
import {configuration} from "./../client-configuration";

/**
 * @param {string} url
 * @param {string} defaultLanguage
 */
export async function importCatalogFromUrlWithProxy(url, defaultLanguage) {
  const response = await getRemoteJsonLd(applyUrlProxyTemplate(url));
  return importCatalogFromJsonLd(response.json, defaultLanguage);
}

/**
 *
 * @param {string} url
 */
function applyUrlProxyTemplate(url) {
  const urlTemplate = configuration.dereferenceTemplate;
  if (urlTemplate === "") {
    return url;
  } else {
    return urlTemplate.replace("{}", encodeURIComponent(url));
  }
}

/**
 * @param {*} jsonLdContent
 * @param {"cs" | "en"} defaultLanguage
 * @returns
 */
export function importCatalogFromJsonLd(jsonLdContent, defaultLanguage) {
  return jsonld().flatten(jsonLdContent).then(flatJsonLd => {
    const catalogEntities = selectByType(flatJsonLd, DCATAP.Catalog);
    if (catalogEntities.length !== 1) {
      throw new Error(
        "Invalid number of catalog records (" + catalogEntities.length + ")");
    }
    const catalogEntity = catalogEntities[0];

    const title = loadLanguageString(
      getMultiLangString(catalogEntity, DCTERMS.title), defaultLanguage);

    return {
      ...createCatalog(),
      "title_cs": title.cs,
      "title_en": title.en,
      ...loadContactPoint(flatJsonLd, catalogEntity),
      "iri": getId(catalogEntity),
      "endpoint": getValue(catalogEntity, DCATAP.endpointURL),
      "type": loadType(catalogEntity),
      "homepage": getValue(catalogEntity, FOAF.homepage) || "",
    };
  });
}

/**
 * @param {*} value Language string
 * @param {"cs" | "en"} defaultLanguage
 * @returns {{cs:string, en: string}}
 */
function loadLanguageString(value, defaultLanguage) {
  const cs = selectString(value, "cs");
  const en = selectString(value, "en");
  const blank = selectString(value, "");
  if (defaultLanguage === "cs") {
    return {
      "cs": cs ?? blank ?? "",
      "en": en ?? "",
    };
  } else {
    return {
      "cs": cs ?? "",
      "en": en ?? blank ?? "",
    };
  }
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
