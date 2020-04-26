<template>
  <v-content v-if="data.status === 'ready'">
    <app-summary :dataset="data.dataset" />
  </v-content>
  <v-content v-else-if="data.status === 'loading'">
    <!-- No content. -->
  </v-content>
  <v-content v-else>
    <p class="text-xs-center mt-5">
      {{ $t("cant_import_dataset") }}
    </p>
  </v-content>
</template>

<script>
import {importDatasetFromUrlWithProxy} from "../import-dataset-from-url";
import DatasetDeleteSummary from "./dataset-delete-summary";
import setPageTitle from "../../app-service/page-title";

export default {
  "name": "app-dataset-delete",
  "components": {
    "app-summary": DatasetDeleteSummary,
  },
  "data": () => ({
    "data": {
      "status": "loading",
      "dataset": undefined,
      "error": undefined,
    },
  }),
  "mounted": function () {
    setPageTitle(this.$t("delete_page_title"));

    const url = this.$route.query.url;
    if (url === undefined) {
      this.data.status = "missing-dataset";
      return;
    }

    const lang = this.$vuetify.lang.current;
    importDatasetFromUrlWithProxy(url, lang).then((dataset) => {
      this.data.dataset = dataset;
      this.data.status = "ready";
    }).catch((error) => {
      console.error(error);
      this.data.status = "error";
      this.data.error = error;
    });
  },
};

</script>