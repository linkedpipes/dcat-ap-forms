<template>
  <v-content v-if="data.status === 'ready'">
    <app-summary :catalog="data.catalog"/>
  </v-content>
  <v-content v-else-if="data.status === 'missing-dataset'">
    <!-- TODO Add content -->
  </v-content>
  <v-content v-else-if="data.status === 'error'">
    <p class="text-xs-center mt-5">
      {{ $labels.get("cant_import_dataset") }}
    </p>
  </v-content>
  <v-content v-else>
    <!-- No content. -->
  </v-content>
</template>

<script>
    import {importCatalog} from "../import-from-url";
    import CatalogDeleteSummary from "./catalog-delete-summary";
    import setPageTitle from "@/app-service/page-title";

    export default {
        "name": "app-dataset-delete",
        "components": {
            "app-summary": CatalogDeleteSummary
        },
        "data": () => ({
            "data": {
                "status": "loading",
                "catalog": undefined,
                "error": undefined
            }
        }),
        "mounted": function () {
            setPageTitle(this.$labels.get("catalog_delete_page_title"));

            const url = this.$route.query.url;
            if (url === undefined) {
                this.data.status = "missing-catalog";
                return;
            }

            importCatalog(url).then((catalog) => {
                this.data.catalog = catalog;
                this.data.status = "ready";
            }).catch((error) => {
                console.error(error);
                this.data.status = "error";
                this.data.error = error;
            });
        }
    }

</script>