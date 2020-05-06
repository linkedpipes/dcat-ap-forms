<template>
  <v-content v-if="status === 'ready'">
    <app-summary :catalog="catalog" />
  </v-content>
  <v-content v-else-if="status === 'error'">
    <app-import-failed :message="$t('cant_import_catalog')" />
  </v-content>
  <v-content v-else>
    <!-- No content. -->
  </v-content>
</template>

<script>
import {importCatalogFromUrlWithProxy} from "../import-catalog-from-url";
import CatalogDeleteSummary from "./catalog-delete-summary";
import setPageTitle from "../../app-service/page-title";

export default {
  "name": "app-dataset-delete",
  "components": {
    "app-summary": CatalogDeleteSummary,
  },
  "data": () => ({
    "status": "loading",
    "catalog": undefined,
    "error": undefined,
  }),
  "mounted": function () {
    setPageTitle(this.$t("catalog_delete_page_title"));

    const url = this.$route.query.catalog;
    if (url === undefined) {
      this.status = "error";
      return;
    }
    importCatalogFromUrlWithProxy(url).then((catalog) => {
      this.catalog = catalog;
      this.status = "ready";
    }).catch((error) => {
      this.status = "error";
      this.error = error;
      console.error("Can't import dataset", error);
    });
  },
};

</script>