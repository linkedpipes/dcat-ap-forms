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
        {{ $t('load_url') }}
      </v-btn>
    </template>

    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>{{ $t('load_url') }}</v-toolbar-title>
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
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="load"
        >
          {{ $t('load_url') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  "name": "upload-url-dialog",
  "data":  () => ({
    "visible" : false,
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
