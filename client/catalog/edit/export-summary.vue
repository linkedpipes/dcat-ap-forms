<template>
  <v-container 
    fluid 
    grid-list-lg 
    pa-2
  >
    <v-layout row>
      <v-flex v-if="!isValid">
        <v-alert 
          :value="!isValid" 
          outlined
          type="error"
        >
          {{ $t('catalog_summary_error') }}
        </v-alert>
      </v-flex>
      <v-flex v-if="isValid">
        <v-alert 
          :value="isValid" 
          outlined
          type="success"
        >
          {{ $t('catalog_summary_download') }}
          <code>{{ nkodDatabox }}</code>.
        </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md10>
        <h2 class="display-1">
          {{ catalog.title_cs }}
          {{ catalog.title_en ? "| " + catalog.title_en : "" }}
        </h2>
      </v-flex>
      <v-spacer />
      <v-btn 
        :disabled="!isValid"
        class="hidden-xs-only"
        color="success"
        rounded
        outlined
        @click="onDownload"
      >
        <v-icon left>
          file_download
        </v-icon>
        <span>{{ $t('button_download') }}</span>
      </v-btn>
    </v-layout>
    <v-list two-line>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon class="blue white--text">
            person
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ catalog.contact_point_name }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t('catalog_contact_point_name') }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-avatar>
          <v-icon class="blue white--text">
            alternate_email
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ catalog.contact_point_email }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t('catalog_contact_point_email') }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn 
            icon 
            ripple 
            @click="sendEmail"
          >
            <v-icon color="blue">
              alternate_email
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider />
      <v-list-item>
        <v-list-item-avatar>
          <v-icon class="blue white--text">
            category
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ typeToLabel(catalog.type, $vuetify.lang.current) }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t('catalog_type') }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider />
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
            {{ $t('catalog_url') }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn 
            icon 
            ripple 
            @click="openCatalog"
          >
            <v-icon color="blue">
              open_in_new
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
      <v-divider v-if="catalog.homepage" />
      <v-list-item
        v-if="catalog.homepage"
        avatar
      >
        <v-list-item-avatar>
          <v-icon class="blue white--text">
            home
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ catalog.homepage }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $t('catalog_homepage') }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn
            icon
            ripple
            @click="openHomepage"
          >
            <v-icon color="blue">
              open_in_new
            </v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider class="my-2" />
    <v-layout 
      row 
      class="mb-2"
    >
      <v-spacer />
      <template #activator="{ on }">
        <v-tooltip bottom>
          <v-btn
            slot="activator"
            :disabled="!isValid"
            color="success"
            rounded
            outlined
            @click="onDownload"
            v-on="on"
          >
            <v-icon left>
              file_download
            </v-icon>
            <span>{{ $t('button_download') }}</span>
          </v-btn>
          <span v-if="isValid">
            {{ $t('summary_download') }}
            <code>{{ nkodDatabox }}</code>.
          </span>
          <span v-if="!isValid">{{ $t('summary_error') }}</span>
        </v-tooltip>
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import {exportCatalogToJsonLd} from "../export-catalog";
import {downloadAsJsonLd} from "../../app-service/download";
import {getCatalogTypeLabel} from "./codelists/catalog-type";

export default {
  "name": "AppCatalogExportSummary",
  "props": {
    "catalog": {"type": Object, "required": true},
    "isValid": {"type": Boolean, "required": true},
  },
  "computed": {
    "nkodDatabox": function () {
      return NKOD_ISDS;
    },
  },
  "methods": {
    "onDownload": function () {
      const jsonld = exportCatalogToJsonLd(this.catalog);
      downloadAsJsonLd("nkod-registrace-katalogu.jsonld.txt", jsonld);
    },
    "openCatalog": function () {
      window.open(this.catalog.iri);
    },
    "openHomepage": function () {
      window.open(this.catalog.homepage);
    },
    "sendEmail": function () {
      window.open("mailto:" + this.catalog.contact_point_email);
    },
    "typeToLabel": getCatalogTypeLabel,
  },
};
</script>
