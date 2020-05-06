<template>
  <v-content v-if="data.status === 'ready'">
    <v-stepper
      :value="ui.step"
      @change="onStepperInput"
    >
      <v-stepper-header>
        <v-stepper-step
          :complete="ui.step > 1"
          :rules="[isDatasetValid]"
          :step="1"
          editable
        >
          {{ $t("step_dataset") }}
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :complete="ui.step > 2"
          :rules="[areDistributionsValid]"
          :step="2"
          editable
        >
          {{ $t("step_distribution") }}
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :step="3"
          editable
        >
          {{ $t("step_download") }}
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content :step="1">
          <app-dataset
            ref="datasetComponent"
            :dataset="data.dataset"
            :codelist="data.codelist"
            :distributions="data.distributions"
            :allow-import="exportOptions.allowImport"
            @load-from-file="loadFromFile"
            @load-from-url="loadFromUrl"
          />
        </v-stepper-content>
        <v-stepper-content :step="2">
          <app-distribution-selector
            v-model="ui.distribution"
            :distributions="data.distributions"
            @add="addDistribution"
          />
          <app-distribution
            ref="distributionComponent"
            :distribution="data.distributions[ui.distribution]"
            :can-be-deleted="data.distributions.length > 1"
            @delete="deleteDistribution"
          />
        </v-stepper-content>
        <v-stepper-content :step="3">
          <app-export-summary
            :dataset="data.dataset"
            :is-valid="isDatasetValid() && areDistributionsValid()"
            :distributions="data.distributions"
            :codelist="data.codelist"
            :export-options="exportOptions"
            @update-export="updateExport"
          />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <div class="hidden-md-and-up">
      <app-step-navigation-mobile
        :value="ui.step"
        @input="onStepperInput"
      />
    </div>
    <div class="hidden-sm-and-down">
      <app-step-navigation-desktop
        :value="ui.step"
        @input="onStepperInput"
      />
    </div>
    <app-upload-failed-dialog
      :visible="ui.uploadFailedVisible"
      @close="uploadFailedClose"
    />
  </v-content>
  <v-content v-else-if="data.status === 'error'">
    <app-import-failed :message="$t('cant_import_dataset')" />
  </v-content>
  <v-content v-else>
    <!-- No content. -->
  </v-content>
</template>

<script>
import DatasetEdit from "./dataset-record-edit";
import DistributionEdit from "./distribution-record-edit";
import {
  createDataset,
  isDatasetValid,
  EXPORT_NKOD,
  EXPORT_EDIT,
  EXPORT_LKOD,
} from "../dataset-model";
import {
  createDistribution,
  isDistributionValid,
} from "../distribution-model";
import DistributionSelector from "./ui/distribution-selector";
import StepperNavigationMobile from "./ui/step-navigation-mobile";
import StepperNavigationDesktop from "./ui/step-navigation-desktop";
import ExportSummary from "./export-summary";
import {
  importFromJsonLd,
} from "../import-dataset";
import {
  importDatasetFromUrlWithProxy,
  importDatasetFromUrl,
  fetchCodelistLabels,
} from "../import-dataset-from-url";
import setPageTitle from "../../app-service/page-title";
import {getStore} from "./codelists/local-storage";
import UploadFailedDialog from "./ui/upload-failed-dialog";
import ImportFailed from "../../app-service/import-failed";

export default {
  "name": "app-dataset-edit",
  "components": {
    "app-dataset": DatasetEdit,
    "app-distribution": DistributionEdit,
    "app-distribution-selector": DistributionSelector,
    "app-step-navigation-mobile": StepperNavigationMobile,
    "app-step-navigation-desktop": StepperNavigationDesktop,
    "app-export-summary": ExportSummary,
    "app-upload-failed-dialog": UploadFailedDialog,
    "app-import-failed": ImportFailed,
  },
  "data": () => ({
    "data": {
      "codelist": getStore(),
      "status": "loading",
      "dataset": undefined,
      "distributions": [],
      "error": undefined,
    },
    "exportOptions": {
      "type": EXPORT_NKOD,
      "allowEdit": false,
      "editIri": "",
      "lkodIri": "",
      "allowImport": true,
    },
    "ui": {
      "step": 1,
      "distribution": 0,
      "uploadFailedVisible": false,
    },
    "validation": {
      "dataset": false,
      "distributions": false,
    },
  }),
  "watch": {
    "$route": function (location) {
      if (location.query.krok === undefined) {
        this.ui.step = 1;
      } else if (location.query.krok !== this.ui.krok) {
        this.ui.step = location.query.krok;
      }
    },
  },
  "mounted": function () {
    const url = this.$route.query.url;
    const dataset = this.$route.query.dataset;
    const copyMode = isCopyMode(this.$route);
    if (dataset) {
      importDataset.call(this, dataset, copyMode);
    } else if (url) {
      importFromUrl.call(this, url);
    } else {
      createNewDataset.call(this);
    }
  },
  "methods": {
    "setData": function(dataset, distributions) {
      this.data.dataset = dataset;
      this.data.distributions = distributions;
      this.ui.distribution = 0;
      // We need at least one distribution.
      if (this.data.distributions.length === 0) {
        this.data.distributions.push(createDistribution());
      }
      this.updateDatasetIri();
      // Try to Load labels.
      fetchCodelistLabels(dataset, distributions, this.$vuetify.lang.current);
    },
    "isDatasetValid": function () {
      if (!this.validation.dataset) {
        return true;
      }
      return isDatasetValid(this.data.dataset);
    },
    "areDistributionsValid": function () {
      if (!this.validation.distributions) {
        return true;
      }
      for (let distribution of this.data.distributions) {
        if (!distribution.$validators.force) {
          // Newly added distribution. User does not
          // visited last step after adding this one.
          continue;
        }
        if (!isDistributionValid(distribution)) {
          return false;
        }
      }
      return true;
    },
    "addDistribution": function () {
      this.data.distributions = [
        ...this.data.distributions,
        createDistribution(),
      ];
      this.ui.distribution = this.data.distributions.length - 1;
    },
    "deleteDistribution": function () {
      const index = this.ui.distribution;
      this.data.distributions = [
        ...this.data.distributions.slice(0, index),
        ...this.data.distributions.slice(index + 1),
      ];
      this.ui.distribution = Math.min(
        this.ui.distribution,
        this.data.distributions.length - 1);
    },
    "onStepperInput": function (value) {
      if (!this.validation.dataset && value > 1) {
        this.validation.dataset = true;
        this.data.dataset.$validators.force = true;
      }
      if (value > 2) {
        this.validation.distributions = true;
        this.data.distributions.forEach((distribution) => {
          distribution.$validators.force = true;
        });
      }
      if (String(this.$route.query.krok) !== String(value)) {
        this.$router.push({
          "query": {
            ...this.$route.query,
            "krok": value,
          },
        });
      }
    },
    "loadFromFile": function (file) {
      loadFile(file)
        .then((content) => importFromJsonLd(
          content, this.$vuetify.lang.current
        ))
        .then((result) => {
          console.log("result", result);
          this.setData(result.dataset, result.distributions);
        })
        .catch((error) => {
          console.error("Can't import file.", error);
          this.ui.uploadFailedVisible = true;
        });
    },
    "loadFromUrl": function(url) {
      importDatasetFromUrl(url, this.$vuetify.lang.current)
        .then((result) => {
          this.setData(result.dataset, result.distributions);
        })
        .catch((error) => {
          console.error("Can't import from url.", error);
          this.ui.uploadFailedVisible = true;
        });
    },
    "updateExport": function (event) {
      this.exportOptions.type = event.type;
      this.exportOptions.lkodIri = event.lkodIri;
      this.updateDatasetIri();
      setPageTitle(this.$t(
        getPageTitle(this.data.dataset, this.exportOptions.type)));
    },
    "updateDatasetIri": function() {
      switch (this.exportOptions.type) {
      case EXPORT_NKOD:
        this.data.dataset.iri = undefined;
        break;
      case EXPORT_EDIT:
        this.data.dataset.iri = this.exportOptions.editIri;
        break;
      case EXPORT_LKOD:
        this.data.dataset.iri = this.exportOptions.lkodIri;
        break;
      }
    },
    "uploadFailedClose": function() {
      this.ui.uploadFailedVisible = false;
    },
  },
};

/**
 * For importing dataset we use the proxy.
 */
function importDataset(url, copyMode) {
  if (copyMode) {
    this.exportOptions.type = EXPORT_NKOD;
    this.exportOptions.editIri = "";
  } else {
    this.exportOptions.type = EXPORT_EDIT;
    this.exportOptions.editIri = url;
  }
  //
  this.exportOptions.allowImport = false;
  this.exportOptions.allowEdit = true;
  importDatasetFromUrlWithProxy(url, this.$vuetify.lang.current)
    .then((result) => {
      this.setData(result.dataset, result.distributions);
      this.data.status = "ready";
      initializeStepAndTitle.call(this);
    })
    .catch((error) => {
      console.error("Can't import dataset.", error);
      this.data.status = "error";
      this.data.error = error;
    });
}

function initializeStepAndTitle() {
  setPageTitle(this.$t(
    getPageTitle(this.data.dataset, this.exportOptions.type)));
  if(this.$route.query.krok) {
    const step = parseInt(this.$route.query.krok, 10);
    this.ui.step = step;
    this.onStepperInput(step);
  }
}

function importFromUrl(url) {
  this.exportOptions.type = EXPORT_NKOD;
  this.exportOptions.editIri = "";
  this.exportOptions.allowImport = true;
  this.exportOptions.allowEdit = false;
  //
  importDatasetFromUrl(url, this.$vuetify.lang.current)
    .then((result) => {
      this.setData(result.dataset, result.distributions);
      this.data.status = "ready";
      initializeStepAndTitle.call(this);
    })
    .catch((error) => {
      console.error("Can't import from URL.", error);
      this.data.status = "error";
      this.data.error = error;
    });
}

function createNewDataset() {
  this.data.dataset = createDataset();
  this.data.distributions.push(createDistribution());
  this.data.status = "ready";
  this.exportOptions.type = EXPORT_NKOD;
  this.exportOptions.allowEdit = false;
  //
  initializeStepAndTitle.call(this);
}

function isCopyMode($route) {
  return $route.query.kopie !== undefined;
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

</script>
