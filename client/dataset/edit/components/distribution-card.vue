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
        </h3>
        <h3
          v-if="distribution.title_en.length > 0"
          class="headline mb-0"
        >
          | {{ distribution.title_en }}
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
            <v-list-item>
              <v-list-item-avatar>
                <v-icon class="blue white--text">
                  check
                </v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <span class="hidden-lg-and-down">
                    {{ $t('license_dcatap_full') }}
                  </span>
                  <span class="hidden-xl-only">
                    {{ $t('license_dcatap_short') }}
                  </span>
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ distribution.license_dcatap }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  icon
                  ripple
                  @click="openUrl(distribution.license_dcatap)"
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
import {getStoreLabel} from "../codelists/local-storage";
import {DIST_TYPE_FILE, DIST_TYPE_SERVICE} from "../../distribution-model";
import {MEDIA_TYPES, FILE_TYPE} from "../codelists/server-codelists";

export default {
  "name": "AppDistributionCard",
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
      return getStoreLabel(
        this.codelist, MEDIA_TYPES, iri,
        this.$vuetify.lang.current);
    },
    "formatLabel": function () {
      const iri = this.distribution.format;
      return getStoreLabel(
        this.codelist, FILE_TYPE, iri,
        this.$vuetify.lang.current);
    },
    "packageLabel" : function () {
      const iri = this.distribution.package_format;
      return getStoreLabel(
        this.codelist, MEDIA_TYPES, iri,
        this.$vuetify.lang.current);
    },
    "compressionLabel" : function () {
      const iri = this.distribution.compress_format;
      return getStoreLabel(
        this.codelist, MEDIA_TYPES, iri,
        this.$vuetify.lang.current);
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
