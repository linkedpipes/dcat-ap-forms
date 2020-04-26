<template>
  <v-card>
    <v-container fluid>
      <div>
        <div class="headline">
          {{ $t("delete_page_title") }}
        </div>
        <div>
          <v-list two-line>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  label
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ dataset.title_cs }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t("dataset_title_cs") }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  description
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ dataset.description_cs }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t("dataset_description_cs") }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
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
          color="warning"
          rounded
          outlined
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
import {exportToJsonLdForDelete} from "../export-dataset";
import {downloadAsJsonLd} from "../../app-service/download";

export default {
  "name": "app-export-summary",
  "props": {
    "dataset": {"type": Object, "required": true},
  },
  "computed": {
    "nkodDatabox": function() {
      return NKOD_ISDS;
    },
  },
  "methods": {
    "onExport": function () {
      const jsonld = exportToJsonLdForDelete(this.dataset);
      downloadAsJsonLd(
        "nkod-odstranění-datové-sady.jsonld.txt",jsonld);
    },
  },
};

</script>
