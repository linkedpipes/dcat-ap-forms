import { ESBIRKA } from "../../../app-service/vocabulary";

/**
 * @type {{value: string, cs: string, en: string}[]}
 */
export const legislationCodelist = [{
  "value": ESBIRKA.DYNAMIC_DATA,
  "cs": "Dynamická data - § 3a odst. 6 zákona  č. 106/1999 Sb.",
  "en": "Dynamic data",
}, {
  "value": ESBIRKA.PUBLIC_REGISTERS,
  "cs": "Data z veřejných registrů - § 5a odst. 1 zákona  č. 106/1999 Sb.",
  "en": "Data from public registries",
}];

/**
 * @param {string} iri
 * @param {"cs" | "en"} lang
 * @returns {string}
 */
export function getLegislationCodelist(iri, lang) {
  for (let index in legislationCodelist) {
    if (legislationCodelist[index]["value"] === iri) {
      return legislationCodelist[index][lang];
    }
  }
  return iri;
}
