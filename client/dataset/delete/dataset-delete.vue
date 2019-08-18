<template>
  <v-content v-if="data.status === 'ready'">
    <app-summary :dataset="data.dataset" />
  </v-content>
  <v-content v-else-if="data.status === 'missing-dataset'">
    <!-- TODO Add content -->
  </v-content>
  <v-content v-else-if="data.status === 'error'">
    <p class="text-xs-center mt-5">
      {{ $t("cant_import_dataset") }}
    </p>
  </v-content>
  <v-content v-else>
    <!-- No content. -->
  </v-content>
</template>

<script>
import {importMinimalDataset} from "../import-from-url";
import DatasetDeleteSummary from "./dataset-delete-summary";
import setPageTitle from "@/app-service/page-title";

export default {
  "name": "app-dataset-delete",
  "components": {
    "app-summary": DatasetDeleteSummary
  },
  "data": () => ({
    "data": {
      "status": "loading",
      "dataset": undefined,
      "error": undefined
    }
  }),
  "mounted": function () {
    setPageTitle(this.$t("delete_page_title"));

    const url = this.$route.query.url;
    if (url === undefined) {
      this.data.status = "missing-dataset";
      return;
    }

    importMinimalDataset(url).then((result) => {
      this.data.dataset = result.dataset;
      this.data.status = "ready";
    }).catch((error) => {
      console.error(error);
      this.data.status = "error";
      this.data.error = error;
    });
  }
}

</script>