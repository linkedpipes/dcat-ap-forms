<template>
  <v-card>
    <v-container fluid>
      <div>
        <div class="headline">
          {{ $t("catalog_delete_page_title") }}
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
                  {{ catalog.title }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t("catalog_title") }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <v-icon class="blue white--text">
                  link
                </v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ catalog.endpoint }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  {{ $t("catalog_url") }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn 
                  icon 
                  ripple 
                  @click="openUrl(catalog.iri)"
                >
                  <v-icon color="blue">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </div>
      </div>
      <v-card-actions>
        <div>
          {{ $t("catalog_delete_summary_download") }}
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
import {exportToJsonLd} from "./export-catalog-delete";
import {downloadAsJsonLd} from "@/app-service/download";

export default {
  "name": "app-export-summary",
  "props": {
    "catalog": {"type": Object, "required": true}
  },
  "computed": {
    "nkodDatabox": function() {
      return NKOD_ISDS;
    }
  },
  "methods": {
    "onExport": function () {
      const jsonld = exportToJsonLd(this.catalog);
      downloadAsJsonLd(
        "nkod-odstranění-katalogu.jsonld.txt",jsonld)
    },
    "openUrl": function (url) {
      downloadUrl(url);
    }           
  }
}

function downloadUrl(uri) {
  window.open(uri);
}   

</script>

<style scoped>
    .multiline {
        white-space: pre-wrap;
    }
</style>
