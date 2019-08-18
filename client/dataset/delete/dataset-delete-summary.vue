<template>
  <v-card>
    <v-container fluid>
      <div>
        <div class="headline">
          {{ $t("delete_page_title") }}
        </div>
        <div>
          <v-list two-line>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="blue white--text">
                  label
                </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ dataset.title }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t("dataset_title") }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="blue white--text">
                  description
                </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ dataset.description }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t("dataset_description") }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </div>
      </div>
      <v-card-actions>
        <div>
          {{ $t("dataset_delete_summary_download") }}
          <code>{{ nkodDatabox }}</code>.
        </div>
        <v-spacer />
        <v-btn 
          slot="activator" 
          round 
          color="warning"
          outline 
          @click="onExport"
        >
          <v-icon left>
            file_download
          </v-icon>
          <span>{{ $t("button_download") }}</span>
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import {exportToJsonLd} from "./export-dataset-delete";
import {downloadAsJsonLd} from "@/app-service/download";

export default {
  "name": "app-export-summary",
  "props": {
    "dataset": {"type": Object, "required": true}
  },
  "computed": {
    "nkodDatabox": function() {
      return NKOD_ISDS;
    }
  },
  "methods": {
    "onExport": function () {
      const jsonld = exportToJsonLd(this.dataset);
      downloadAsJsonLd(
        "nkod-odstranění-datové-sady.jsonld.txt",jsonld)
    }
  }
}

</script>

<style scoped>
    .multiline {
        white-space: pre-wrap;
    }
</style>
