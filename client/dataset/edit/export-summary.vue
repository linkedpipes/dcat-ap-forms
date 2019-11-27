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
          outline
          type="error"
        >
          {{ $t('summary_error') }}
        </v-alert>
      </v-flex>
      <v-flex v-if="isValid">
        <v-alert
          :value="isValid"
          outline
          type="success"
        >
          {{ $t('summary_download') }}
          <code>{{ nkodDatabox }}</code>.
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md10>
        <h2 class="display-1">
          {{ dataset.title }}
        </h2>
      </v-flex>
      <v-spacer />
      <v-btn
        :disabled="!isValid"
        class="hidden-xs-only"
        round
        outline
        color="success"
        @click="onDownload"
      >
        <v-icon left>
          file_download
        </v-icon>
        <span>{{ $t('button_download') }}</span>
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
          <v-list-tile
            v-if="dataset.dataset_themes.length || dataset.dataset_custom_themes.length"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                category
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <span
                  v-for="(theme, index) in dataset.dataset_themes"
                  :key="theme"
                >
                  {{ index > 0 ? ", " : "" }}
                  {{ datasetThemeToLabel(theme, $vuetify.lang.current) }}
                </span>
                <span v-if="dataset.dataset_themes.length && dataset.dataset_custom_themes.length">, </span>
                <span
                  v-for="(theme, index) in dataset.dataset_custom_themes"
                  :key="theme"
                >
                  {{ index > 0 ? ", " : "" }}
                  {{ theme }}
                </span>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('dataset_theme') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="dataset.dataset_themes.length" />
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                snooze
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ frequencyToLabel(
                  dataset.accrual_periodicity, $vuetify.lang.current)
                }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('accrual_periodicity') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider />
          <v-list-tile
            v-if="dataset.keywords.length"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                short_text
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
               <span
                    v-for="(keyword, index) in dataset.keywords"
                    :key="keyword"
                  >
                  {{ index > 0 ? ", " : "" }}
                  {{ keyword.cs }} | {{ keyword.en }}
                </span>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('keywords') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="dataset.keywords.length" />
          <v-list-tile
            v-if="dataset.contact_point_name"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                person
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ dataset.contact_point_name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('contact_point_name') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-if="dataset.contact_point_name"
            avatar
          />
          <v-list-tile v-if="dataset.contact_point_email">
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                alternate_email
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ dataset.contact_point_email }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('contact_point_email') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                ripple
                @click="openUrl('mailto:' + dataset.contact_point_email)"
              >
                <v-icon color="blue">
                  alternate_email
                </v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="dataset.contact_point_email" />
          <v-list-tile
            v-if="dataset.documentation"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                description
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ dataset.documentation }}
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('documentation') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn
                icon
                ripple
                @click="openDocumentation"
              >
                <v-icon color="blue">
                  open_in_new
                </v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider v-if="dataset.documentation" />
          <v-list-tile
            v-if="dataset.spatial"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                place
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <span v-for="(item, index) in dataset.spatial" :key="item">
                  {{ index > 0 ? ", " : "" }}
                  <span v-if="item.type === 'RUIAN'">
                    {{ ruianLabel(item.ruian) }}
                  </span>
                  <span v-else-if="item.type==='COUNTRY' || item.type==='CONTINENT' || item.type==='PLACE'">
                    {{ item.label }}
                  </span>
                  <span v-else>
                    {{ item.url }}
                  </span>
                </span>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('dataset_spatial') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider v-if="dataset.ruian" />
          <v-list-tile
            v-if="dataset.temporal_start || dataset.temporal_end"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                calendar_today
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ dataset.temporal_start }}
                <span v-if="dataset.temporal_end">
                  - {{ dataset.temporal_end }}
                </span>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('temporal') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider
            v-if="dataset.temporal_start || dataset.temporal_end"
          />
          <v-list-tile
            v-if="dataset.themes.length"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon class="blue white--text">
                euro_symbol
              </v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <span
                  v-for="(theme, index) in dataset.themes"
                  :key="theme"
                >
                  {{ index > 0 ? "," : "" }}
                  {{ themeToLabel(theme) }}
                </span>
              </v-list-tile-title>
              <v-list-tile-sub-title>
                {{ $t('themes') }}
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
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
    <v-layout row>
      <v-spacer />
      <v-tooltip bottom>
        <v-btn
          slot="activator"
          :disabled="!isValid"
          round
          color="success"
          outline
          @click="onDownload"
        >
          <v-icon left>
            file_download
          </v-icon>
          <span>{{ $t('button_download') }}</span>
        </v-btn>
        <span v-if="isValid">{{ $t('summary_download') }}
          <code>{{ nkodDatabox }}</code>.
        </span>
        <span v-if="!isValid">{{ $t('summary_error') }}</span>
      </v-tooltip>
    </v-layout>
  </v-container>
</template>

<script>
import {exportToJsonLd} from "./export-dataset-edit";
import {downloadAsJsonLd} from "@/app-service/download";
import DistributionCard from "./ui/distribution-card";
import {getLabel as datasetThemeToLabel} from "./codelists/dataset-theme";
import {getLabel as frequencyToLabel} from "./codelists/frequencies.js";
import {getItem} from "./codelists/local-storage";

export default {
  "name": "app-export-summary",
  "components": {
    "app-distribution-card": DistributionCard
  },
  "props": {
    "dataset": {"type": Object, "required": true},
    "distributions": {"type": Array, "required": true},
    "isValid": {"type": Boolean, "required": true},
    "codelist": {"type": Object, "required": true}
  },
  "computed": {
    "nkodDatabox": function () {
      return NKOD_ISDS;
    }
  },
  "methods": {
    "ruianLabel": function (iri) {
      const value = getItem(
        this.codelist, "ruian", iri, this.$vuetify.lang.current);
      if (value === undefined) {
        return iri;
      } else {
        return value;
      }
    },
    "onDownload": function () {
      const jsonld = exportToJsonLd(this.dataset, this.distributions);
      downloadAsJsonLd("nkod-registrace.jsonld.txt", jsonld)
    },
    "openDocumentation": function () {
      downloadUrl(this.dataset.documentation);
    },
    "openRuian": function () {
      downloadUrl(this.dataset.ruian);
    },
    "datasetThemeToLabel": datasetThemeToLabel,
    "frequencyToLabel": frequencyToLabel,
    "themeToLabel": function (iri) {
      const value = getItem(
        this.codelist, "themes", iri, this.$vuetify.lang.current);
      if (value === undefined) {
        return iri;
      } else {
        return value;
      }
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
