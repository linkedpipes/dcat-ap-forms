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
        {{ $t('upload_from_url') }}
      </v-btn>
    </template>
    <!-- This is the dialog it-self. -->
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>{{ $t('upload_from_url') }}</v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click="close"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pt-6">
        <v-text-field
          id="url_load_from"
          v-model="url"
          :label="$t('url_title')"
          :hint="$t('hint_url_title')"
          prepend-icon="label"
          append-outer-icon="help_outline"
          clearable
          @click:append-outer="$h('url_title')"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="load"
        >
          {{ $t('upload_from_url') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="js">
export default {
  "name": "UploadUrlDialog",
  "data":  () => ({
    /** @type {boolean} */
    "visible" : false,
    /** @type {string} */
    "url": "",
  }),
  "methods": {
    "close" : function() {
      this.visible = false;
    },
    "load": function() {
      this.$emit("upload", this.url);
      this.close();
    },
  },
};
</script>
