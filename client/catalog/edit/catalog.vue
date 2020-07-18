<template>
  <v-container
    fluid
    grid-list-lg
    pa-0
  >
    <v-stepper
      :value="step"
      @change="onStepperInput"
    >
      <v-stepper-header>
        <v-stepper-step
          :complete="step > 1"
          :rules="[isCatalogValid]"
          :step="1"
          editable
        >
          {{ $t("step_catalog") }}
        </v-stepper-step>
        <v-divider />
        <v-stepper-step
          :step="2"
          editable
        >
          {{ $t("step_download") }}
        </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content :step="1">
          <app-catalog :catalog="data.catalog" />
        </v-stepper-content>
        <v-stepper-content :step="2">
          <app-export
            :catalog="data.catalog"
            :is-valid="isCatalogValid()"
          />
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
    <div class="hidden-md-and-up">
      <app-step-navigation-mobile
        :value="step"
        @input="onStepperInput"
      />
    </div>
    <div class="hidden-sm-and-down">
      <app-step-navigation-desktop
        :value="step"
        @input="onStepperInput"
      />
    </div>
  </v-container>
</template>

<script>
import {createCatalog, isCatalogValid} from "../catalog-model";
import CatalogEdit from "./catalog-edit-record";
import ExportSummary from "./export-summary";
import StepperNavigationMobile from "./components/step-navigation-mobile";
import StepperNavigationDesktop from "./components/step-navigation-desktop";
import setPageTitle from "../../app-service/page-title";

export default {
  "name": "app-catalog-edit",
  "components": {
    "app-step-navigation-mobile": StepperNavigationMobile,
    "app-step-navigation-desktop": StepperNavigationDesktop,
    "app-catalog" : CatalogEdit,
    "app-export": ExportSummary,
  },
  "data": () => ({
    "data": {
      "catalog": createCatalog(),
    },
    "step": 1,
    "validation": {
      "catalog": false,
    },
  }),
  "watch": {
    "$route" : function(location) {
      if (location.query.krok === undefined) {
        this.step = 1;
      } else if (location.query.krok !== this.step) {
        this.step = location.query.krok;
      }
    },
  },
  "mounted": function() {
    setPageTitle(this.$t("catalog_edit_page_title"));
  },
  "methods": {
    "isCatalogValid": function () {
      if (!this.validation.catalog) {
        return true;
      }
      return isCatalogValid(this.data.catalog);
    },
    "onStepperInput": function (value) {
      this.step = value;
      if (!this.validation.catalog && value > 1) {
        this.validation.catalog = true;
        this.data.catalog.$validators.force = true;
      }
      if (this.$route.query.krok === undefined && value === 1) {
        // Prevent redirect after the initial page is shown.
        return;
      }
      this.$router.push({
        "query": {
          "krok": value,
        },
      });
    },
  },
};
</script>