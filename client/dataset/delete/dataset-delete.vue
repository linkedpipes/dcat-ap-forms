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
import ImportFailed from "../../app-service/import-failed";

export default {
  "name": "app-dataset-delete",
  "components": {
    "app-summary": DatasetDeleteSummary,
    "app-import-failed": ImportFailed,
  },
  "data": () => ({
    "status": "loading",
    "dataset": undefined,
  }),
  "mounted": function () {
    setPageTitle(this.$t("delete_page_title"));

    const url = this.$route.query.dataset;
    if (url === undefined) {
      this.status = "error";
      return;
    }

    const lang = this.$vuetify.lang.current;
    importDatasetFromUrlWithProxy(url, lang).then((result) => {
      this.dataset = result.dataset;
      this.status = "ready";
    }).catch((error) => {
      this.status = "error";
      console.error("Can't import dataset.", error);
    });
  },
};

</script>