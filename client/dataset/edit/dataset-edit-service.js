import {
  EXPORT_NKOD, EXPORT_EDIT, EXPORT_LKOD,
  createDataset,
} from "../dataset-model";
import {
  fetchCodelistLabels,
  importDatasetFromUrl,
  importDatasetFromUrlWithProxy,
} from "../import-dataset-from-url";
import {importFromJsonLd} from "../import-dataset";
import {
  exportDatasetForLkod,
  exportDatasetForNkod,
  exportDatasetForPost,
} from "./export-dataset-edit";
import {downloadAsJsonLd} from "../../app-service/download";
import {createDistribution, isDistributionValid} from "../distribution-model";

export function onRouteChange(component, location) {
  if (location.query.krok === undefined) {
    component.step = 1;
  }
  if (parseInt(location.query.krok) !== component.step) {
    component.step = location.query.krok;
  }
}

export async function onDatasetEditMounted(component) {
  try {
    const result = await loadDataset(
      component.$route.query.url,
      component.$route.query.dataset,
      component.$vuetify.lang.current,
      isCopyMode(component.$route)
    );
    component.exportOptions = {
      ...component.exportOptions,
      ...result.exportOptions,
      "postData": isPostOnSubmit(component.$route),
    };
    setData(component, result.dataset, result.distributions);
    document.title = component.$t(getPageTitle(
      component.data.dataset, component.exportOptions.type));
    initializeStep(component);
    component.data.status = "ready";
  } catch (ex) {
    console.error("Can't import dataset.", ex);
    component.data.status = "error";
  }
}

function isCopyMode($route) {
  return $route.query.kopie !== undefined;
}

export function isPostOnSubmit($route) {
  const url = getReturnUrl($route);
  return url !== undefined && url !== null && url.length > 0;
}

async function loadDataset(importUrl, datasetUrl, language, copyMode) {
  const serverFormData = getFormData();
  if (importUrl) {
    return await importFromUrl(importUrl, language);
  } else if (datasetUrl) {
    return await importFromDataset(datasetUrl, language, copyMode);
  } else if (serverFormData) {
    return await importFromPostData(language, serverFormData);
  } else {
    return importNew();
  }
}

function getFormData() {
  if (window.serverPostData && window.serverPostData.formData) {
    return window.serverPostData.formData;
  }
  return undefined;
}

async function importFromUrl(url, language) {
  const data = await importDatasetFromUrl(url, language);
  return {
    "exportOptions": {
      "type": EXPORT_NKOD,
      "allowImport": true,
      "allowEdit": false,
    },
    "dataset": data.dataset,
    "distributions": data.distributions,
  };
}

async function importFromDataset(url, language, copyMode) {
  const data = await importDatasetFromUrlWithProxy(url, language);
  const exportOptions = {
    "allowImport": false,
    "allowEdit": true,
  };
  // For copy mode we create a new dataset.
  exportOptions.type = copyMode ? EXPORT_NKOD : EXPORT_EDIT;
  return {
    "exportOptions": exportOptions,
    "dataset": data.dataset,
    "distributions": data.distributions,
  };
}

async function importFromPostData(language, serverFormData) {
  const data = await importFromJsonLd(serverFormData, language);
  return {
    "exportOptions": {
      "type": EXPORT_LKOD,
      "allowImport": false,
      "allowEdit": false,
    },
    "dataset": data.dataset,
    "distributions": data.distributions,
  };
}

function importNew() {
  return {
    "exportOptions": {
      "type": EXPORT_NKOD,
      "allowImport": true,
      "allowEdit": false,
    },
    "dataset": createDataset(),
    "distributions": [],
  };
}

function setData(component, dataset, distributions) {
  component.data.dataset = dataset;
  component.data.distributions = distributions;
  component.ui.distribution = 0;
  // We need at least one distribution.
  if (component.data.distributions.length === 0) {
    component.data.distributions.push(createDistribution());
  }
  component.exportOptions.publisher = component.data.dataset.publisher;
  component.exportOptions.lkodIri = component.data.dataset.iri;
  fetchCodelistLabels(dataset, distributions, component.$vuetify.lang.current);
}

function getPageTitle(dataset, exportType) {
  const iri = dataset.iri;
  switch (exportType) {
  case EXPORT_NKOD:
    return "edit_page_title_new";
  case EXPORT_EDIT:
    if (!iri || iri.startsWith("https://data.gov.cz")) {
      return  "edit_page_title_nkod";
    } else {
      return "edit_page_title_lkod";
    }
  case EXPORT_LKOD:
    return "edit_page_title_new_lkod";
  }
}

function initializeStep(component) {
  if(component.$route.query.krok) {
    const step = parseInt(component.$route.query.krok, 10);
    component.ui.step = step;
    onStepperInput(component, step);
  }
}

export function onStepperInput(component, value) {
  component.ui.step = value;
  if (!component.validation.dataset && value > 1) {
    component.validation.dataset = true;
    component.data.dataset.$validators.force = true;
  }
  if (value > 2) {
    if (!component.validation.distributions) {
      component.validation.distributions = true;
    }
    // We need to update distributions validations every time, as
    // user may moved back from the summary view to the distribution view
    // and add new distribution.
    component.data.distributions.forEach((distribution) => {
      distribution.$validators.force = true;
    });
  }
  if (parseInt(component.$route.query.krok) !== value) {
    component.$router.push({
      "query": {
        ...component.$route.query,
        "krok": value,
      },
    });
  }
}

export function areDistributionsValid(component) {
  if (!component.validation.distributions) {
    return true;
  }
  for (let distribution of component.data.distributions) {
    if (!distribution.$validators.force) {
      // Newly added distribution. User does not
      // visited last step after adding this one, so we ignore it.
      continue;
    }
    if (!isDistributionValid(distribution)) {
      return false;
    }
  }
  return true;
}

export function onAddDistribution(component) {
  component.data.distributions = [
    ...component.data.distributions,
    createDistribution(),
  ];
  component.ui.distribution = component.data.distributions.length - 1;
}

export function onDeleteDistribution(component) {
  const index = component.ui.distribution;
  component.data.distributions = [
    ...component.data.distributions.slice(0, index),
    ...component.data.distributions.slice(index + 1),
  ];
  component.ui.distribution = Math.min(
    component.ui.distribution,
    component.data.distributions.length - 1);
}

export async function onLoadFromFile(component, file) {
  try {
    const content = await loadFile(file);
    const data = await importFromJsonLd(
      content, component.$vuetify.lang.current);
    setData(component, data.dataset, data.distributions);
  } catch(error) {
    console.error("Can't import file.", error);
    component.ui.uploadFailedVisible = true;
  }
}

function loadFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const content = JSON.parse(reader.result);
        resolve(content);
      } catch(ex) {
        reject(ex);
      }
    };
    reader.readAsText(file);
  });
}

export async function onLoadFromUrl(component, url) {
  try {
    const data = await importDatasetFromUrl(
      url, component.$vuetify.lang.current);
    setData(component, data.dataset, data.distributions);
  } catch(error) {
    console.error("Can't import url.", error);
    component.ui.uploadFailedVisible = true;
  }
}

export function onUpdateExport(component, event) {
  component.exportOptions = {
    ...component.exportOptions,
    ...event,
  };
  document.title = component.$t(getPageTitle(
    component.data.dataset, component.exportOptions.type));
}

function getReturnUrl($route) {
  return $route.query.returnUrl;
}

export async function submitDatasetEdit(dataset, distributions, $route) {

  const form = document.createElement("form");
  document.body.appendChild(form);
  form.method = "post";
  form.action = getReturnUrl($route);

  const formData = exportDatasetForPost(dataset, distributions);

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
  if (exportOptions.type === EXPORT_NKOD) {
    content = exportDatasetForNkod(dataset, distributions);
  } else {
    content = exportDatasetForLkod(
      dataset, distributions, {
        "lkodIri": exportOptions.lkodIri,
        "publisher": exportOptions.publisher,
      });
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

