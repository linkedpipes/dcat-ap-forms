<template>
  <v-container
    grid-list-lg
  >
    <!-- Heading section. -->
    <v-row
      justify="center"
      class="mt-4 mb-2"
    >
      <v-col
        class="text-center"
      >
        <h1 class="text-h5 mb-2">
          {{ $t('landing_title') }}
        </h1>
        <p class="text--secondary">
          {{ $t('landing_description') }}
        </p>
      </v-col>
    </v-row>
    <!-- Mode selection section.  -->
    <v-row>
      <v-col
        v-for="mode in modes"
        :key="mode.value"
        cols="12"
        md="4"
      >
        <v-card
          outlined
          height="100%"
          class="d-flex flex-column"
          :ripple="true"
          @click="selectMode(mode.value)"
        >
          <v-card-text class="text-center flex-grow-1">
            <v-icon
              size="48"
              color="primary"
              class="mb-2"
            >
              {{ mode.icon }}
            </v-icon>
            <div class="text-h6">
              {{ $t(mode.titleKey) }}
            </div>
            <div class="text--secondary">
              {{ $t(mode.descriptionKey) }}
            </div>
          </v-card-text>
          <v-card-actions class="justify-center pb-4">
            <v-btn
              color="primary"
              outlined
              @click.stop="selectMode(mode.value)"
            >
              {{ $t('landing_mode_select') }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- Upload section. -->
    <v-row
      justify="center"
      class="mt-6"
    >
      <v-col
        cols="12"
        md="8"
      >
        <v-divider />
        <p class="text-center text--secondary mt-4 mb-2">
          {{ $t('landing_import_description') }}
        </p>
        <div class="text-center">
          <upload-file-dialog @upload="loadFromFile" />
          <upload-url-dialog @upload="loadFromUrl" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import UploadFileDialog from "./components/upload-file-dialog.vue";
import UploadUrlDialog from "./components/upload-url-dialog.vue";
import {MODE_OPEN_DATA, MODE_HVD, MODE_NON_PUBLIC} from "../dataset-model";

export default {
  "name": "DatasetLandingView",
  "components": {
    "upload-file-dialog": UploadFileDialog,
    "upload-url-dialog": UploadUrlDialog,
  },
  "data": () => ({
    "modes": [
      {
        "value": MODE_OPEN_DATA,
        "icon": "public",
        "titleKey": "landing_mode_open_data",
        "descriptionKey": "landing_mode_open_data_description",
      },
      {
        "value": MODE_HVD,
        "icon": "workspace_premium",
        "titleKey": "landing_mode_hvd",
        "descriptionKey": "landing_mode_hvd_description",
      },
      {
        "value": MODE_NON_PUBLIC,
        "icon": "lock",
        "titleKey": "landing_mode_non_public",
        "descriptionKey": "landing_mode_non_public_description",
      },
    ],
  }),
  "methods": {
    /** @param {string} mode */
    "selectMode": function(mode) {
      this.$emit("select-mode", mode);
    },
    /** @param {File} file */
    "loadFromFile": function(file) {
      this.$emit("load-from-file", file);
    },
    /** @param {string} url */
    "loadFromUrl": function(url) {
      this.$emit("load-from-url", url);
    },
  },
};
</script>
