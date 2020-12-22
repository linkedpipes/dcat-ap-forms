<template>
  <v-main v-if="status === 'ready'">
    <app-summary :dataset="dataset" />
  </v-main>
  <v-main v-else-if="status === 'error'">
    <app-import-failed :message="$t('cant_import_dataset')" />
  </v-main>
  <v-main v-else>
    <!-- No loading indicator. -->
  </v-main>
</template>

<script>
import DatasetDeleteSummary from "./dataset-delete-summary";
import ImportFailed from "../../app-service/import-failed";
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
    await onDatasetDeleteMounted(this);
  },
};

</script>