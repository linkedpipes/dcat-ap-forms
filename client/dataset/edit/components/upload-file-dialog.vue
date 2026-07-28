<template>
  <v-dialog
    v-model="visible"
    width="768"
  >
    <!-- This represent an element to open the dialog.  -->
    <template #activator="{ on }">
      <v-btn
        color="primary"
        text
        v-on="on"
      >
        {{ $t('upload_from_file') }}
      </v-btn>
    </template>
    <!-- This is the dialog it-self. -->
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>{{ $t('upload_from_file') }}</v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click="close"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pt-6">
        <v-file-input
          outlined
          :label="$t('upload_from_file_hint')"
          @change="onFileChange"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="js">
export default {
  "name": "UploadFileDialog",
  "data":  () => ({
    /** @type {boolean} */
    "visible" : false,
  }),
  "methods": {
    "close" : function() {
      this.visible = false;
    },
    /**
     * @param {File} file
     */
    "onFileChange": function(file) {
      this.$emit("upload", file);
      this.close();
    },
  },
};
</script>
