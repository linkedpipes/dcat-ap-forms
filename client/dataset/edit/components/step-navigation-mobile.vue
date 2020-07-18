<template>
  <v-bottom-navigation
    v-model="value"
  >
    <v-btn
      :value="1" 
      color="blue" 
      text
      @click="onClick(1)"
    >
      <span>{{ $t('nav_dataset') }}</span>
      <v-icon>note</v-icon>
    </v-btn>
    <v-btn 
      :value="2" 
      color="blue" 
      text
      @click="onClick(2)"
    >
      <span>{{ $t('nav_distributions') }}</span>
      <v-icon>attach_file</v-icon>
    </v-btn>
    <v-btn 
      :value="3" 
      color="blue" 
      text
      @click="onClick(3)"
    >
      <span>{{ $t('nav_download') }}</span>
      <v-icon>cloud_download</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  "name": "app-step-navigation-mobile",
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