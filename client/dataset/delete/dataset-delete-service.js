import {importFromJsonLd} from "../import-dataset";
import {importDatasetFromUrlWithProxy} from "../import-dataset-from-url";
import {exportDatasetToJsonLdForDelete} from "./export-dataset-delete";
import {downloadAsJsonLd} from "../../app-service/download";
import axios from "axios";

export async function onDatasetDeleteMounted(component) {
  document.title = component.$t("delete_page_title");
  await loadDataset(component);
}

async function loadDataset(component) {
  const serverFormData = getFormData();
  if (serverFormData !== undefined) {
    await loadDatasetFromServerData(component, serverFormData);
    return;
  }
  const datasetUrl = component.$route.query.dataset;
  if (datasetUrl === undefined) {
    console.error("Missing dataset URL.");
    component.status = "error";
    return;
  }
  try {
    const data = await importDatasetFromUrlWithProxy(
      component.$route.query.dataset,
      component.$vuetify.lang.current);
    component.dataset = data.dataset;
    component.status = "ready";
  } catch(ex) {
    console.error("Can't import dataset from URL.", ex);
    component.status = "error";
  }
}

function getFormData() {
  if (window.serverPostData && window.serverPostData.formData) {
    return window.serverPostData.formData;
  }
  return undefined;
}

async function loadDatasetFromServerData(component, serverFormData) {
  const language = component.$vuetify.lang.current;
  const data = await importFromJsonLd(serverFormData, language);
  component.dataset = data.dataset;
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
    const response = await axios.post(url, {
      "formData": jsonld,
      "userData": getUserData(),
    });
    if (response.status >= 300 && response.status <= 399
      && response.headers["location"]) {
      window.location.href = response.headers["location"];
    }
  } catch (error) {
    // TODO Show error notification.
    console.error("Can't POST data", error);
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
  downloadAsJsonLd("nkod-odstranění-datové-sady.jsonld.txt", jsonld);
}
