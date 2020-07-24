import {importFromJsonLd} from "../import-dataset";
import {importDatasetFromUrlWithProxy} from "../import-dataset-from-url";
import {exportDatasetToJsonLdForDelete} from "../export-dataset";
import {downloadAsJsonLd} from "../../app-service/download";
import axios from "axios";

export async function onDatasetDeleteMounted(datasetUrl, language) {
  if (window.serverPostData && window.serverPostData.formData) {
    const data = await importFromJsonLd(
      window.serverPostData.formData, language);
    return data.dataset;
  }
  if (datasetUrl === undefined) {
    throw new Error("Missing dataset URL.");
  }
  const data = await importDatasetFromUrlWithProxy(datasetUrl, language);
  return data.dataset;
}

export function postOnSubmit($route) {
  const url = getReturnUrl($route);
  return url !== undefined && url !== null && url.length > 0;
}

function getReturnUrl($route) {
  return $route.query.returnUrl;
}

export async function submitDatasetDelete(dataset, $route) {
  const url = getReturnUrl($route);
  const jsonld = exportDatasetToJsonLdForDelete(dataset);
  try {
    await axios.post(url, {
      "formData": jsonld,
      "userData": getUserData(),
    });
  } catch (ex) {
    // TODO Show error notification.
    console.error("Can't POST data", ex);
  }
}

function getUserData() {
  if (window.serverPostData && window.serverPostData.userData) {
    return window.serverPostData.userData;
  }
  return undefined;
}

export function downloadDatasetDelete(dataset) {
  const jsonld = exportDatasetToJsonLdForDelete(dataset);
  downloadAsJsonLd(
    "nkod-odstranění-datové-sady.jsonld.txt", jsonld);
}
