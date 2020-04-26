<template>
  <v-layout 
    row 
    mt-1
  >
    <v-btn 
      v-if="value > 1"
      text
      @click="onClick(1)"
    >
      <v-icon>arrow_back</v-icon>
      {{ $t("nav_catalog") }}
    </v-btn>
    <v-spacer />
    <v-btn 
      v-if="value < 2"
      text
      color="primary" 
      @click="onClick(2)"
    >
      {{ $t("nav_download") }}
      <v-icon>arrow_forward</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  "name": "app-catalog-step-navigation-desktop",
  "props": {
    "value": {"required": true, "type": Number},
  },
  "methods": {
    "onClick": function (value) {
      this.$emit("input", value);
    },
  },
};
</script>