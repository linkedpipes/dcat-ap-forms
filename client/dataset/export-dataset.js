import {
  DCATAP,
  NKOD,
  ADMS,
  STATUS,
  DCTERMS,
  FOAF,
  VCARD,
  PU,
  CREATIVE_COMMONS,
} from "../app-service/vocabulary";
import {DIST_TYPE_FILE, DIST_TYPE_SERVICE} from "./distribution-model";

export function exportToJsonLdForDelete(dataset) {
  return {
    "@type": [DCATAP.Dataset, NKOD.Formular],
    "@id": dataset.iri,
    [ADMS.status]: {"@id": STATUS.Withdrawn},
  };
}

export function exportToJsonLd(dataset, distributions) {
  let titles = [asLangString(dataset.title_cs, "cs")];
  if (isNotEmpty(dataset.title_en)) {
    titles.push(asLangString(dataset.title_en, "en"));
  }

  let descriptions = [asLangString(dataset.description_cs, "cs")];
  if (isNotEmpty(dataset.description_en)) {
    descriptions.push(asLangString(dataset.description_en, "en"));
  }

  if (isEmpty(dataset.iri)) {
    dataset.iri = "_:ds";
  }
  const output = {
    "@id": dataset.iri,
    "@type": [DCATAP.Dataset, NKOD.Formular],
    [DCTERMS.title]: titles,
    [DCTERMS.description]: descriptions,
  };

  if (distributions.length > 0) {
    output[DCATAP.distribution] =
      distributions.map(
        (distribution) => exportDistribution(distribution, dataset.iri));
  }

  const keywords = [
    ...dataset.keywords_cs.map(str => ({
      "@language": "cs",
      "@value": str,
    })),
    ...dataset.keywords_en.map(str => ({
      "@language": "en",
      "@value": str,
    })),
  ];
  if (keywords.length > 0) {
    output[DCATAP.keyword] = keywords;
  }

  if (isNotEmpty(dataset.accrual_periodicity)) {
    const url = dataset.accrual_periodicity;
    output[DCTERMS.accrualPeriodicity] = asIri(url);
  }
  if (dataset.spatial.length > 0) {
    output[DCTERMS.spatial] = dataset.spatial.map(
      (spatial) => ({"@id": spatial.url}));
  }
  if (isNotEmpty(dataset.documentation)) {
    output[FOAF.page] = asIri(dataset.documentation);
  }

  const themes = [
    ...dataset.dataset_themes,
    ...dataset.themes,
    ...dataset.dataset_custom_themes,
  ];
  output[DCATAP.theme] = themes.map((t) => asIri(t));

  if (dataset.ofn.length > 0) {
    output[DCTERMS.conformsTo] = dataset.ofn.map((t) => asIri(t));
  }

  const temporal = exportTemporal(dataset);
  if (isNotEmpty(temporal)) {
    output[DCTERMS.temporal] = temporal;
  }

  if (isNotEmpty(dataset.temporal_resolution)) {
    output[DCATAP.temporalResolution] = {
      "@value": dataset.temporal_resolution,
      "@type": "http://www.w3.org/2001/XMLSchema#duration",
    };
  }

  if (isNotEmpty(dataset.spatial_resolution_meters)) {
    output[DCATAP.spatialResolutionInMeters] =
      asXsdDecimal(dataset.spatial_resolution_meters);
  }

  const contactPoint = exportContactPoint(dataset);
  if (isNotEmpty(contactPoint)) {
    output[DCATAP.contactPoint] = contactPoint;
  }
  return output;
}

function isNotEmpty(value) {
  return !isEmpty(value);
}

function isEmpty(value) {
  return value === undefined || value === null || value === "";
}

function asLangString(value, lang) {
  return {
    "@language": lang,
    "@value": value,
  };
}

function asIri(value) {
  return {
    "@id": value,
  };
}

function asXsdDecimal(value) {
  return {
    "@value": value,
    "@type": "http://www.w3.org/2001/XMLSchema#decimal",
  };
}

function exportTemporal(dataset) {
  if (!containsValidDate(dataset.temporal_start) &&
    !containsValidDate(dataset.temporal_end)) {
    return undefined;
  }
  const output = {
    "@type": [DCTERMS.PeriodOfTime],
  };
  if (containsValidDate(dataset.temporal_start)) {
    output[DCATAP.startDate] = {
      "@type": "http://www.w3.org/2001/XMLSchema#date",
      "@value": dataset.temporal_start,
    };
  }
  if (containsValidDate(dataset.temporal_end)) {
    output[DCATAP.endDate] = {
      "@type": "http://www.w3.org/2001/XMLSchema#date",
      "@value": dataset.temporal_end,
    };
  }
  return output;
}

function containsValidDate(value) {
  return isNotEmpty(value);
}

function exportContactPoint(dataset) {
  const output = {
    "@type": [VCARD.Organization],
  };
  if (isEmpty(dataset.contact_point_name) &&
    isEmpty(dataset.contact_point_email)) {
    return undefined;
  }
  if (isNotEmpty(dataset.contact_point_name)) {
    output[VCARD.fn] = asLangString(dataset.contact_point_name, "cs");
  }
  if (isNotEmpty(dataset.contact_point_email)) {
    output[VCARD.hasEmail] = dataset.contact_point_email;
  }
  return output;
}

function exportDistribution(distribution, datasetIri) {

  const result = {
    "@type": DCATAP.Distribution,
  };

  let titles = [];
  if (isNotEmpty(distribution.title_cs)) {
    titles.push(asLangString(distribution.title_cs, "cs"));
  }
  if (isNotEmpty(distribution.title_en)) {
    titles.push(asLangString(distribution.title_en, "en"));
  }
  if (titles.length > 0) {
    result[DCTERMS.title] = titles;
  }

  if (distribution.type === DIST_TYPE_FILE) {
    result[DCATAP.downloadURL] = asIri(distribution.url);

    if (isNotEmpty(distribution.media_type)) {
      result[DCATAP.mediaType] = asIri(distribution.media_type);
    }

    if (isNotEmpty(distribution.format)) {
      result[DCTERMS.format] = asIri(distribution.format);
    }

    if (isNotEmpty(distribution.schema)) {
      result[DCTERMS.conformsTo] = asIri(distribution.schema);
    }

    if (isNotEmpty(distribution.packageFormat)) {
      result[DCATAP.packageFormat] = asIri(distribution.packageFormat);
    }

    if (isNotEmpty(distribution.compressFormat)) {
      result[DCATAP.compressFormat] = asIri(distribution.compressFormat);
    }
  } else if (distribution.type === DIST_TYPE_SERVICE) {
    result[DCATAP.accessURL] = asIri(distribution.service_endpoint_url);
    result[DCATAP.accessService] = {
      "@type": DCATAP.DataService,
      [DCATAP.endpointURL]: asIri(distribution.service_endpoint_url),
      [DCATAP.endpointDescription]: asIri(distribution.service_description),
    };
    if (titles.length > 0) {
      result[DCATAP.accessService][DCTERMS.title] = titles;
    }
    if (isNotEmpty(datasetIri)) {
      result[DCATAP.accessService][DCATAP.servesDataset] = asIri(datasetIri);
    }
  } else {
    console.error("Distribution must be either FILE or SERVICE.", distribution);
  }
  result[PU.specifikace] = exportLicense(distribution);
  return result;
}

function exportLicense(distribution) {
  const result = {
    "@type": PU.Specifikace,
  };

  switch (distribution.license_author_type) {
  case "MULTI":
    result[PU.autorskeDilo] = asIri(PU.obsahujeViceAutorskychDel);
    break;
  case "CC BY":
    result[PU.autorskeDilo] = asIri(CREATIVE_COMMONS.BY_40);
    result[PU.autor] = asLangString(distribution.license_author_name, "cs");
    break;
  case "NO":
    result[PU.autorskeDilo] = asIri(PU.neobsahujeAutorskaDila);
    break;
  case "CUSTOM":
    result[PU.autorskeDilo] = asIri(distribution.license_author_custom);
    break;
  default:
    console.error("Unexpected license_author_type value:",
      distribution.license_author_type);
    break;
  }

  switch (distribution.license_db_type) {
  case "CC BY":
    result[PU.databazeJakoAutorskeDilo] = asIri(CREATIVE_COMMONS.BY_40);
    result[PU.autorDatabaze] = asLangString(distribution.license_db_name, "cs");
    break;
  case "NO":
    result[PU.databazeJakoAutorskeDilo] =
      asIri(PU.neniAutorskopravneChranenouDatabazi);
    break;
  case "CUSTOM":
    result[PU.databazeJakoAutorskeDilo] =
      asIri(distribution.license_db_custom);
    break;
  default:
    console.error("Unexpected license_db_type value:",
      distribution.license_db_type);
    break;
  }

  switch (distribution.license_specialdb_type) {
  case "CC0":
    result[PU.databazeChranenaZvlastnimiPravy] =
      asIri(CREATIVE_COMMONS.PUBLIC_ZERO_10);
    break;
  case "NO":
    result[PU.databazeChranenaZvlastnimiPravy] =
      asIri(PU.neniChranenazvlastnimPravemPorizovateleDatabaze);
    break;
  case "CUSTOM":
    result[PU.databazeChranenaZvlastnimiPravy] =
      asIri(distribution.license_specialdb_custom);
    break;
  default:
    console.error("Unexpected license_specialdb_type value:",
      distribution.license_specialdb_type);
    break;
  }

  switch (distribution.license_personal_type) {
  case "YES":
    result[PU.osobniUdaje] = asIri(PU.obsahujeOsobniUdaje);
    break;
  case "NO":
    result[PU.osobniUdaje] = asIri(PU.neobsahujeOsobniUdaje);
    break;
  default:
    console.error("Unexpected license_personal_type value:",
      distribution.license_personal_type);
    break;
  }

  return result;
}