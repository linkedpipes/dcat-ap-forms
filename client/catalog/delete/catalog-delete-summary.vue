<template>
  <v-card>
    <v-container fluid>
      <div>
        <div class="headline">
          {{ $t("catalog_delete_page_title") }}
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
                  {{ title }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t("catalog_title_cs") }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  link
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ catalog.endpoint }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t("catalog_url") }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrlInNewWindow(catalog.iri)"
                >
                  <v-icon color="blue">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
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
import {exportToJsonLdForDelete} from "../export-catalog";
import {downloadAsJsonLd} from "../../app-service/download";

export default {
  "name": "app-export-summary",
  "props": {
    "catalog": {"type": Object, "required": true},
  },
  "computed": {
    "nkodDatabox": function () {
      return NKOD_ISDS;
    },
    "title": function () {
      const lang = this.$vuetify.lang.current;
      const propName = "title_" + lang;
      return getNonEmpty(
        this.catalog[propName],
        this.catalog.title_cs,
        this.catalog.title_en
      );
    },
  },
  "methods": {
    "onExport": function () {
      const jsonld = exportToJsonLdForDelete(this.catalog);
      downloadAsJsonLd("nkod-odstranění-katalogu.jsonld.txt", jsonld);
    },
    "openUrlInNewWindow": function (url) {
      window.open(url);
    },
  },
};

function getNonEmpty(...items) {
  for (let item of items) {
    if (item && item !== "") {
      return item;
    }
  }
  return "";
}
</script>
