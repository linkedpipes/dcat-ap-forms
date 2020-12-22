<template>
  <v-app>
    <app-catalog-registration />
    <app-help />
  </v-app>
</template>

<script>
import Help from "../app-service/help";
import CatalogRegistration from "../catalog/edit/catalog-edit";

export default {
  "name": "CatalogRegistration",
  "components": {
    "app-help": Help,
    "app-catalog-registration": CatalogRegistration,
  },
};
</script>