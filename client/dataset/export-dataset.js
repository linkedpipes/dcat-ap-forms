import {
  DCATAP,
  NKOD,
  ADMS,
  STATUS,
  PU,
  CREATIVE_COMMONS,
} from "../app-service/vocabulary";
import {DIST_TYPE_FILE, DIST_TYPE_SERVICE} from "./distribution-model";
import {
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_RUIAN,
  SPATIAL_URL,
} from "./dataset-model";

const prefixes = {
  "http://publications.europa.eu/resource/authority/file-type/": "format",
  "http://publications.europa.eu/resource/authority/frequency/": "frequency",
  "http://publications.europa.eu/resource/authority/country/": "country",
  "http://publications.europa.eu/resource/authority/continent/": "continent",
  "http://publications.europa.eu/resource/authority/place/": "place",
  "http://publications.europa.eu/resource/authority/data-theme/": "theme",
  "http://eurovoc.europa.eu/": "euroVoc",
  "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/": "ovm",
};

const context = "https://ofn.gov.cz/rozhraní-katalogů-otevřených-dat/draft/" +
  "kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

export function exportToJsonLdForDelete(dataset) {
  return {
    "@context": context,
    "typ": ["Datová sada", NKOD.Formular],
    "iri": dataset.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}

export function exportToJsonLd(dataset, distributions) {
  if (isEmpty(dataset.iri)) {
    dataset.iri = "_:ds";
  }
  const output = {
    "@context": context,
    "iri": dataset.iri,
    "typ": ["Datová sada", NKOD.Formular],
    "název": asLangMap(dataset.title_cs, dataset.title_en),
    "popis": asLangMap(dataset.description_cs, dataset.description_en),
    ...exportSpatial(dataset),
    ...exportTemporal(dataset),
  };

  const keywords = asLangMap(dataset.keywords_cs, dataset.keywords_en);
  if (keywords["cs"] || keywords["en"]) {
    output["klíčové_slovo"] = keywords;
  }

  if (isNotEmpty(dataset.accrual_periodicity)) {
    output["periodicita_aktualizace"] = updateIris(dataset.accrual_periodicity);
  }

  if (isNotEmpty(dataset.documentation)) {
    output["dokumentace"] = dataset.documentation;
  }

  output["koncept_euroVoc"] = [
    ...updateIris(dataset.dataset_themes),
    ...updateIris(dataset.themes),
    ...updateIris(dataset.dataset_custom_themes),
  ];

  if (dataset.ofn.length > 0) {
    output["specifikace"] = dataset.ofn;
  }

  if (isNotEmpty(dataset.temporal_resolution)) {
    output["časové_rozlišení"] = updateIris(dataset.temporal_resolution);
  }

  if (isNotEmpty(dataset.spatial_resolution_meters)) {
    output["prostorové_rozlišení_v_metrech"] =
      dataset.spatial_resolution_meters;
  }

  const contactPoint = exportContactPoint(dataset);
  if (isNotEmpty(contactPoint)) {
    output["kontaktní_bod"] = contactPoint;
  }

  output["distribuce"] = distributions.map(
    (distribution) => exportDistribution(distribution, dataset.iri));

  return output;
}

function isEmpty(value) {
  return value === undefined || value === null || value === "";
}


function isNotEmpty(value) {
  return !isEmpty(value);
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

function exportSpatial(dataset) {
  const ruian = [];
  const geo_area = [];
  const custom = [];

  dataset.spatial.map((spatial) => {
    const url = updateIris(spatial.url);
    switch (spatial.type) {
    case SPATIAL_RUIAN:
      ruian.push(url);
      break;
    case SPATIAL_CONTINENT:
    case SPATIAL_COUNTRY:
    case SPATIAL_PLACE:
      geo_area.push(url);
      break;
    case SPATIAL_URL:
      custom.push(url);
      break;
    default:
      console.warn("Unknown spatial type for", spatial);
      custom.push(url);
      break;
    }
  });

  const result = {};
  if (ruian.length > 0) {
    result["prvek_rúian"] = ruian;
  }
  if (ruian.length > 0) {
    result["geografické_území"] = geo_area;
  }
  if (ruian.length > 0) {
    result["prostorové_pokrytí"] = custom;
  }

  return result;
}

function updateIris(value) {

  function updateIri(iri) {
    for (const [prefix, short] of Object.entries(prefixes)) {
      if (iri.startsWith(prefix)) {
        return short + ":" + iri.substr(prefix.length);
      }
    }
    return iri;
  }

  if (Array.isArray(value)) {
    return value.map(updateIri);
  }
  return updateIri(value);
}


function exportTemporal(dataset) {
  if (!containsValidDate(dataset.temporal_start) &&
    !containsValidDate(dataset.temporal_end)) {
    return {};
  }
  const output = {
    "typ": "Časový interval",
  };
  if (containsValidDate(dataset.temporal_start)) {
    output["začátek"] = dataset.temporal_start;
  }
  if (containsValidDate(dataset.temporal_end)) {
    output["konec"] = dataset.temporal_end;
  }
  return {
    "časové_pokrytí": output,
  };
}

function containsValidDate(value) {
  return isNotEmpty(value);
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

function exportDistribution(distribution, datasetIri) {

  const result = {
    "typ": "Distribuce",
  };

  let title = asLangMap(distribution.title_cs, distribution.title_en);
  if (title["cs"] || title["en"]) {
    result["název"] = title;
  }

  if (distribution.type === DIST_TYPE_FILE) {
    result["soubor_ke_stažení"] = distribution.url;

    if (isNotEmpty(distribution.media_type)) {
      result["mediaType"] = updateIris(distribution.media_type);
    }

    if (isNotEmpty(distribution.format)) {
      result["formát"] = updateIris(distribution.format);
    }

    if (isNotEmpty(distribution.schema)) {
      result["schéma"] = updateIris(distribution.schema);
    }

    if (isNotEmpty(distribution.packageFormat)) {
      result["mediaType_balíčku"] = updateIris(distribution.packageFormat);
    }

    if (isNotEmpty(distribution.compressFormat)) {
      result["mediaType_komprese"] = updateIris(distribution.compressFormat);
    }

  } else if (distribution.type === DIST_TYPE_SERVICE) {
    result["přístupové_url"] = distribution.service_endpoint_url;
    result["přístupová_služba"] = {
      "typ": "Datová služba",
      "endpoint": distribution.service_endpoint_url,
      "popis_endpointu": distribution.service_description,
    };
    if (title["cs"] || title["en"]) {
      result["přístupová_služba"]["název"] = title;
    }
    if (isNotEmpty(datasetIri)) {
      result["přístupová_služba"][DCATAP.servesDataset] = datasetIri;
    }
  } else {
    console.error("Distribution must be either FILE or SERVICE.", distribution);
  }
  result["podmínky_užití"] = exportLicense(distribution);
  return result;
}

function exportLicense(distribution) {
  const result = {
    "typ": "Specifikace podmínek užití",
  };
  switch (distribution.license_author_type) {
  case "MULTI":
    result["autorské_dílo"] = PU.obsahujeViceAutorskychDel;
    break;
  case "CC BY":
    result["autorské_dílo"] = CREATIVE_COMMONS.BY_40;
    result[PU.autor] = asLangString(distribution.license_author_name, "cs");
    break;
  case "NO":
    result["autorské_dílo"] = PU.neobsahujeAutorskaDila;
    break;
  case "CUSTOM":
    result["autorské_dílo"] = distribution.license_author_custom;
    break;
  default:
    console.error("Unexpected license_author_type value:",
      distribution.license_author_type);
    break;
  }

  switch (distribution.license_db_type) {
  case "CC BY":
    result["databáze_jako_autorské_dílo"] = CREATIVE_COMMONS.BY_40;
    result[PU.autorDatabaze] = asLangString(distribution.license_db_name, "cs");
    break;
  case "NO":
    result["databáze_jako_autorské_dílo"] =
      PU.neniAutorskopravneChranenouDatabazi;
    break;
  case "CUSTOM":
    result["databáze_jako_autorské_dílo"] =
      distribution.license_db_custom;
    break;
  default:
    console.error("Unexpected license_db_type value:",
      distribution.license_db_type);
    break;
  }

  switch (distribution.license_specialdb_type) {
  case "CC0":
    result["databáze_chráněná_zvláštními_právy"] =
      CREATIVE_COMMONS.PUBLIC_ZERO_10;
    break;
  case "NO":
    result["databáze_chráněná_zvláštními_právy"] =
      PU.neniChranenazvlastnimPravemPorizovateleDatabaze;
    break;
  case "CUSTOM":
    result["databáze_chráněná_zvláštními_právy"] =
      distribution.license_specialdb_custom;
    break;
  default:
    console.error("Unexpected license_specialdb_type value:",
      distribution.license_specialdb_type);
    break;
  }

  switch (distribution.license_personal_type) {
  case "YES":
    result["osobní_údaje"] = PU.obsahujeOsobniUdaje;
    break;
  case "NO":
    result["osobní_údaje"] = PU.neobsahujeOsobniUdaje;
    break;
  default:
    console.error("Unexpected license_personal_type value:",
      distribution.license_personal_type);
    break;
  }

  return result;
}

function asLangString(value) {
  return {
    "@language": "cs",
    "@value": value,
  };
}
