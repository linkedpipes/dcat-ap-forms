<template>
  <v-flex xs12>
    <v-card>
      <v-card-title
        v-if="(distribution.title_cs.length > 0)
          || (distribution.title_en.length > 0)"
      >
        <h3
          v-if="distribution.title_cs.length > 0"
          class="headline mb-0"
        >
          {{ distribution.title_cs }}
        </h3> |
        <h3
          v-if="distribution.title_en.length > 0"
          class="headline mb-0"
        >
          {{ distribution.title_en }}
        </h3>
      </v-card-title>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm6
        >
          <v-list
            two-line
            subheader
          >
            <v-subheader>
              {{ $t('headline_distribution_license') }}
            </v-subheader>
            <v-list-item
              v-if="distribution.license_author_type == 'CC BY'"
            >
              <v-list-item-avatar>
                <v-icon class="green white--text">
                  turned_in
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_ccby_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_ccby_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ distribution.license_author_name }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://creativecommons.org/licenses/by/4.0/')"
                >
                  <v-icon color="green">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_author_type == 'NO'"
            >
              <v-list-item-avatar>
                <v-icon class="green white--text">
                  check
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_no_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_author_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/')"
                >
                  <v-icon color="green">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_author_type == 'MULTI'"
            >
              <v-list-item-avatar>
                <v-icon class="red white--text">
                  list
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_multi_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_multi_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_author_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/')"
                >
                  <v-icon color="red">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_author_type == 'CUSTOM'"
            >
              <v-list-item-avatar>
                <v-icon class="red white--text">
                  help
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_author_custom_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_author_custom_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ distribution.license_author_custom }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl(distribution.license_author_custom)"
                >
                  <v-icon color="red">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-list-item
              v-if="distribution.license_db_type == 'CC BY'"
            >
              <v-list-item-avatar>
                <v-icon class="green white--text">
                  turned_in
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_db_ccby_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_db_ccby_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ distribution.license_db_name }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://creativecommons.org/licenses/by/4.0/')"
                >
                  <v-icon color="green">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_db_type == 'NO'"
            >
              <v-list-item-avatar>
                <v-icon class="green white--text">
                  check
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_db_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_db_no_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_db_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/')"
                >
                  <v-icon color="green">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_db_type == 'CUSTOM'"
            >
              <v-list-item-avatar>
                <v-icon class="red white--text">
                  help
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_db_custom_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_db_custom_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ distribution.license_db_custom }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl(distribution.license_db_custom)"
                >
                  <v-icon color="red">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-list-item
              v-if="distribution.license_specialdb_type == 'CC0'"
            >
              <v-list-item-avatar>
                <v-icon class="green white--text">
                  turned_in
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_specialdb_cc0_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_specialdb_cc0_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_specialdb_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://creativecommons.org/publicdomain/zero/1.0/')"
                >
                  <v-icon color="green">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_specialdb_type == 'NO'"
            >
              <v-list-item-avatar>
                <v-icon class="green white--text">
                  check
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_specialdb_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_specialdb_no_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_specialdb_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/')"
                >
                  <v-icon color="green">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_specialdb_type == 'CUSTOM'"
            >
              <v-list-item-avatar>
                <v-icon class="red white--text">
                  help
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_specialdb_custom_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_specialdb_custom_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ distribution.license_specialdb_custom }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl(distribution.license_specialdb_custom)"
                >
                  <v-icon color="red">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_personal_type == 'NO'"
            >
              <v-list-item-avatar>
                <v-icon class="green white--text">
                  person
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_personal_no_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_personal_no_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_personal_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/')"
                >
                  <v-icon color="green">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_personal_type == 'YES'"
            >
              <v-list-item-avatar>
                <v-icon class="red white--text">
                  person
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_personal_yes_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_personal_yes_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_personal_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl('https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/')"
                >
                  <v-icon color="red">
                    help_outline
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item
              v-if="distribution.license_personal_type == 'UNKNOWN'"
            >
              <v-list-item-avatar>
                <v-icon class="red white--text">
                  help
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_personal_unknown_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_personal_unknown_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('license_personal_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-flex>
        <v-flex
          v-if="isFileDistribution"
          xs12
          sm6
        >
          <v-list
            two-line
            subheader
          >
            <v-subheader>
              {{ $t('headline_distribution_access') }}
            </v-subheader>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  cloud_download
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ distribution.url }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('distribution_download') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  text
                  icon
                  @click="downloadDistribution"
                >
                  <v-icon color="blue">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  description
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ mediaTypeLabel }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('media_type') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  text
                  icon
                  @click="openMediaType"
                >
                  <v-icon color="blue">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  description
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ formatLabel }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('distribution_format') }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-if="packageProvided"
            >
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  description
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ packageLabel }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('distribution_package_format') }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-if="compressionProvided"
            >
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  description
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ compressionLabel }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('distribution_compress_format') }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              v-if="schemaProvided"
            >
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  link
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ distribution.schema }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('distribution_schema') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  text
                  icon
                  @click="downloadSchema"
                >
                  <v-icon color="blue">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-flex>
        <v-flex
          v-if="isServiceDistribution"
          xs12
          sm6
        >
          <v-list
            two-line
            subheader
          >
            <v-subheader>
              {{ $t('headline_service_access') }}
            </v-subheader>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  cloud_download
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ distribution.service_endpoint_url }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('service_endpoint_url') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  text
                  icon
                  @click="openServiceEndpoint"
                >
                  <v-icon color="blue">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  description
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  {{ distribution.service_description }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $t('service_endpoint_description') }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  text
                  icon
                  @click="downloadServiceDescription"
                >
                  <v-icon color="blue">
                    open_in_new
                  </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
import {getStoreItem} from "../codelists/local-storage";
import {DIST_TYPE_FILE, DIST_TYPE_SERVICE} from "../../distribution-model";

export default {
  "name": "app-distribution-card",
  "props": {
    "distribution": {"type": Object, "required": true},
    "codelist": {"type": Object, "required": true},
  },
  "computed": {
    "isFileDistribution": function() {
      return this.distribution.type === DIST_TYPE_FILE;
    },
    "isServiceDistribution": function() {
      return this.distribution.type === DIST_TYPE_SERVICE;
    },
    "schemaProvided": function () {
      return this.distribution.schema !== null &&
                    this.distribution.schema.length > 0;
    },
    "packageProvided": function () {
      return this.distribution.package_format !== null &&
                    this.distribution.package_format.length > 0;
    },
    "compressionProvided": function () {
      return this.distribution.compress_format !== null &&
                    this.distribution.compress_format.length > 0;
    },
    "mediaTypeLabel": function () {
      const iri = this.distribution.media_type;
      const value = getStoreItem(
        this.codelist, "media-types", iri,
        this.$vuetify.lang.current);
      if (value === undefined) {
        return iri;
      } else {
        return value;
      }
    },
    "formatLabel": function () {
      const iri = this.distribution.format;
      const value = getStoreItem(
        this.codelist, "file-type", iri,
        this.$vuetify.lang.current);
      if (value === undefined) {
        return iri;
      } else {
        return value;
      }
    },
    "packageLabel" : function () {
      const iri = this.distribution.package_format;
      const value = getStoreItem(
        this.codelist, "media-types", iri,
        this.$vuetify.lang.current);
      if (value === undefined) {
        return iri;
      } else {
        return value;
      }
    },
    "compressionLabel" : function () {
      const iri = this.distribution.compress_format;
      const value = getStoreItem(
        this.codelist, "media-types", iri,
        this.$vuetify.lang.current);
      if (value === undefined) {
        return iri;
      } else {
        return value;
      }
    },
  },
  "methods": {
    "downloadDistribution": function () {
      downloadUrl(this.distribution.url);
    },
    "downloadSchema": function () {
      downloadUrl(this.distribution.schema);
    },
    "openMediaType": function () {
      downloadUrl(this.distribution.media_type);
    },
    "downloadServiceDescription": function () {
      downloadUrl(this.distribution.service_description);
    },
    "openServiceEndpoint": function() {
      downloadUrl(this.distribution.service_endpoint_url);
    },
    "openUrl": function (url) {
      downloadUrl(url);
    },
  },
};

function downloadUrl(uri) {
  window.open(uri);
}

</script>
