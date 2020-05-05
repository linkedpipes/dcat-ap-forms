<template>
  <v-dialog
    v-model="visible"
    width="500"
  >
    <v-card>
      <v-toolbar
        dark
        color="error"
      >
        <v-toolbar-title>
          {{ $t('import_dialog_failed_title') }}
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click="close"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  "name": "upload-failed-dialog",
  "props": {
    "visible": { "type": Boolean, "required": true },
  },
  "methods": {
    "close": function () {
      this.$emit("close");
    },
  },
};
</script>
