import {
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_RUIAN,
  SPATIAL_URL,
} from "../../dataset-model";
import {getItemFromStore, getLabelFromStore} from "./local-storage";
import {CONTINENTS, COUNTRIES, PLACES, RUIAN} from "./server-codelists";

export function getSpatialLabel(codelist, item, lang) {
  if (item.type === SPATIAL_RUIAN) {
    const ruian = getItemFromStore(codelist, RUIAN, item.url);
    if (ruian === undefined) {
      return item.url;
    }
    return (ruian[lang] || item.url) + " (" + ruian["notation"] + ")";
  }
  switch (item.type) {
  case SPATIAL_CONTINENT:
    return getLabelFromStore(codelist, CONTINENTS, item.url, lang);
  case SPATIAL_COUNTRY:
    return getLabelFromStore(codelist, COUNTRIES, item.url, lang);
  case SPATIAL_PLACE:
    return getLabelFromStore(codelist, PLACES, item.url, lang);
  case SPATIAL_URL:
    return item.url;
  default:
    return item.url;
  }
}
