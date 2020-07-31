import {
  EXPORT_NKOD, EXPORT_EDIT, EXPORT_LKOD,
  createDataset,
} from "../dataset-model";
import {
  importDatasetFromUrl,
  importDatasetFromUrlWithProxy,
} from "../import-dataset-from-url";
import {importFromJsonLd} from "../import-dataset";
import {
  exportDatasetToJsonLdForLocal,
  exportDatasetToJsonLdForNational,
  exportDatasetToJsonLd,
} from "../export-dataset";
import {downloadAsJsonLd} from "../../app-service/download";

export function postOnSubmit($route) {
  const url = getReturnUrl($route);
  return url !== undefined && url !== null && url.length > 0;
}

function getReturnUrl($route) {
  return $route.query.returnUrl;
}

export async function onDatasetEditMounted(
  importUrl, datasetUrl, language, copyMode) {
  if (importUrl) {
    return await importFromUrl(importUrl, language);
  } else if (datasetUrl) {
    return await importDataset(datasetUrl, language, copyMode);
  } else if (window.serverPostData && window.serverPostData.formData) {
    return await importFromPostData(language);
  } else {
    return createNewDataset();
  }
}

async function importFromUrl(url, language) {
  const data = await importDatasetFromUrl(url, language);
  return {
    "exportOptions": {
      "type": EXPORT_NKOD,
      "editIri": "",
      "allowImport": true,
      "allowEdit": false,
    },
    "dataset": data.dataset,
    "distributions": data.distributions,
  };
}

async function importDataset(url, language, copyMode) {
  const data = importDatasetFromUrlWithProxy(url, language);
  const exportOptions = {
    "allowImport": false,
    "allowEdit": true,
  };
  if (copyMode) {
    exportOptions.type = EXPORT_NKOD;
    exportOptions.editIri = "";
  } else {
    exportOptions.type = EXPORT_EDIT;
    exportOptions.editIri = url;
  }
  return {
    "exportOptions": exportOptions,
    "dataset": data.dataset,
    "distributions": data.distributions,
  };
}

async function importFromPostData(language) {
  const data = await importFromJsonLd(window.serverPostData.formData, language);
  return {
    "exportOptions": {
      "type": EXPORT_LKOD,
      "editIri": data.dataset.iri,
      "allowImport": false,
      "allowEdit": false,
    },
    "dataset": data.dataset,
    "distributions": data.distributions,
  };
}

function createNewDataset() {
  return {
    "exportOptions": {
      "type": EXPORT_NKOD,
      "editIri": "",
      "allowImport": true,
      "allowEdit": false,
    },
    "dataset": createDataset(),
    "distributions": [],
  };
}

export async function submitDatasetEdit(dataset, distributions, $route) {

  const form = document.createElement("form");
  document.body.appendChild(form);
  form.method = "post";
  form.action = getReturnUrl($route);

  const formData = exportDatasetToJsonLd(dataset, distributions);
  const formDataInput = document.createElement("input");
  formDataInput.type = "hidden";
  formDataInput.name = "formData";
  formDataInput.value = JSON.stringify(formData);
  form.appendChild(formDataInput);

  const userData = getUserData();
  if (userData) {
    const userDataInput = document.createElement("input");
    userDataInput.type = "hidden";
    userDataInput.name = "userData";
    userDataInput.value = JSON.stringify(userData);
    form.appendChild(userDataInput);
  }

  form.submit();

  // try {
  //   const response = await axios.post(url, {
  //     "formData": jsonld,
  //
  //   });
  //   if (response.status >= 300 && response.status <= 399
  //     && response.headers["location"]) {
  //     window.location.href = response.headers["location"];
  //   }
  // } catch (ex) {
  //   // TODO Show error notification.
  //   console.error("Can't POST data", ex);
  // }
}

function getUserData() {
  if (window.serverPostData && window.serverPostData.userData) {
    return window.serverPostData.userData;
  }
  return undefined;
}


export function downloadDatasetEdit(dataset, distributions, exportOptions) {
  const fileName = getDatasetEditDownloadFileName(dataset, exportOptions.type);
  let content;
  if (isExportForNkod(dataset, exportOptions.type)) {
    content = exportDatasetToJsonLdForNational(dataset, distributions);
  } else {
    content = exportDatasetToJsonLdForLocal(dataset, distributions);
  }
  downloadAsJsonLd(fileName, content);
}

export function getDatasetEditDownloadFileName(dataset, exportType) {
  const exportNkod = isExportForNkod(dataset, exportType);
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
    .replace(/[/?<>\\:*|"]/g, replacement)
    /* eslint-disable no-control-regex */
    .replace(/[\x00-\x1f\x80-\x9f]/g, replacement)
    .replace(/^\.+$/, replacement)
    .replace(/^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\..*)?$/i, replacement)
    .replace(/[. ]+$/, replacement);
  if (result.length > 255) {
    result = result.substring(0, 255);
  }
  return result;
}

export function isExportForNkod(dataset, exportType) {
  return exportType === EXPORT_NKOD ||
    (exportType === EXPORT_EDIT &&
      (!dataset.iri || dataset.iri.startsWith("https://data.gov.cz")));
}

