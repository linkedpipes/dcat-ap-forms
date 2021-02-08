<template>
  <v-container
    fluid
    grid-list-lg
    pa-0
  >
    <h2 class="headline">
      {{ $t('headline_distribution_license') }}
    </h2>
    <div>
      <v-layout
        row
        wrap
      >
        <v-flex>
          <v-text-field
            id="distribution_license_dcatap"
            v-model="distribution.license_dcatap"
            :required="true"
            :label="$t('license_dcatap')"
            :hint="$t('hint_license_dcatap')"
            :error-messages="err_license_dcatap"
            append-outer-icon="help_outline"
            prepend-icon="link"
            type="url"
            clearable
            @click:append-outer="$h('license_dcatap')"
          />
        </v-flex>
      </v-layout>
    </div>
    <v-divider />
    <h2 class="headline mt-2">
      {{ $t('headline_access') }}
    </h2>
    <div>
      <v-select
        v-model="distribution.type"
        :items="distribution_types"
        item-value="value"
        :item-text="$vuetify.lang.current"
        prepend-icon="sync_alt"
        append-outer-icon="help_outline"
        :hint="$t('hint_file_or_service')"
        :label="$t('distribution_type')"
        @click:append-outer="$h('file_or_service')"
      />
    </div>
    <div v-if="isFileDistribution">
      <v-text-field
        id="distribution_url"
        v-model="distribution.url"
        :label="$t('distribution_url')"
        :hint="$t('hint_distribution_url')"
        :error-messages="err_url"
        prepend-icon="cloud_download"
        append-outer-icon="help_outline"
        required
        type="url"
        clearable
        @click:append-outer="$h('distribution_url')"
      />
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
        >
          <app-solr-autocomplete
            id="distribution_format"
            v-model="distribution.format"
            :label="$t('distribution_format')"
            :no-data-prompt="$t('format_autocomplete_no_data')"
            :error-messages="err_format"
            prepend-icon="description"
            :code-list="FILE_TYPE"
          />
        </v-flex>
        <v-flex
          xs12
          md6
        >
          <app-solr-autocomplete
            id="distribution_media_type"
            v-model="distribution.media_type"
            :label="$t('distribution_media_type')"
            :no-data-prompt="$t('media_type_autocomplete_no_data')"
            :error-messages="err_media_type"
            prepend-icon="description"
            :code-list="MEDIA_TYPES"
          />
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
        >
          <app-solr-autocomplete
            id="distribution_compress_format"
            v-model="distribution.compress_format"
            :label="$t('distribution_compress_format') + $t('optional')"
            :no-data-prompt="$t('media_type_autocomplete_no_data')"
            prepend-icon="description"
            :code-list="MEDIA_TYPES"
            clearable
          />
        </v-flex>
        <v-flex
          xs12
          md6
        >
          <app-solr-autocomplete
            id="distribution_package_format"
            v-model="distribution.package_format"
            :label="$t('distribution_package_format') + $t('optional')"
            :no-data-prompt="$t('media_type_autocomplete_no_data')"
            prepend-icon="description"
            :code-list="MEDIA_TYPES"
            clearable
          />
        </v-flex>
      </v-layout>
      <v-text-field
        id="distribution_schema"
        v-model="distribution.schema"
        :label="$t('distribution_schema_link') + $t('optional')"
        :hint="$t('hint_distribution_schema')"
        :error-messages="err_schema"
        prepend-icon="link"
        append-outer-icon="help_outline"
        type="url"
        clearable
        @click:append-outer="$h('distribution_schema_link')"
      />
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
        >
          <v-text-field
            id="distribution_title_cs"
            v-model="distribution.title_cs"
            :hint="$t('hint_distribution_title')"
            :label="$t('distribution_title_cs') + $t('optional')"
            prepend-icon="label"
            append-outer-icon="help_outline"
            clearable
            @click:append-outer="$h('distribution_title')"
          />
        </v-flex>
        <v-flex
          xs12
          md6
        >
          <v-text-field
            id="distribution_title_en"
            v-model="distribution.title_en"
            :hint="$t('hint_distribution_title')"
            :label="$t('distribution_title_en') + $t('optional')"
            prepend-icon="label"
            append-outer-icon="help_outline"
            clearable
            @click:append-outer="$h('distribution_title')"
          />
        </v-flex>
      </v-layout>
    </div>
    <div v-else>
      <v-text-field
        id="endpoint_url"
        v-model="distribution.service_endpoint_url"
        :label="$t('service_endpoint_url')"
        :hint="$t('hint_endpoint_url')"
        :error-messages="err_endpoint"
        prepend-icon="cloud_download"
        append-outer-icon="help_outline"
        required
        type="url"
        clearable
        @click:append-outer="$h('endpoint_url')"
      />
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
        >
          <v-text-field
            id="endpoint_description"
            v-model="distribution.service_description"
            :label="$t('service_endpoint_description')"
            :hint="$t('hint_endpoint_description')"
            :error-messages="err_description"
            prepend-icon="link"
            append-outer-icon="help_outline"
            required
            type="url"
            clearable
            @click:append-outer="$h('endpoint_description')"
          />
        </v-flex>
        <v-flex
          xs12
          md6
        >
          <v-text-field
            id="service_conforms_to"
            v-model="distribution.service_conforms_to"
            :label="$t('service_conforms_to') + $t('optional')"
            :hint="$t('hint_service_conforms_to')"
            :error-messages="err_conforms_to"
            prepend-icon="link"
            append-outer-icon="help_outline"
            type="url"
            clearable
            @click:append-outer="$h('service_conforms_to')"
          />
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md6
        >
          <v-text-field
            id="distribution_title_cs"
            v-model="distribution.title_cs"
            :hint="$t('hint_distribution_title')"
            :label="$t('distribution_title_cs')"
            :error-messages="err_title"
            prepend-icon="label"
            append-outer-icon="help_outline"
            clearable
            required
            @click:append-outer="$h('distribution_title')"
          />
        </v-flex>
        <v-flex
          xs12
          md6
        >
          <v-text-field
            id="distribution_title_en"
            v-model="distribution.title_en"
            :hint="$t('hint_distribution_title')"
            :label="$t('distribution_title_en') + $t('optional')"
            prepend-icon="label"
            append-outer-icon="help_outline"
            clearable
            @click:append-outer="$h('distribution_title')"
          />
        </v-flex>
      </v-layout>
    </div>
    <div v-if="canBeDeleted">
      <v-btn
        text
        @click="onDelete"
      >
        <v-icon color="error">
          delete
        </v-icon>
        {{ $t('delete_distribution') }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import DatePicker from "./components/date-picker";
import SolrAutocomplete from "./components/solr-autocomplete";
import {
  createDistributionValidators,
  DIST_TYPE_FILE,
  DIST_TYPE_SERVICE,
} from "../distribution-model";
import {
  authorLicenseTypes,
  dbAuthorLicenseTypes,
  dbSpecialLicenseTypes,
  personalDataTypes,
} from "./codelists/license";
import {FILE_TYPE, MEDIA_TYPES} from "./codelists/server-codelists";

export default {
  "name": "AppDistributionRecordEdit",
  "components": {
    "app-date-picker": DatePicker,
    "app-solr-autocomplete": SolrAutocomplete,
  },
  "props": {
    "distribution": {"type": Object, "required": true},
    "canBeDeleted": {"type": Boolean, "required": true},
  },
  "data": () => ({
    "author_license_types": authorLicenseTypes,
    "db_author_license_types": dbAuthorLicenseTypes,
    "db_special_license_types": dbSpecialLicenseTypes,
    "personal_data_links": personalDataTypes,
    "distribution_types": [
      {
        "value": DIST_TYPE_FILE,
        "cs": "Soubor ke stažení",
        "en": "Downloadable file",
      },
      {
        "value": DIST_TYPE_SERVICE,
        "cs": "Datová služba",
        "en":"Data Service",
      },
    ],
    "FILE_TYPE": FILE_TYPE,
    "MEDIA_TYPES": MEDIA_TYPES,
  }),
  "computed": {
    ...createDistributionValidators(),
    "isCcByAuthor": function () {
      return this.distribution.license_author_type === "CC BY";
    },
    "isCustomAuthor": function () {
      return this.distribution.license_author_type === "CUSTOM";
    },
    "isCcByDb": function () {
      return this.distribution.license_db_type === "CC BY";
    },
    "isCustomDb": function () {
      return this.distribution.license_db_type === "CUSTOM";
    },
    "isCustomSpecialDb": function () {
      return this.distribution.license_specialdb_type === "CUSTOM";
    },
    "isFileDistribution": function() {
      return this.distribution.type === DIST_TYPE_FILE;
    },
  },
  "methods": {
    "onDelete": function () {
      this.$emit("delete");
    },
  },
};
</script>

<style scoped>
    .info_link {
        text-decoration-line: None;
    }
    .info_icon {
        vertical-align: text-top;
    }
</style>
