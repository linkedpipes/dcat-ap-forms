<template>
  <v-bottom-navigation
    :value="value"
    @change="onChange"
  >
    <v-btn 
      :value="1"
      :color="getColor(1)"
      text
    >
      <span>{{ $t('nav_catalog') }}</span>
      <v-icon>note</v-icon>
    </v-btn>
    <v-btn 
      :value="2"
      :color="getColor(2)"
      text
    >
      <span>{{ $t('nav_download') }}</span>
      <v-icon>cloud_download</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  "name": "AppCatalogStepNavigationMobile",
  "props": {
    "value": {"required": true, "type": Number},
  },
  "methods": {
    "onChange": function(value) {
      this.$emit("input", value);
    },
    "getColor": function(value) {
      if (this.value === value) {
        return "blue";
      } else {
        return "red";
      }
    },
  },
};
</script>