<template>
  <v-content v-if="data.status === 'ready'">
    <app-summary :catalog="data.catalog" />
  </v-content>
  <v-content v-else-if="data.status === 'loading'">
    <!-- No content. -->
  </v-content>
  <v-content v-else>
    <p class="text-xs-center mt-5">
      {{ $t("cant_import_catalog") }}
    </p>
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
    "data": {
      "status": "loading",
      "catalog": undefined,
      "error": undefined,
    },
  }),
  "mounted": function () {
    setPageTitle(this.$t("catalog_delete_page_title"));

    const url = this.$route.query.url;
    if (url === undefined) {
      this.data.status = "error";
      return;
    }
    importCatalogFromUrlWithProxy(url).then((catalog) => {
      this.data.catalog = catalog;
      this.data.status = "ready";
    }).catch((error) => {
      this.data.status = "error";
      this.data.error = error;
      console.error("Can't import dataset", error);
    });
  },
};

</script>