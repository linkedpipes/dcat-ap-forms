<template>
  <v-bottom-sheet
    v-if="isOpen"
    v-model="isOpen"
    lazy
  >
    <v-card>
      <v-card-title>
        <v-spacer />
      </v-card-title>
      <v-card-text>
        <span v-html="$t('help_' + name)" />
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import {getData} from "./help-service";

export default {
  "name": "app-help",
  "data": getData,
  "watch": {
    "$route": function () {
      this.isOpen = false;
    },
  },
};
</script>