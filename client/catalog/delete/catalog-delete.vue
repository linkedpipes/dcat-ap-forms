<template>
  <v-main v-if="status === 'ready'">
    <app-catalog-delete-summary :catalog="catalog" />
  </v-main>
  <v-main v-else-if="status === 'error'">
    <app-import-failed :message="$t('cant_import_catalog')" />
  </v-main>
  <v-main v-else>
    <!-- No loading indicator. -->
  </v-main>
</template>

<script>
import CatalogDeleteSummary from "./catalog-delete-summary";
import ImportFailed from "../../app-service/import-failed";
import {onCatalogDeleteMounted} from "./catalog-delete-service";

export default {
  "name": "AppDatasetDelete",
  "components": {
    "app-catalog-delete-summary": CatalogDeleteSummary,
    "app-import-failed": ImportFailed,
  },
  "data": () => ({
    "status": "loading",
    "catalog": undefined,
  }),
  "mounted": async function () {
    await onCatalogDeleteMounted(this);
  },
};

</script>