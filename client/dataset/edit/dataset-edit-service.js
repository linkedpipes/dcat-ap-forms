import {EXPORT_NKOD, EXPORT_EDIT} from "../dataset-model";

export function getDatasetEditDownloadFile(dataset, exportType) {
  const exportNkod = exportType === EXPORT_NKOD ||
    (exportType === EXPORT_EDIT &&
      (!dataset.iri || dataset.iri.startsWith("https://data.gov.cz")));
  if (exportNkod) {
    return "nkod-registrace.jsonld.txt";
  } else {
    const title = dataset.title_cs;
    return sanitizeTitleAsFileName(title) + ".jsonld";
  }
}

function sanitizeTitleAsFileName(title) {
  // Based on
  // https://github.com/parshap/node-sanitize-filename/blob/master/index.js
  const replacement = " ";
  let result = title
    .replace(/[\/\?<>\\:\*\|"]/g, replacement)
    .replace(/[\x00-\x1f\x80-\x9f]/g, replacement)
    .replace(/^\.+$/, replacement)
    .replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, replacement)
    .replace(/[\. ]+$/, replacement);
  if (result.length > 255) {
    result = result.substring(0, 255);
  }
  return result;
}
