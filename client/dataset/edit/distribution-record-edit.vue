<template>
  <v-container
    fluid
    grid-list-lg
    pa-0
  >
    <h2 class="headline">
      {{ $t('headline_distribution_license') }}
      <a
        href="https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti"
        target="_blank"
        class="info_link"
      >
        <v-icon
          color="blue"
          size="1.5rem"
          class="info_icon"
        >
          help_outline
        </v-icon>
      </a>
    </h2>
    <div>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md4
        >
          <v-select
            v-model="distribution.license_author_type"
            :items="author_license_types"
            :label="$t('license_author_type')"
            :item-text="$vuetify.lang.current"
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_1"
            required
            @click:append-outer="$h('license_author_type')"
          />
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            id="distribution_license_author_name"
            v-model="distribution.license_author_name"
            :disabled="!isCcByAuthor"
            :required="isCcByAuthor"
            :label="$t('license_author_name')"
            :hint="$t('hint_license_author_name')"
            :error-messages="err_license_author_name"
            append-outer-icon="help_outline"
            prepend-icon="people"
            clearable
            @click:append-outer="$h('license_author_name')"
          />
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            id="distribution_license_author_custom"
            v-model="distribution.license_author_custom"
            :disabled="!isCustomAuthor"
            :required="isCustomAuthor"
            :label="$t('license_author_custom')"
            :hint="$t('hint_license_author_custom')"
            :error-messages="err_license_author_custom"
            append-outer-icon="help_outline"
            prepend-icon="link"
            type="url"
            clearable
            @click:append-outer="$h('license_author_custom')"
          />
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md4
        >
          <v-select
            v-model="distribution.license_db_type"
            :items="db_author_license_types"
            :label="$t('license_db_type')"
            :item-text="$vuetify.lang.current"
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_2"
            required
            @click:append-outer="$h('license_db_type')"
          />
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            id="distribution_license_db_name"
            v-model="distribution.license_db_name"
            :disabled="!isCcByDb"
            :required="isCcByDb"
            :label="$t('license_db_name')"
            :hint="$t('hint_license_db_name')"
            :error-messages="err_license_db_name"
            append-outer-icon="help_outline"
            prepend-icon="people"
            clearable
            @click:append-outer="$h('license_db_name')"
          />
        </v-flex>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            id="distribution_license_db_custom"
            v-model="distribution.license_db_custom"
            :disabled="!isCustomDb"
            :required="isCustomDb"
            :label="$t('license_db_custom')"
            :hint="$t('hint_license_db_custom')"
            :error-messages="err_license_db_custom"
            append-outer-icon="help_outline"
            prepend-icon="link"
            type="url"
            clearable
            @click:append-outer="$h('license_db_custom')"
          />
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md4
        >
          <v-select
            v-model="distribution.license_specialdb_type"
            :items="db_special_license_types"
            :label="$t('license_specialdb_type')"
            :item-text="$vuetify.lang.current"
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_3"
            required
            @click:append-outer="$h('license_specialdb_type')"
          />
        </v-flex>
        <v-flex
          xs12
          md4
        />
        <v-flex
          xs12
          md4
        >
          <v-text-field
            id="distribution_license_specialdb_custom"
            v-model="distribution.license_specialdb_custom"
            :disabled="!isCustomSpecialDb"
            :required="isCustomSpecialDb"
            :label="$t('license_specialdb_custom')"
            :hint="$t('hint_license_specialdb_custom')"
            :error-messages="err_license_specialdb_custom"
            append-outer-icon="help_outline"
            prepend-icon="link"
            type="url"
            clearable
            @click:append-outer="$h('license_specialdb_custom')"
          />
        </v-flex>
      </v-layout>
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          md4
        >
          <v-select
            v-model="distribution.license_personal_type"
            :items="personal_data_links"
            :label="$t('license_personal_type')"
            :item-text="$vuetify.lang.current"
            :error-messages="err_personal"
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_4"
            required
            @click:append-outer="$h('license_personal_type')"
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
      <v-text-field
        id="endpoint_description"
        v-model="distribution.service_description"
        :label="$t('service_endpoint_description')"
        :hint="$t('hint_endpoint_description')"
        :error-messages="err_service"
        prepend-icon="link"
        append-outer-icon="help_outline"
        required
        type="url"
        clearable
        @click:append-outer="$h('endpoint_description')"
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
import DatePicker from "./components/date-picker";
import SolrAutocomplete from "./components/solr-autocomplete";
import {FILE_TYPE, MEDIA_TYPES} from "./codelists/server-codelists";

export default {
  "name": "app-distribution-record-edit",
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
