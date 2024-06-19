import {
  PU,
  CREATIVE_COMMONS,
} from "../../app-service/vocabulary";
import { DIST_TYPE_FILE, DIST_TYPE_SERVICE } from "../distribution-model";
import {
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_RUIAN,
  SPATIAL_URL,
} from "../dataset-model";
import { includesHvd } from "./codelists/legislation";

const CONTEXT =
  "https://ofn.gov.cz/dcat-ap-cz-rozhraní-katalogů-otevřených-dat/"
  + "2024-05-28/kontexty/rozhraní-katalogů-otevřených-dat.jsonld";

/**
 * Set all nodes as blank nodes and remove publisher.
 */
export function exportDatasetForNkod(dataset, distributions) {
  // Create a copy so we do not modify the inputs.
  dataset = { ...dataset };
  // There is no IRI and no publisher.
  dataset.iri = "_:ds";
  dataset.publisher = undefined;
  //
  return exportDatasetToJsonLd(
    dataset, distributions, selectBlankNodeAsIri, selectBlankNodeAsIri);
}

function selectBlankNodeAsIri() {
  return undefined;
}

/**
 * Use IRIs from export options or try to preserve IRIs from the dataset.
 */
export function exportDatasetForLkod(
  dataset, distributions, exportOptions) {
  // Create a copy so we do not modify the inputs.
  dataset = { ...dataset };
  // Apply export options.
  if (isNotEmpty(exportOptions.lkodIri)) {
    dataset.iri = exportOptions.lkodIri;
  }
  if (isNotEmpty(exportOptions.publisher)) {
    dataset.publisher = exportOptions.publisher;
  }

  // Generate new IRIs.
  let selectDistributionIri =
    (dist, distIndex) => dataset.iri + "/distribuce/" + distIndex;
  let selectServiceIri =
    (dist, distIri) => distIri + "/přístupová-služba";

  return exportDatasetToJsonLd(
    dataset, distributions, selectDistributionIri, selectServiceIri);
}

/**
 * Export data for POST, in this case we want to preserve IRIs where possible.
 */
export function exportDatasetForPost(dataset, distributions) {
  // Create a copy so we do not modify the inputs.
  dataset = { ...dataset };

  // Use existing or nothing (blank nodes).
  let selectDistributionIri = (dist) => dist.iri || undefined;
  let selectServiceIri = (dist) => dist.service_iri || undefined;

  return exportDatasetToJsonLd(
    dataset, distributions, selectDistributionIri, selectServiceIri);
}

function exportDatasetToJsonLd(
  dataset, distributions, selectDistributionIri, selectServiceIri) {
  const output = {
    "@context": CONTEXT,
    "iri": dataset.iri,
    "typ": "Datová sada",
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

  output["téma"] = updateIris(dataset.dataset_themes);

  if (dataset.legislation.length > 0) {
    output["právní_předpis"] = dataset.legislation;
  }

  if (dataset.hvd_categories.length > 0) {
    output["kategorie_hvd"] = dataset.hvd_categories;
  }

  output["koncept_euroVoc"] = [
    ...updateIris(dataset.themes),
    ...updateIris(dataset.dataset_custom_themes),
  ];

  if (dataset.ofn.length > 0) {
    output["specifikace"] = dataset.ofn;
  }

  if (isNotEmpty(dataset.temporal_resolution)) {
    output["časové_rozlišení"] = dataset.temporal_resolution;
  }

  if (isNotEmpty(dataset.spatial_resolution_meters)) {
    output["prostorové_rozlišení_v_metrech"] =
      dataset.spatial_resolution_meters;
  }

  const contactPoint = exportContactPoint(dataset);
  if (isNotEmpty(contactPoint)) {
    output["kontaktní_bod"] = contactPoint;
  }

  if (isNotEmpty(dataset.publisher)) {
    output["poskytovatel"] = dataset.publisher;
  }

  output["distribuce"] = distributions.map(
    (distribution, index) => exportDistribution(
      dataset, distribution, index,
      selectDistributionIri, selectServiceIri));

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
  result["prvek_rúian"] = ruian;
  result["geografické_území"] = geo_area;
  result["prostorové_pokrytí"] = custom;
  return result;
}

function updateIris(values) {
  return values;
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
    output["e-mail"] = "mailto:" + catalog.contact_point_email;
  }
  return output;
}

function exportDistribution(
  dataset, distribution, distributionIndex,
  selectDistributionIri, selectServiceIri) {

  const result = {
    "typ": "Distribuce",
  };

  const iri = selectDistributionIri(distribution, distributionIndex);
  if (isNotEmpty(iri)) {
    result["iri"] = iri;
  }

  let title = asLangMap(distribution.title_cs, distribution.title_en);
  if (title["cs"] || title["en"]) {
    result["název"] = title;
  }

  result["podmínky_užití"] = exportLicense(distribution);

  if (distribution.legislation.length > 0) {
    result["právní_předpis"] = distribution.legislation;
  }

  if (distribution.type === DIST_TYPE_FILE) {
    addDistributionFile(distribution, result);
  } else if (distribution.type === DIST_TYPE_SERVICE) {
    addDistributionService(dataset, distribution, selectServiceIri, result);
  } else {
    console.error("Distribution must be either FILE or SERVICE.", distribution);
  }

  return result;
}

function addDistributionFile(distribution, result) {
  result["soubor_ke_stažení"] = distribution.url;
  result["přístupové_url"] = distribution.url;

  if (isNotEmpty(distribution.media_type)) {
    result["typ_média"] = updateIris(distribution.media_type);
  }

  if (isNotEmpty(distribution.format)) {
    result["formát"] = updateIris(distribution.format);
  }

  if (isNotEmpty(distribution.schema)) {
    result["schéma"] = updateIris(distribution.schema);
  }

  if (isNotEmpty(distribution.package_format)) {
    result["typ_média_balíčku"] = updateIris(distribution.package_format);
  }

  if (isNotEmpty(distribution.compress_format)) {
    result["typ_média_komprese"] = updateIris(distribution.compress_format);
  }
}

function addDistributionService(
  dataset, distribution, selectServiceIri, result
) {
  result["přístupové_url"] = distribution.service_endpoint_url;

  const dataService = {
    "typ": "Datová služba",
    "přístupový_bod": distribution.service_endpoint_url,
    "popis_přístupového_bodu": distribution.service_description,
  };
  result["přístupová_služba"] = dataService;

  const iri = selectServiceIri(distribution, result["iri"]);
  if (isNotEmpty(iri)) {
    dataService["iri"] = iri;
  }

  const title = result["název"];
  if (title["cs"] || title["en"]) {
    dataService["název"] = title;
  }

  if (isNotEmpty(dataset.iri)) {
    dataService["poskytuje_datovou_sadu"] = dataset.iri;
  }

  if (isNotEmpty(distribution.service_conforms_to)) {
    dataService["specifikace"] = distribution.service_conforms_to;
  }

  // Copy legislation from distribution.
  if (distribution.legislation.length > 0) {
    dataService["právní_předpis"] = distribution.legislation;
  }

  // Copy HVD categories from a dataset.
  if (dataset.hvd_categories.length > 0 && includesHvd(distribution.legislation)) {
    dataService["kategorie_hvd"] = dataset.hvd_categories;
  }
}

function exportLicense(distribution) {
  const result = {
    "typ": "Specifikace podmínek užití",
  };
  switch (distribution.license_author_type) {
  case undefined:
    // For download of partial data.
    break;
  case "MULTI":
    result["autorské_dílo"] = PU.obsahujeViceAutorskychDel;
    break;
  case "CC BY":
    result["autorské_dílo"] = CREATIVE_COMMONS.BY_40;
    result["autor"] = asLangMap(distribution.license_author_name);
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
  case undefined:
    // For download of partial data.
    break;
  case "CC BY":
    result["databáze_jako_autorské_dílo"] = CREATIVE_COMMONS.BY_40;
    result["autor_databáze"] = asLangMap(distribution.license_db_name);
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
  case undefined:
    // For download of partial data.
    break;
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
  case undefined:
    // For download of partial data.
    break;
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
