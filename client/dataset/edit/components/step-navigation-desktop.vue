<template>
  <v-layout 
    row 
    mt-1
    ma-3
  >
    <v-btn 
      v-if="value > 1"
      text
      @click="onPrevious"
    >
      <v-icon>arrow_back</v-icon>
      {{ prevLabel }}
    </v-btn>
    <v-spacer />
    <v-btn 
      v-if="value < 3"
      text
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
  "name": "AppStepNavigationDesktop",
  "props": {
    "value": {"required": true, "type": Number},
  },
  "computed": {
    "prevLabel": function() {
      switch (this.value) {
      case 2:
        return this.$t("nav_dataset");
      case 3:
        return this.$t("nav_distributions");
      default:
        return undefined;
      }
    },
    "nextLabel": function() {
      switch (this.value) {
      case 1:
        return this.$t("nav_distributions");
      case 2:
        return this.$t("nav_download");
      default:
        return undefined;
      }
    },
  },
  "methods": {
    "onPrevious": function () {
      this.$emit("input", this.value - 1);
    },
    "onNext": function () {
      this.$emit("input", this.value + 1);
    },
    "onDownload": function() {
      this.$emit("download");
    },
  },
};
</script>