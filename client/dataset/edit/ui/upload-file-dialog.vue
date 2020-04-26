<template>
  <v-dialog
    v-model="visible"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        text
        v-on="on"
      >
        {{ $t('load') }}
      </v-btn>
    </template>

    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>{{ $t('load') }}</v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click="close"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text>
        <v-layout
          row
          wrap
        >
          <v-file-input
            :label="$t('load_hint')"
            @change="fileChanged"
          />
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  "name": "upload-file-dialog",
  "data":  () => ({
    "visible" : false,
  }),
  "methods": {
    "close" : function() {
      this.visible = false;
    },
    "fileChanged": function(file) {
      this.$emit("upload", file);
      this.close();
    },
  },
};
</script>
