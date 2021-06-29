<template>
  <v-main v-if="data.status === 'ready'">
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
            :are-data-valid="isDatasetValid() && areDistributionsValid()"
            :are-options-valid="areOptionsValid()"
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
  </v-main>
  <v-main v-else-if="data.status === 'error'">
    <app-import-failed :message="$t('cant_import_dataset')" />
  </v-main>
  <v-main v-else>
    <!-- No loading indicator. -->
  </v-main>
</template>

<script>
import DatasetEdit from "./dataset-record-edit";
import DistributionEdit from "./distribution-record-edit";
import DistributionSelector from "./components/distribution-selector";
import StepperNavigationMobile from "./components/step-navigation-mobile";
import StepperNavigationDesktop from "./components/step-navigation-desktop";
import ExportSummary from "./export-summary";
import UploadFailedDialog from "./components/upload-failed-dialog";
import ImportFailed from "../../app-service/import-failed";
import {EXPORT_NKOD, isDatasetValid} from "../dataset-model";
import * as service from "./dataset-edit-service";
import {getStore} from "./codelists/local-storage";
import {areExportOptionsValid} from "./dataset-edit-service";

export default {
  "name": "AppDatasetEdit",
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
      // If true allows EXPORT_EDIT option in export dialog.
      "allowEdit": false,
      // Dataset IRI set by the export dialog for EXPORT_LKOD.
      "lkodIri": "",
      // If true import buttons, file and url, are visible.
      "allowImport": true,
      // Publisher set in the export dialog.
      "publisher": "",
      // True if we post on submit action and disable export dialog.
      "postData": false,
      // If postData is true, then this specify the URL to post data to.
      "postUrl": undefined,
    },
    "ui": {
      "step": 1,
      "distribution": 0,
      "uploadFailedVisible": false,
    },
    "validation": {
      // If true then show dataset validation, else dataset validation
      // errors are ignored.
      "dataset": false,
      // If true then show distributions validation, else distributions
      // validation errors are ignored.
      "distributions": false,
    },
  }),
  "watch": {
    "$route": function (location) {
      service.onRouteChange(this, location);
    },
  },
  "mounted": async function () {
    await service.onDatasetEditMounted(this);
  },
  "methods": {
    "areOptionsValid": function () {
      return areExportOptionsValid(this.exportOptions);
    },
    "isDatasetValid": function () {
      return !this.validation.dataset ||  isDatasetValid(this.data.dataset);
    },
    "areDistributionsValid": function () {
      return service.areDistributionsValid(this);
    },
    "addDistribution": function () {
      service.onAddDistribution(this);
    },
    "deleteDistribution": function () {
      service.onDeleteDistribution(this);
    },
    "onStepperInput": function (value) {
      service.onStepperInput(this, value);
    },
    "loadFromFile": async function (file) {
      await service.onLoadFromFile(this, file);
    },
    "loadFromUrl": async function(url) {
      await service.onLoadFromUrl(this, url);
    },
    "updateExport": function (event) {
      service.onUpdateExport(this, event);
    },
    "uploadFailedClose": function() {
      this.ui.uploadFailedVisible = false;
    },
  },
};

</script>
