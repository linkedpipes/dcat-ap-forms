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
            @reload="reloadData"
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
          />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <div class="hidden-md-and-up">
      <app-step-navigation-mobile v-model="ui.step" />
    </div>
    <div class="hidden-sm-and-down">
      <app-step-navigation-desktop v-model="ui.step" />
    </div>
  </v-content>
  <v-content v-else-if="data.status === 'error'">
    <p class="text-xs-center mt-5">
      {{ this.$vuetify.lang.t("cant_import_dataset") }}
    </p>
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
  decorateDataset
} from "./dataset-model";
import {
  createDistribution,
  isDistributionValid,
  decorateDistribution
} from "./distribution-model";
import DistributionSelector from "./ui/distribution-selector";
import StepperNavigationMobile from "./ui/step-navigation-mobile";
import StepperNavigationDesktop from "./ui/step-navigation-desktop";
import ExportSummary from "./export-summary";
import {importDataset, loadLabelsForDistributions} from "../import-from-url";
import setPageTitle from "../../app-service/page-title";
import {getStore} from "./codelists/local-storage";

export default {
  "name": "app-dataset-edit",
  "components": {
    "app-dataset": DatasetEdit,
    "app-distribution": DistributionEdit,
    "app-distribution-selector": DistributionSelector,
    "app-step-navigation-mobile": StepperNavigationMobile,
    "app-step-navigation-desktop": StepperNavigationDesktop,
    "app-export-summary": ExportSummary
  },
  "data": () => ({
    "data": {
      "codelist": getStore(),
      "status": "loading",
      "dataset": undefined,
      "distributions": [],
      "error": undefined
    },
    "ui": {
      "step": 1,
      "distribution": 0
    },
    "validation": {
      "dataset": false,
      "distributions": false
    }
  }),
  "watch": {
    "$route": function (location) {
      if (location.query.krok === undefined) {
        this.ui.step = 1;
      } else if (location.query.krok !== this.ui.krok) {
        this.ui.step = location.query.krok;
      }
    }
  },
  "mounted": function () {
    setPageTitle(this.$t("edit_page_title"));

    // Set step from URL.
    if (this.$route.query.krok !== undefined) {
      this.ui.step = this.$route.query.krok;
    }

    const url = this.$route.query.url;
    if (url === undefined) {
      this.data.dataset = createDataset();
      this.data.distributions.push(createDistribution());
      this.data.status = "ready";
      return;
    }

    if (url !== undefined) {
      importDataset(url, this.$vuetify.lang.current, this.data.codelist, true).then((result) => {
        this.reloadData(result.dataset, result.distributions);
        this.data.status = "ready";
        //return loadLabelsForDistributions(distributions, this.$vuetify.lang.current);
      });
    }
  },
  "methods": {
    "reloadData": function(dataset, distributions) {
      this.data.dataset = dataset;
      this.data.distributions = distributions;
      this.ui.distribution = 0;
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
      for (let index in this.data.distributions) {
        const distribution = this.data.distributions[index];
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
        createDistribution()
      ];
      this.ui.distribution = this.data.distributions.length - 1;
    },
    "deleteDistribution": function () {
      const index = this.ui.distribution;
      this.data.distributions = [
        ...this.data.distributions.slice(0, index),
        ...this.data.distributions.slice(index + 1)
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
      if (this.$route.query.krok === undefined && value === 1) {
        // Prevent redirect after the initial page is shown.
        return;
      }
      this.$router.push({
        "query": {
          ...this.$route.query,
          "krok": value
        }
      });
    }
  }
};


</script>
