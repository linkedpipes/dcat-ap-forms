<template>
  <v-layout 
    row 
    mt-1
  >
    <v-btn 
      v-if="value > 1"
      flat
      @click="onPrevious"
    >
      <v-icon>arrow_back</v-icon>
      {{ prevLabel }}
    </v-btn>
    <v-spacer />
    <v-btn 
      v-if="value < 2"
      flat
      color="primary" 
      @click="onNext"
    >
      {{ nextLabel }}
      <v-icon>arrow_forward</v-icon>
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  "name": "app-catalog-step-navigation-desktop",
  "props": {
    "value": {"required": true}
  },
  "computed": {
    "prevLabel": function() {
      switch (this.value) {
      case 2:
        return this.$t("nav_catalog");
      }
    },
    "nextLabel": function() {
      switch (this.value) {
      case 1:
        return this.$t("nav_download")
      }
    }
  },
  "methods": {
    "onPrevious": function () {
      this.$emit("input", this.value - 1);
    },
    "onNext": function () {
      this.$emit("input", this.value + 1);
    }
  }
}
</script>