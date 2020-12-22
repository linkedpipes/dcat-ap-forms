<template>
  <v-app>
    <app-dataset-registration />
    <app-help />
  </v-app>
</template>

<script>
import Help from "../app-service/help";
import DatasetRegistration from "../dataset/edit/dataset";

export default {
  "name": "DatasetRegistration",
  "components": {
    "app-help": Help,
    "app-dataset-registration": DatasetRegistration,
  },
};
</script>