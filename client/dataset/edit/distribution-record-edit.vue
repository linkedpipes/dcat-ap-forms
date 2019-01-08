<template>
  <v-container 
    fluid 
    grid-list-lg 
    pa-0>
    <h2 class="headline">
      {{ $t('headline_distribution_license') }}
      <a 
        href="https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti" 
        target="_blank" 
        class="info_link">
        <v-icon 
          color="blue" 
          size="1.5rem" 
          class="info_icon">
          help_outline
        </v-icon>
      </a>
    </h2>
    <div>
      <v-layout 
        row 
        wrap>
        <v-flex 
          xs12 
          md4>
          <v-select
            :items="author_license_types"
            v-model="distribution.license_author_type"
            :label="$t('license_author_type')"
            :item-text="$vuetify.lang.current" 
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_1"
            required
            @click:append-outer="$h('license_author_type')"/>
        </v-flex>
        <v-flex 
          xs12 
          md4>
          <v-text-field
            id="distribution_license_author_name"
            :disabled="!isCcByAuthor"
            :required="isCcByAuthor"
            v-model="distribution.license_author_name"
            :label="$t('license_author_name')"
            :hint="$t('hint_license_author_name')"
            :error-messages="err_license_author_name"
            append-outer-icon="help_outline"
            prepend-icon="people"
            clearable
            @click:append-outer="$h('license_author_name')"/>
        </v-flex>
        <v-flex 
          xs12 
          md4>
          <v-text-field
            id="distribution_license_author_custom"
            :disabled="!isCustomAuthor"
            :required="isCustomAuthor"
            v-model="distribution.license_author_custom"
            :label="$t('license_author_custom')"
            :hint="$t('hint_license_author_custom')"
            :error-messages="err_license_author_custom"
            append-outer-icon="help_outline"
            prepend-icon="link"
            type="url"
            clearable 
            @click:append-outer="$h('license_author_custom')"/>
        </v-flex>
      </v-layout>
      <v-layout
        row 
        wrap>
        <v-flex 
          xs12 
          md4>
          <v-select
            :items="db_author_license_types"
            v-model="distribution.license_db_type"
            :label="$t('license_db_type')"
            :item-text="$vuetify.lang.current" 
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_2"
            required
            @click:append-outer="$h('license_db_type')"/>
        </v-flex>
        <v-flex 
          xs12 
          md4>
          <v-text-field
            id="distribution_license_db_name"
            :disabled="!isCcByDb"
            :required="isCcByDb"
            v-model="distribution.license_db_name"
            :label="$t('license_db_name')"
            :hint="$t('hint_license_db_name')"
            :error-messages="err_license_db_name"
            append-outer-icon="help_outline"
            prepend-icon="people"
            clearable
            @click:append-outer="$h('license_db_name')"/>
        </v-flex>
        <v-flex 
          xs12 
          md4>
          <v-text-field
            id="distribution_license_db_custom"
            :disabled="!isCustomDb"
            :required="isCustomDb"
            v-model="distribution.license_db_custom"
            :label="$t('license_db_custom')"
            :hint="$t('hint_license_db_custom')"
            :error-messages="err_license_db_custom"
            append-outer-icon="help_outline"
            prepend-icon="link"
            type="url"
            clearable 
            @click:append-outer="$h('license_db_custom')"/>
        </v-flex>
      </v-layout>
      <v-layout
        row 
        wrap>
        <v-flex 
          xs12 
          md4>
          <v-select
            :items="db_special_license_types"
            v-model="distribution.license_specialdb_type"
            :label="$t('license_specialdb_type')"
            :item-text="$vuetify.lang.current" 
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_3"
            required
            @click:append-outer="$h('license_specialdb_type')"/>
        </v-flex>
        <v-flex 
          xs12 
          md4/>
        <v-flex 
          xs12 
          md4>
          <v-text-field
            id="distribution_license_specialdb_custom"
            :disabled="!isCustomSpecialDb"
            :required="isCustomSpecialDb"
            v-model="distribution.license_specialdb_custom"
            :label="$t('license_specialdb_custom')"
            :hint="$t('hint_license_specialdb_custom')"
            :error-messages="err_license_specialdb_custom"
            append-outer-icon="help_outline"
            prepend-icon="link"
            type="url"
            clearable 
            @click:append-outer="$h('license_specialdb_custom')"/>
        </v-flex>
      </v-layout>
      <v-layout
        row 
        wrap>
        <v-flex 
          xs12 
          md4>
          <v-select
            :items="personal_data_links"
            v-model="distribution.license_personal_type"
            :label="$t('license_personal_type')"
            :item-text="$vuetify.lang.current" 
            :error-messages="err_personal"
            item-value="value"
            append-outer-icon="help_outline"
            prepend-icon="filter_4"
            required
            @click:append-outer="$h('license_personal_type')"/>
        </v-flex>
      </v-layout>
    </div>
    <v-divider/>
    <h2 class="headline mt-2">
      {{ $t('headline_distribution_access') }}
    </h2>
    <div>
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
        @click:append-outer="$h('distribution_url')"/>
      <v-layout 
        row 
        wrap>
        <v-flex 
          xs12 
          md6>
          <app-solr-autocomplete
            id="distribution_format"
            v-model="distribution.format"
            :label="$t('distribution_format')"
            :no-data-prompt="$t('format_autocomplete_no_data')"
            :error-messages="err_format"
            prepend-icon="description"
            code-list="file-type"/>
        </v-flex>
        <v-flex 
          xs12 
          md6>
          <app-solr-autocomplete
            id="distribution_media_type"
            v-model="distribution.media_type"
            :label="$t('distribution_media_type')"
            :no-data-prompt="$t('media_type_autocomplete_no_data')"
            :error-messages="err_media_type"
            prepend-icon="description"
            code-list="media-types"/>
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
        @click:append-outer="$h('distribution_schema_link')"/>
      <v-text-field
        id="distribution_title"
        v-model="distribution.title"
        :hint="$t('hint_distribution_title')"
        :label="$t('distribution_title') + $t('optional')"
        prepend-icon="label"
        append-outer-icon="help_outline"
        clearable
        @click:append-outer="$h('distribution_title')"/>
    </div>
    <div v-if="canBeDeleted">
      <v-btn 
        flat 
        @click="onDelete">
        <v-icon color="error">delete</v-icon>
        {{ $t('delete_distribution') }}
      </v-btn>
    </div>
  </v-container>
</template>

<script>
    import {createDistributionValidators} from "./distribution-model";
    import {
        author_license_types,
        db_author_license_types,
        db_special_license_types,
        personal_data_links
    } from "./codelists/license";
    import DatePicker from "./ui/date-picker";
    import SolrAutocomplete from "./ui/solr-autocomplete";

    export default {
        "name": "app-distribution-record-edit",
        "components": {
            "app-date-picker": DatePicker,
            "app-solr-autocomplete": SolrAutocomplete
        },
        "props": {
            "distribution": {"type": Object, "required": true},
            "canBeDeleted": {"type": Boolean, "required": true}
        },
        "data": () => ({
            "author_license_types": author_license_types,
            "db_author_license_types": db_author_license_types,
            "db_special_license_types": db_special_license_types,
            "personal_data_links": personal_data_links
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
            }
        },
        "methods": {
            "onDelete": function () {
                this.$emit("delete");
            }
        }
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