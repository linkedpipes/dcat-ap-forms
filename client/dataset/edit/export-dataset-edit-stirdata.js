import {DIST_TYPE_FILE, DIST_TYPE_SERVICE} from "../distribution-model";
import {
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_RUIAN,
  SPATIAL_URL,
} from "../dataset-model";
import {
  DCATAP,
  DCTERMS,
  FOAF,
  VCARD,
} from "../../app-service/vocabulary";

export function exportDatasetForStirData(dataset, distributions) {
  // Generate new IRIs.
  let selectDistributionIri =
    (dist, distIndex) => dataset.iri + "/distribution/" + distIndex;
  let selectServiceIri =
    (dist, distIri) => distIri + "/data-service";

  return exportDatasetToJsonLd(
    dataset, distributions, selectDistributionIri, selectServiceIri);
}

function exportDatasetToJsonLd(
  dataset, distributions, selectDistributionIri, selectServiceIri) {
  const output = {
    "@id": dataset.iri,
    "@type": DCATAP.Dataset,
    [DCTERMS.title]: asStringWithLang(
      dataset.title_cs, dataset.title_en,
      dataset.language),
    [DCTERMS.description]: asStringWithLang(
      dataset.description_cs, dataset.description_en,
      dataset.language),
    ...exportSpatial(dataset),
    ...exportTemporal(dataset),
  };

  output[DCATAP.keyword] = [
    ...dataset.keywords_cs.map((value) => ({
      "@language": "en",
      "@value": value,
    })),
    ...dataset.keywords_en.map((value) => ({
      "@language": dataset.language,
      "@value": value,
    })),
  ];

  if (isNotEmpty(dataset.accrual_periodicity)) {
    output[DCTERMS.accrualPeriodicity] = updateIri(dataset.accrual_periodicity);
  }

  if (isNotEmpty(dataset.documentation)) {
    output[FOAF.page] = dataset.documentation;
  }

  output[DCATAP.theme] = [
    ...updateIris(dataset.dataset_themes),
    ...updateIris(dataset.themes),
    ...updateIris(dataset.dataset_custom_themes),
  ];

  if (isNotEmpty(dataset.temporal_resolution)) {
    output[DCATAP.temporalResolution] = updateIri(dataset.temporal_resolution);
  }

  if (isNotEmpty(dataset.spatial_resolution_meters)) {
    output[DCATAP.spatialResolutionInMeters] =
      dataset.spatial_resolution_meters;
  }

  const contactPoint = exportContactPoint(dataset);
  if (isNotEmpty(contactPoint)) {
    output[DCATAP.contactPoint] = contactPoint;
  }

  if (isNotEmpty(dataset.publisher)) {
    output[DCTERMS.publisher] = updateIri(dataset.publisher);
  }

  output[DCATAP.distribution] = distributions.map(
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

function asStringWithLang(value_primary_en, value_other, language) {
  const result = [];
  if (isNotEmpty(value_primary_en)) {
    result.push({
      "@value": value_primary_en,
      "@language": "en",
    });
  }
  if (isNotEmpty(value_other)) {
    result.push({
      "@value": value_other,
      "@language": language,
    });
  }
  return result.length > 0 ? result : undefined;
}

function exportSpatial(dataset) {
  const ruian = [];
  const geo_area = [];
  const custom = [];

  dataset.spatial.map((spatial) => {
    const url = updateIri(spatial.url);
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
  return {
    [DCTERMS.spatial]: [
      ...ruian,
      ...geo_area,
      ...custom,
    ],
  };
}

function updateIris(iris) {
  return iris.map(updateIri);
}

function updateIri(iri) {
  return {"@id": iri};
}

function exportTemporal(dataset) {
  if (!containsValidDate(dataset.temporal_start) &&
    !containsValidDate(dataset.temporal_end)) {
    return {};
  }
  const output = {
    "@type": DCTERMS.PeriodOfTime,
  };
  if (containsValidDate(dataset.temporal_start)) {
    output[DCATAP.startDate] = dataset.temporal_start;
  }
  if (containsValidDate(dataset.temporal_end)) {
    output[DCATAP.endDate] = dataset.temporal_end;
  }
  return {
    [DCTERMS.temporal]: output,
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
    "@type": VCARD.Organization,
  };
  if (isNotEmpty(catalog.contact_point_name)) {
    output[VCARD.fn] = asStringWithLang(catalog.contact_point_name);
  }
  if (isNotEmpty(catalog.contact_point_email)) {
    output[VCARD.hasEmail] = updateIri("mailto:" + catalog.contact_point_email);
  }
  return output;
}

function exportDistribution(
  dataset, distribution, distributionIndex,
  selectDistributionIri, selectServiceIri) {

  const result = {
    "@type": DCATAP.Distribution,
  };

  const iri = selectDistributionIri(distribution, distributionIndex);
  if (isNotEmpty(iri)) {
    result["@id"] = iri;
  }

  let title = asStringWithLang(
    distribution.title_cs, distribution.title_en,
    dataset.language);
  if (title !== undefined) {
    result[DCTERMS.title] = title;
  }

  if (isNotEmpty(distribution.license_dcatap)) {
    result[DCTERMS.license] = distribution.license_dcatap;
  }

  if (distribution.type === DIST_TYPE_FILE) {
    addDistributionFile(distribution, result);
  } else if (distribution.type === DIST_TYPE_SERVICE) {
    addDistributionService(dataset.iri, distribution, selectServiceIri, result);
  } else {
    console.error("Distribution must be either FILE or SERVICE.", distribution);
  }

  return result;
}

function addDistributionFile(distribution, result) {
  result[DCATAP.downloadURL] = distribution.url;
  result[DCATAP.accessURL] = distribution.url;

  if (isNotEmpty(distribution.media_type)) {
    result[DCATAP.mediaType] = updateIri(distribution.media_type);
  }

  if (isNotEmpty(distribution.format)) {
    result[DCTERMS.format] = updateIri(distribution.format);
  }

  if (isNotEmpty(distribution.schema)) {
    result[DCTERMS.conformsTo] = updateIri(distribution.schema);
  }

  if (isNotEmpty(distribution.package_format)) {
    result[DCATAP.packageFormat] = updateIri(distribution.package_format);
  }

  if (isNotEmpty(distribution.compress_format)) {
    result[DCATAP.compressFormat] = updateIri(distribution.compress_format);
  }

}

function addDistributionService(
  datasetIri, distribution, selectServiceIri, result
) {
  result[DCATAP.accessURL] = updateIri(distribution.service_endpoint_url);
  result[DCATAP.accessService] = {
    "@type": DCATAP.DataService,
    [DCATAP.endpointURL]: updateIri(distribution.service_endpoint_url),
    [DCATAP.endpointDescription]: updateIri(distribution.service_description),
  };

  const iri = selectServiceIri(distribution, result["@id"]);
  if (isNotEmpty(iri)) {
    result[DCATAP.accessService]["@id"] = iri;
  }

  const title = result[DCTERMS.title];
  if (title !== undefined) {
    result[DCATAP.accessService][DCTERMS.title] = title;
  }

  if (isNotEmpty(datasetIri)) {
    result[DCATAP.accessService][DCATAP.servesDataset] =
      updateIri(datasetIri);
  }

  if (isNotEmpty(distribution.service_conforms_to)) {
    result[DCATAP.accessService][DCTERMS.conformsTo] =
      updateIri(distribution.service_conforms_to);
  }
}
