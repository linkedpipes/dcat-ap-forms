<template>
  <v-app>
    <app-catalog-withdrawn />
    <app-help />
  </v-app>
</template>

<script>
import Help from "../app-service/help";
import CatalogWithdrawn from "../catalog/delete/catalog-delete";

export default {
  "name": "CatalogWithdrawn",
  "components": {
    "app-help": Help,
    "app-catalog-withdrawn": CatalogWithdrawn,
  },
};
</script>