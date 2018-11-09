<template>
  <v-container 
    fluid 
    grid-list-lg 
    pa-0>
    <v-layout row>
      <v-flex v-if="!isValid">
        <v-alert 
          :value="!isValid" 
          outline 
          type="error">
          {{ $t('catalog_summary_error') }}
        </v-alert>
      </v-flex>
      <v-flex v-if="isValid">
        <v-alert 
          :value="isValid" 
          outline 
          type="success">
          {{ $t('catalog_summary_download') }}
          <code>{{ nkodDatabox }}</code>.
        </v-alert>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md10>
        <h2 class="display-1">{{ catalog.title }}</h2>
      </v-flex>
      <v-spacer/>
      <v-btn 
        :disabled="!isValid"
        class="hidden-xs-only"
        color="success"
        round
        outline 
        @click="onDownload">
        <v-icon left>file_download</v-icon>
        <span>{{ $t('button_download') }}</span>
      </v-btn>
    </v-layout>
    <v-list two-line>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon class="blue white--text">person</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ catalog.contact_point_name }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ $t('catalog_contact_point_name') }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>

      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon class="blue white--text">alternate_email</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ catalog.contact_point_email }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ $t('catalog_contact_point_email') }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn 
            icon 
            ripple 
            @click="sendEmail">
            <v-icon color="blue">alternate_email</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider/>

      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon class="blue white--text">category</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ typeToLabel(catalog.type, $vuetify.lang.current) }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ $t('catalog_type') }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider/>
      <v-list-tile avatar>
        <v-list-tile-avatar>
          <v-icon class="blue white--text">link</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ catalog.url }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ $t('catalog_url') }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn 
            icon 
            ripple 
            @click="openCatalog">
            <v-icon color="blue">open_in_new</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-divider class="my-2"/>
    <v-layout 
      row 
      class="mb-2">
      <v-spacer/>
      <v-tooltip bottom>
        <v-btn 
          slot="activator"
          :disabled="!isValid"
          color="success"
          round
          outline 
          @click="onDownload">
          <v-icon left>file_download</v-icon>
          <span>{{ $t('button_download') }}</span>
        </v-btn>
        <span v-if="isValid">
          {{ $t('summary_download') }}
          <code>{{ nkodDatabox }}</code>.
        </span>
        <span v-if="!isValid">{{ $t('summary_error') }}</span>
      </v-tooltip>
    </v-layout>
  </v-container>
</template>

<script>
    import {exportToJsonLd} from "./export-to-jsonld";
    import {downloadAsJsonLd} from "@/app-service/download";
    import {getLabel as typeToLabel} from "./codelists/catalog-type";

    export default {
        "name": "app-catalog-export-summary",
        "props": {
            "catalog": {"type": Object, "required": true},
            "isValid": {"type": Boolean, "required": true}
        },
        "computed": {
            "nkodDatabox": function() {
                return NKOD_ISDS;
            }
        },
        "methods": {
            "onDownload": function () {
                const jsonld = exportToJsonLd(this.catalog);
                downloadAsJsonLd("nkod-registrace-katalogu.jsonld.txt", jsonld)
            },
            "openCatalog": function() {
                window.open(this.catalog.url);
            },
            "sendEmail": function() {
                window.open("mailto:" + this.catalog.contact_point_email)
            },
            "typeToLabel": typeToLabel
        }
    }
</script>
