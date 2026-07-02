import {
  SPATIAL_CONTINENT, SPATIAL_COUNTRY, SPATIAL_RUIAN,
} from "./dataset-model";
import { fetchLabelFromCodeList } from "./edit/codelists/local-storage";
import {
  RUIAN, CONTINENTS, COUNTRIES,
} from "./edit/codelists/server-codelists";

/**
 * Fetch and add labels to the given dataset and distributions.
 * @param {*} dataset
 * @param {*[]} distributions
 * @param {"cs" | "en"} language
 */
export function fetchCodelistLabels(dataset, distributions, language) {
  const formats = new Set();
  const mediaTypes = new Set();
  distributions.forEach((distribution) => {
    formats.add(distribution.format);
    mediaTypes.add(distribution.media_type);
  });
  formats.forEach((iri) => {
    fetchLabelFromCodeList("file-type", iri, language);
  });
  mediaTypes.forEach((iri) => {
    fetchLabelFromCodeList("media-types", iri, language);
  });
  dataset.spatial.forEach((spatial) => {
    switch (spatial.type) {
    case SPATIAL_COUNTRY:
      fetchLabelFromCodeList(COUNTRIES, spatial.url, language);
      break;
    case SPATIAL_CONTINENT:
      fetchLabelFromCodeList(CONTINENTS, spatial.url, language);
      break;
    case SPATIAL_RUIAN:
      fetchLabelFromCodeList(RUIAN, spatial.url, language);
      break;
    }
  });
}