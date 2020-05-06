<template>
  <v-container>
    <v-alert type="error">
      {{ message }}
    </v-alert>
  </v-container>
</template>

<script>
export default {
  "name": "import-failed",
  "props": {
    "message": { "type": String, "required": true },
  },
};
</script>