<template>
  <v-bottom-nav 
    :active="value" 
    absolute>
    <v-btn 
      :value="1" 
      color="blue" 
      flat 
      @click="onClick(1)">
      <span>{{ $labels.get('nav_dataset') }}</span>
      <v-icon>note</v-icon>
    </v-btn>
    <v-btn 
      :value="2" 
      color="blue" 
      flat 
      @click="onClick(2)">
      <span>{{ $labels.get('nav_distributions') }}</span>
      <v-icon>attach_file</v-icon>
    </v-btn>
    <v-btn 
      :value="3" 
      color="blue" 
      flat 
      @click="onClick(3)">
      <span>{{ $labels.get('nav_download') }}</span>
      <v-icon>cloud_download</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
    export default {
        "name": "app-step-navigation-mobile",
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