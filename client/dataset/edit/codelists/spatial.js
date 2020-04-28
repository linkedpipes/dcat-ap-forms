import {
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_RUIAN,
  SPATIAL_URL,
} from "../../dataset-model";
import {getStoreItem, getStoreLabel} from "./local-storage";
import {CONTINENTS, COUNTRIES, PLACES, RUIAN} from "./solr-cores";

export function getSpatialLabel(codelist, item, lang) {
  if (item.type === SPATIAL_RUIAN) {
    const ruian = getStoreItem(codelist, RUIAN, item.url);
    if (ruian === undefined) {
      return item.url;
    }
    return (ruian[lang] || item.url) + " (" + ruian["notation"] + ")";
  }
  switch (item.type) {
  case SPATIAL_CONTINENT:
    return getStoreLabel(codelist, CONTINENTS, item.url, lang);
  case SPATIAL_COUNTRY:
    return getStoreLabel(codelist, COUNTRIES, item.url, lang);
  case SPATIAL_PLACE:
    return getStoreLabel(codelist, PLACES, item.url, lang);
  case SPATIAL_URL:
    return item.url;
  default:
    return item.url;
  }
}
