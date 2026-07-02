import { EUROPE } from "../../../app-service/vocabulary";

/**
 * @type {{value: string, cs: string, en: string}[]}
 */
export const legislationCodelist = [{
  "value": "https://www.e-sbirka.cz/eli/cz/sb/1999/106/2024-01-01/dokument/norma/cast_1/par_3a/odst_6",
  "cs": "Dynamická data - § 3a odst. 6 zákona  č. 106/1999 Sb.",
  "en": "Dynamic data",
}, {
  "value": "https://www.e-sbirka.cz/eli/cz/sb/1999/106/2024-01-01/dokument/norma/cast_1/par_5a/odst_1",
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

/**
 * Extended legislation with HVD options.
 * @type {{value: string, cs: string, en: string}[]}
 */
export const legislationHvdCodelist = [{
  "value": EUROPE.hvd,
  "cs": "High Value Dataset (HVD) - Prováděcí nařízení Komise (EU) 2023/138",
  "en": "High Value Dataset (HVD)",
}, ...legislationCodelist];
