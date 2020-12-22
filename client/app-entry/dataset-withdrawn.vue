<template>
  <v-app>
    <app-dataset-withdrawn />
    <app-help />
  </v-app>
</template>

<script>
import Help from "../app-service/help";
import DatasetWithdrawn from "../dataset/delete/dataset-delete";

export default {
  "name": "DatasetWithdrawn",
  "components": {
    "app-help": Help,
    "app-dataset-withdrawn": DatasetWithdrawn,
  },
};
</script>