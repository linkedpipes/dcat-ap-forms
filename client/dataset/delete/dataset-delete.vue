<template>
  <v-content v-if="status === 'ready'">
    <app-summary :dataset="dataset" />
  </v-content>
  <v-content v-else-if="status === 'error'">
    <app-import-failed :message="$t('cant_import_dataset')" />
  </v-content>
  <v-content v-else>
    <!-- No content. -->
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
    "status": "loading",
    "dataset": undefined,
    "error": undefined,
  }),
  "mounted": function () {
    setPageTitle(this.$t("delete_page_title"));

    const url = this.$route.query.dataset;
    if (url === undefined) {
      this.status = "missing-dataset";
      return;
    }

    const lang = this.$vuetify.lang.current;
    importDatasetFromUrlWithProxy(url, lang).then((result) => {
      this.dataset = result.dataset;
      this.status = "ready";
    }).catch((error) => {
      console.error(error);
      this.status = "error";
      this.error = error;
    });
  },
};

</script>