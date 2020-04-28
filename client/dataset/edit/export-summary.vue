<template>
  <v-container
    fluid
    grid-list-lg
    pa-0
  >
    <v-layout row>
      <v-flex v-if="!isValid">
        <v-alert
          :value="!isValid"
          outlined
          type="error"
        >
          {{ $t("summary_error") }}
        </v-alert>
      </v-flex>
      <v-flex v-if="isValid">
        <v-alert
          :value="isValid"
          outlined
          type="success"
        >
          {{ $t("summary_download") }}
          <code>{{ nkodDatabox }}</code>.
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout
      row
      class="pr-2"
    >
      <h2 class="display-1">
        {{ dataset.title }}
      </h2>
      <v-spacer />
      <v-btn
        :disabled="!isValid"
        class="hidden-xs-only"
        rounded
        outlined
        color="success"
        @click="onDownload"
      >
        <v-icon left>
          file_download
        </v-icon>
        <span>{{ $t("button_download") }}</span>
      </v-btn>
    </v-layout>
    <p class="subheading multiline">
      {{ dataset.description }}
    </p>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        lg6
      >
        <v-list
          two-line
          subheader
        >
          <v-list-item
            v-if="dataset.dataset_themes.length
              || dataset.dataset_custom_themes.length"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                category
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <span
                  v-for="(theme, index) in dataset.dataset_themes"
                  :key="theme"
                >
                  {{ index > 0 ? ", " : "" }}
                  {{ datasetThemeToLabel(theme, $vuetify.lang.current) }}
                </span>
                <span
                  v-if="dataset.dataset_themes.length
                    && dataset.dataset_custom_themes.length"
                >, </span>
                <span
                  v-for="(theme, index) in dataset.dataset_custom_themes"
                  :key="theme"
                >
                  {{ index > 0 ? ", " : "" }}
                  {{ theme }}
                </span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("dataset_theme") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="dataset.dataset_themes.length" />
          <v-list-item>
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                snooze
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ frequencyToLabel(
                  dataset.accrual_periodicity, $vuetify.lang.current)
                }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("accrual_periodicity") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item
            v-if="keywords.length"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                short_text
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <span
                  v-for="(keyword, index) in keywords"
                  :key="keyword"
                >
                  {{ index > 0 ? ", " : "" }}
                  {{ keyword }}
                </span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("keywords") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="keywords.length" />
          <v-list-item
            v-if="dataset.contact_point_name"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                person
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ dataset.contact_point_name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("contact_point_name") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="dataset.contact_point_name"
          />
          <v-list-item v-if="dataset.contact_point_email">
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                alternate_email
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ dataset.contact_point_email }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("contact_point_email") }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                ripple
                @click="openUrl('mailto:' + dataset.contact_point_email)"
              >
                <v-icon color="blue">
                  alternate_email
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="dataset.contact_point_email" />
          <v-list-item
            v-if="dataset.documentation"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                description
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ dataset.documentation }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("documentation") }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                ripple
                @click="openDocumentation"
              >
                <v-icon color="blue">
                  open_in_new
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
          <v-divider v-if="dataset.documentation" />
          <v-list-item>
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                place
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <span
                  v-for="(item, index) in dataset.spatial"
                  :key="item.url"
                >
                  {{ index > 0 ? ", " : "" }}
                  <span>
                    {{ spatialToLabel(item) }}
                  </span>
                </span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("dataset_spatial") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider />
          <v-list-item
            v-if="dataset.temporal_start || dataset.temporal_end"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                calendar_today
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ dataset.temporal_start }}
                <span v-if="dataset.temporal_end">
                  - {{ dataset.temporal_end }}
                </span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("temporal") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="dataset.temporal_start || dataset.temporal_end"
          />
          <v-list-item
            v-if="dataset.temporal_resolution"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                calendar_today
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ dataset.temporal_resolution }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("temporal_resolution") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="dataset.temporal_resolution"
          />
          <v-list-item
            v-if="dataset.spatial_resolution_meters"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                zoom_out_map
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ dataset.spatial_resolution_meters }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("spatial_resolution_meters") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider
            v-if="dataset.spatial_resolution_meters"
          />
          <v-list-item
            v-if="dataset.themes.length"
          >
            <v-list-item-avatar>
              <v-icon class="blue white--text">
                euro_symbol
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                <span
                  v-for="(theme, index) in dataset.themes"
                  :key="theme"
                >
                  {{ index > 0 ? "," : "" }}
                  {{ themeToLabel(theme) }}
                </span>
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ $t("themes") }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="dataset.themes.length" />
        </v-list>
      </v-flex>
      <v-flex
        xs12
        lg6
      >
        <v-layout
          row
          wrap
        >
          <app-distribution-card
            v-for="(item, index) in distributions"
            :key="index"
            :distribution="item"
            :codelist="codelist"
          />
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider class="my-2" />
    <v-layout
      row
      class="pr-2"
    >
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn
            :disabled="!isValid"
            rounded
            color="success"
            outlined
            v-on="on"
            @click="onDownload"
          >
            <v-icon left>
              file_download
            </v-icon>
            <span>{{ $t("button_download") }}</span>
          </v-btn>
        </template>
        <span v-if="isValid">{{ $t("summary_download") }}
          <code>{{ nkodDatabox }}</code>.
        </span>
        <span v-if="!isValid">{{ $t("summary_error") }}</span>
      </v-tooltip>
    </v-layout>
  </v-container>
</template>

<script>
import {exportToJsonLd} from "../export-dataset";
import {downloadAsJsonLd} from "../../app-service/download";
import DistributionCard from "./ui/distribution-card";
import {getStoreLabel} from "./codelists/local-storage";
import {getDatasetThemeLabel} from "./codelists/dataset-theme";
import {getFrequencyLabel} from "./codelists/frequencies.js";
import {RUIAN, EUROVOC} from "./codelists/solr-cores";
import {getSpatialLabel} from "./codelists/spatial";

export default {
  "name": "app-export-summary",
  "components": {
    "app-distribution-card": DistributionCard,
  },
  "props": {
    "dataset": {"type": Object, "required": true},
    "distributions": {"type": Array, "required": true},
    "isValid": {"type": Boolean, "required": true},
    "codelist": {"type": Object, "required": true},
  },
  "computed": {
    "nkodDatabox": function () {
      return NKOD_ISDS;
    },
    "keywords": function() {
      return [...this.dataset.keywords_cs, ...this.dataset.keywords_en];
    },
  },
  "methods": {
    "ruianLabel": function (iri) {
      return getStoreLabel(
        this.codelist, RUIAN, iri, this.$vuetify.lang.current);
    },
    "onDownload": function () {
      const jsonld = exportToJsonLd(this.dataset, this.distributions);
      downloadAsJsonLd("nkod-registrace.jsonld.txt", jsonld);
    },
    "openDocumentation": function () {
      openUrl(this.dataset.documentation);
    },
    "openRuian": function () {
      openUrl(this.dataset.ruian);
    },
    "datasetThemeToLabel": getDatasetThemeLabel,
    "frequencyToLabel": getFrequencyLabel,
    "themeToLabel": function (iri) {
      return getStoreLabel(
        this.codelist, EUROVOC, iri, this.$vuetify.lang.current);
    },
    "spatialToLabel": function(item) {
      return getSpatialLabel(this.codelist, item, this.$vuetify.lang.current);
    },
    "openUrl": function (url) {
      openUrl(url);
    },
  },
};

function openUrl(uri) {
  window.open(uri);
}

</script>

<style scoped>
  .multiline {
    white-space: pre-wrap;
  }
</style>
