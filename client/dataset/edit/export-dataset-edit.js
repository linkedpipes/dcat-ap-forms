import {
  DCTERMS,
  DCATAP,
  FOAF,
  VCARD,
  SCHEMA,
  PU,
  CREATIVE_COMMONS,
  NKOD
} from "@/app-service/vocabulary";

export function exportToJsonLd(dataset, distributions) {
  var titles = [asNamedLangString(dataset.title_cs, "cs")];
  if (isNotEmpty(dataset.title_en)) titles.push(asNamedLangString(dataset.title_en, "en"));

  var descriptions = [asNamedLangString(dataset.description_cs, "cs")];
  if (isNotEmpty(dataset.description_en)) descriptions.push(asNamedLangString(dataset.description_en, "en"));

  if (isEmpty(dataset.iri)) dataset.iri = "_:ds";
  const output = {
    "@id": dataset.iri,
    "@type": [DCATAP.Dataset, NKOD.Formular],
    [DCTERMS.title]: titles,
    [DCTERMS.description]: descriptions
  };

  if (distributions.length > 0) {
    output[DCATAP.distribution] = distributions.map((distribution) => exportDistribution(distribution, dataset.iri))
  }

  if (dataset.keywords.length > 0) {
    output[DCATAP.keyword] = dataset.keywords.map(function(keyword){
      var keywords = [asNamedLangString(keyword.cs, "cs")];
      if (isNotEmpty(keyword.en)) keywords.push(asNamedLangString(keyword.en, "en"));
      return keywords
    })
  }

  if (isNotEmpty(dataset.accrual_periodicity)) {
    const url = dataset.accrual_periodicity;
    output[DCTERMS.accrualPeriodicity] = asIri(url);
  }
  if (dataset.spatial.length > 0) {
    output[DCTERMS.spatial] = dataset.spatial.map(
      (spatial) => exportSpatial(spatial)
    )
  }
  if (isNotEmpty(dataset.documentation)) {
    output[FOAF.page] = asIri(dataset.documentation);
  }

  const themes = [...dataset.dataset_themes, ...dataset.themes, ...dataset.dataset_custom_themes];
  output[DCATAP.theme] = themes.map((t) => asIri(t));

  if (dataset.ofn.length > 0) output[DCTERMS.conformsTo] = dataset.ofn.map((t) => asIri(t));

  const temporal = exportTemporal(dataset);
  if (isNotEmpty(temporal)) {
    output[DCTERMS.temporal] = temporal;
  }

  if (isNotEmpty(dataset.temporal_resolution)) {
    output[DCATAP.temporalResolution] = {
      "@value": dataset.temporal_resolution ,
      "@type": "http://www.w3.org/2001/XMLSchema#duration"
    };
  }

  if (isNotEmpty(dataset.spatial_resolution_meters)) {
    output[DCATAP.spatialResolutionInMeters] = asValue(dataset.spatial_resolution_meters);
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

function asLangString(value) {
  return {
    "@language": "cs",
    "@value": value
  }
}

function asNamedLangString(value, lang) {
  return {
    "@language": lang,
    "@value": value
  }
}

function asIri(value) {
  return {
    "@id": value
  }
}

function asValue(value) {
  return {
    "@value": value
  }
}

function exportTemporal(dataset) {
  if (!containsValidDate(dataset.temporal_start) &&
        !containsValidDate(dataset.temporal_end)) {
    return undefined;
  }
  const output = {
    "@type": [DCTERMS.PeriodOfTime]
  };
  if (containsValidDate(dataset.temporal_start)) {
    output[DCATAP.startDate] = {
      "@type": "http://www.w3.org/2001/XMLSchema#date",
      "@value": dataset.temporal_start
    };
  }
  if (containsValidDate(dataset.temporal_end)) {
    output[DCATAP.endDate] = {
      "@type": "http://www.w3.org/2001/XMLSchema#date",
      "@value": dataset.temporal_end
    };
  }
  return output;
}

function containsValidDate(value) {
  return isNotEmpty(value);
}

function exportContactPoint(dataset) {
  const output = {
    "@type": [VCARD.Organization]
  };
  if (isEmpty(dataset.contact_point_name) &&
      isEmpty(dataset.contact_point_email)) {
    return undefined;
  }
  if (isNotEmpty(dataset.contact_point_name)) {
    output[VCARD.fn] = asLangString(dataset.contact_point_name);
  }
  if (isNotEmpty(dataset.contact_point_email)) {
    output[VCARD.hasEmail] = dataset.contact_point_email;
  }
  return output;
}

function exportDistribution(distribution, datasetIri) {

  const output = {
    "@type": DCATAP.Distribution
  }

  var titles = []
  if (isNotEmpty(distribution.title_cs)) {
    titles.push(asNamedLangString(distribution.title_cs, "cs"));
  }
  if (isNotEmpty(distribution.title_en)) {
    titles.push(asNamedLangString(distribution.title_en, "en"));
  }
  if (titles.length > 0) output[DCTERMS.title] = titles;

  if (distribution.isFileOrService === "FILE") {
    output[DCATAP.downloadURL] = asIri(distribution.url);
    output[DCATAP.mediaType] = asIri(distribution.media_type);
    output[DCTERMS.format] = asIri(distribution.format);

    if (isNotEmpty(distribution.schema)) {
      output[DCTERMS.conformsTo] = asIri(distribution.schema);
    }

    if (isNotEmpty(distribution.packageFormat)) {
      output[DCATAP.packageFormat] = asIri(distribution.packageFormat)
    }

    if (isNotEmpty(distribution.compressFormat)) {
      output[DCATAP.compressFormat] = asIri(distribution.compressFormat)
    }
  }
  else if (distribution.isFileOrService === "SERVICE") {
    output[DCATAP.accessURL] = asIri(distribution.service_endpoint_url);
    output[DCATAP.accessService] = {
      "@type": DCATAP.DataService,
      [DCATAP.endpointURL]: asIri(distribution.service_endpoint_url),
      [DCATAP.endpointDescription]: asIri(distribution.service_description)
    }
    if (titles.length > 0) output[DCATAP.accessService][DCTERMS.title] = titles;
    if (isNotEmpty(datasetIri)) {
      output[DCATAP.accessService][DCATAP.servesDataset] = asIri(datasetIri);
    }
  } else {
    console.log("Oopsie");
    console.log(distribution.service_endpoint_url);
    console.log(distribution.isFileOrService);
  }

  output[PU.specifikace] = license(distribution);




  return output;
}

function exportSpatial(spatial) {
  if (spatial.type === "RUIAN") {
    return asIri(spatial.ruian)
  } else {
    return asIri(spatial.url)
  }
}

function license(distribution) {
  const output = {
    "@type": PU.Specifikace
  };

  switch (distribution.license_author_type) {
  case "MULTI":
    output[PU.autorskeDilo] = asIri(PU.obsahujeViceAutorskychDel);
    break;
  case "CC BY":
    output[PU.autorskeDilo] = asIri(CREATIVE_COMMONS.BY_40);
    output[PU.autor] = asLangString(distribution.license_author_name);
    break;
  case "NO":
    output[PU.autorskeDilo] = asIri(PU.neobsahujeAutorskaDila);
    break;
  case "CUSTOM":
    output[PU.autorskeDilo] = asIri(distribution.license_author_custom);
    break;
  default:
    console.error("Unexpected license_author_type value:",
      distribution.license_author_type);
    break;
  }

  switch (distribution.license_db_type) {
  case "CC BY":
    output[PU.databazeJakoAutorskeDilo] = asIri(CREATIVE_COMMONS.BY_40);
    output[PU.autorDatabaze] = asLangString(distribution.license_db_name);
    break;
  case "NO":
    output[PU.databazeJakoAutorskeDilo] =
                asIri(PU.neniAutorskopravneChranenouDatabazi);
    break;
  case "CUSTOM":
    output[PU.databazeJakoAutorskeDilo] =
                asIri(distribution.license_db_custom);
    break;
  default:
    console.error("Unexpected license_db_type value:",
      distribution.license_db_type);
    break;
  }

  switch (distribution.license_specialdb_type) {
  case "CC0":
    output[PU.databazeChranenaZvlastnimiPravy] =
                asIri(CREATIVE_COMMONS.PUBLIC_ZERO_10);
    break;
  case "NO":
    output[PU.databazeChranenaZvlastnimiPravy] =
                asIri(PU.neniChranenazvlastnimPravemPorizovateleDatabaze);
    break;
  case "CUSTOM":
    output[PU.databazeChranenaZvlastnimiPravy] =
                asIri(distribution.license_specialdb_custom);
    break;
  default:
    console.error("Unexpected license_specialdb_type value:",
      distribution.license_specialdb_type);
    break;
  }

  switch (distribution.license_personal_type) {
  case "YES":
    output[PU.osobniUdaje] = asIri(PU.obsahujeOsobniUdaje);
    break;
  case "NO":
    output[PU.osobniUdaje] = asIri(PU.neobsahujeOsobniUdaje);
    break;
  default:
    console.error("Unexpected license_personal_type value:",
      distribution.license_personal_type);
    break;
  }

  return output;
}
