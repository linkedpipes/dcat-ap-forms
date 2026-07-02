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
        <div v-show="commitByDownload">
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
          <span>{{ submitButtonTitle }}</span>
        </v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
import {configuration} from "../../client-configuration";
import {
  postOnSubmit,
  submitCatalogDelete,
  downloadCatalogDelete,
} from "./catalog-delete-service";

export default {
  "name": "AppExportSummary",
  "props": {
    "catalog": {"type": Object, "required": true},
  },
  "computed": {
    "nkodDatabox": function () {
      return configuration.databox;
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
    "commitByDownload": function () {
      return !postOnSubmit(this.$route);
    },
    "submitButtonTitle": function () {
      if (this.commitByDownload) {
        return this.$t("button_summary_delete_download");
      } else {
        return this.$t("button_summary_delete_post");
      }
    },
  },
  "methods": {
    "onExport": function () {
      if (this.commitByDownload) {
        downloadCatalogDelete(this.catalog);
      } else {
        submitCatalogDelete(this.catalog, this.$route);
      }
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
