<template>
  <v-content v-if="status === 'ready'">
    <app-summary :dataset="dataset" />
  </v-content>
  <v-content v-else-if="status === 'error'">
    <app-import-failed :message="$t('cant_import_dataset')" />
  </v-content>
</template>

<script>
import DatasetDeleteSummary from "./dataset-delete-summary";
import ImportFailed from "../../app-service/import-failed";
import setPageTitle from "../../app-service/page-title";
import {onDatasetDeleteMounted} from "./dataset-delete-service";

export default {
  "name": "AppDatasetDelete",
  "components": {
    "app-summary": DatasetDeleteSummary,
    "app-import-failed": ImportFailed,
  },
  "data": () => ({
    "status": "loading",
    "dataset": undefined,
  }),
  "mounted": async function () {
    setPageTitle(this.$t("delete_page_title"));
    try {
      this.dataset = await onDatasetDeleteMounted(
        this.$route.query.dataset,
        this.$vuetify.lang.current);
      this.status = "ready";
    } catch(ex) {
      this.status = "error";
      console.error("Can't import dataset.", ex);
    }
  },
};

</script>