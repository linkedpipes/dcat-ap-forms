<template>
  <v-bottom-nav 
    :active="value" 
    absolute>
    <v-btn 
      :value="1" 
      color="blue" 
      flat 
      @click="onClick(1)">
      <span>{{ $labels.get('nav_catalog') }}</span>
      <v-icon>note</v-icon>
    </v-btn>
    <v-btn 
      :value="2" 
      color="blue" 
      flat 
      @click="onClick(2)">
      <span>{{ $labels.get('nav_download') }}</span>
      <v-icon>cloud_download</v-icon>
    </v-btn>
  </v-bottom-nav>
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
            }
        }
    }
</script>