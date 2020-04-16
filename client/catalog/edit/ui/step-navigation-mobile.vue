<template>
  <v-bottom-navigation
    v-model="value"
    absolute
  >
    <v-btn 
      :value="1" 
      color="blue" 
      text
      @click="onClick(1)"
    >
      <span>{{ $t('nav_catalog') }}</span>
      <v-icon>note</v-icon>
    </v-btn>
    <v-btn 
      :value="2" 
      color="blue" 
      text
      @click="onClick(2)"
    >
      <span>{{ $t('nav_download') }}</span>
      <v-icon>cloud_download</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  "name": "app-catalog-step-navigation-mobile",
  "props": {
    "value": {"required": true},
  },
  "methods": {
    "onClick": function (value) {
      this.$emit("input", value);
    },
  },
};
</script>