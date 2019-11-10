<template>
  <v-container
    fluid
    grid-list-lg
    pa-0
  >
    <v-alert
      outline
      value="true"
      type="warning"
      dismissible="true"
    >
      {{ $t('common_errors_description') }}
      <a
        target="_blank"
        href="https://opendata.gov.cz/špatná-praxe:start"
      >{{ $t('common_errors_link_label') }}</a>!
    </v-alert>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        md6
      >
        <v-text-field
          id="dataset_title_cs"
          v-model="dataset.title_cs"
          :label="$t('dataset_title_cs')"
          :error-messages="err_title_cs"
          :hint="$t('hint_dataset_title')"
          prepend-icon="label"
          append-outer-icon="help_outline"
          required
          clearable
          @click:append-outer="$h('dataset_title')"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-text-field
          id="dataset_title_en"
          v-model="dataset.title_en"
          :label="$t('dataset_title_en')"
          :error-messages="err_title_en"
          :hint="$t('hint_dataset_title')"
          prepend-icon="label"
          append-outer-icon="help_outline"
          required
          clearable
          @click:append-outer="$h('dataset_title')"
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
        <v-textarea
          id="dataset_description_cs"
          v-model="dataset.description_cs"
          :label="$t('dataset_description_cs')"
          :error-messages="err_description_cs"
          :hint="$t('hint_dataset_description')"
          prepend-icon="description"
          append-outer-icon="help_outline"
          rows="3"
          required
          auto-grow
          clearable
          @click:append-outer="$h('dataset_description')"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-textarea
          id="dataset_description_en"
          v-model="dataset.description_en"
          :label="$t('dataset_description_en')"
          :error-messages="err_description_en"
          :hint="$t('hint_dataset_description')"
          prepend-icon="description"
          append-outer-icon="help_outline"
          rows="3"
          required
          auto-grow
          clearable
          @click:append-outer="$h('dataset_description')"
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
        <v-autocomplete
          id="dataset_themes"
          v-model="dataset.dataset_themes"
          :items="dataset_themes"
          :label="$t('dataset_theme')"
          :error-messages="err_dataset_theme"
          :item-text="$vuetify.lang.current"
          prepend-icon="category"
          item-value="value"
          append-outer-icon="help_outline"
          required
          chips
          multiple
          @click:append-outer="$h('dataset_theme')"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-autocomplete
          id="dataset_accrual_periodicity"
          v-model="dataset.accrual_periodicity"
          :items="frequencies"
          :label="$t('accrual_periodicity')"
          :item-text="$vuetify.lang.current"
          prepend-icon="snooze"
          item-value="value"
          append-outer-icon="help_outline"
          required
          @click:append-outer="$h('accrual_periodicity')"
        />
      </v-flex>
    </v-layout>
    <v-combobox
      id="dataset_custom_theme"
      v-model="dataset.dataset_custom_themes"
      :label="$t('dataset_theme') + $t('optional')"
      :error-messages="err_dataset_theme_custom"
      :hint="$t('hint_dataset_theme')"
      item-value="value"
      prepend-icon="short_text"
      append-outer-icon="help_outline"
      append-icon=""
      chips
      multiple
      @click:append-outer="$h('dataset_custom_theme')"
    >
      <template
        slot="selection"
        slot-scope="data"
      >
        <v-chip
          close
          @input="removeTheme(data.item)"
        >
          <strong>{{ data.item }}</strong>
        </v-chip>
      </template>
    </v-combobox>
    <v-combobox
      id="keywords"
      v-model="dataset.keywords"
      :label="$t('keywords')"
      :error-messages="err_keywords"
      :hint="$t('hint_keywords')"
      prepend-icon="short_text"
      append-outer-icon="help_outline"
      append-icon=""
      required
      chips
      multiple
      readonly
      @click:append-outer="$h('keywords')"
    >
      <template
        slot="selection"
        slot-scope="data"
      >
        <v-chip
          close
          @input="removeKeyword(data.item)"
        >
          <strong>{{ data.item.cs + " | " + data.item.en }}</strong>
        </v-chip>
      </template>
    </v-combobox>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        md6
      >
        <v-text-field
          id="new_keyword_cs"
          v-model="dataset.tmp_keyword_cs"
          :label="$t('dataset_keyword_cs')"
          :error-messages="err_keyword_cs"
          :hint="$t('hint_dataset_keyword')"
          prepend-icon="label"
          append-outer-icon="help_outline"
          clearable
          @click:append-outer="$h('dataset_keyword')"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-text-field
          id="new_keyword_en"
          v-model="dataset.tmp_keyword_en"
          :label="$t('dataset_keyword_en')"
          :error-messages="err_keyword_en"
          :hint="$t('hint_dataset_keyword')"
          prepend-icon="label"
          append-outer-icon="help_outline"
          clearable
          @click:append-outer="$h('dataset_keyword')"
        />
      </v-flex>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <div>
        <button
            v-on:click="addKeyword"
          >
          Add keyword
        </button>
      </div>
    </v-layout>
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        md6
      >
        <v-autocomplete
          id="dataset_ruian_type"
          v-model="dataset.ruian_type"
          :items="ruianTypes"
          :label="$t('ruian_type')"
          :item-text="$vuetify.lang.current"
          prepend-icon="place"
          item-value="value"
          append-outer-icon="help_outline"
          required
          @click:append-outer="$h('ruian_type')"
          @input="onRuainTypeInput"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <app-ruian-autocomplete
          id="dataset_ruian"
          ref="ruian"
          v-model="dataset.ruian"
          :label="$t('ruian')"
          :error-messages="err_ruian"
          :type="dataset.ruian_type"
          :disabled="dataset.ruian_type === ''"
          code-list="ruian"
          prepend-icon="place"
          @update:label="dataset.$labels.ruian = $event"
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
        <app-date-picker
          id="temporal_start"
          v-model="dataset.temporal_start"
          :label="$t('temporal_start') + $t('optional')"
          :hint="$t('hint_temporal_start')"
          persistent-hint
          append-outer-icon="help_outline"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <app-date-picker
          id="temporal_end"
          v-model="dataset.temporal_end"
          :hint="$t('hint_temporal_end')"
          :label="$t('temporal_end') + $t('optional')"
          persistent-hint
        />
      </v-flex>
      <v-spacer />
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
          id="temporalResolution"
          v-model="dataset.temporal_resolution"
          :label="$t('temporal_resolution') + $t('optional')"
          :error-messages="err_temporal"
          :hint="$t('hint_temporal')"
          prepend-icon="calendar_today"
          append-outer-icon="help_outline"
          clearable
          @click:append-outer="$h('temporal')"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-text-field
          id="spatialResolutionMeters"
          v-model="dataset.spatial_resolution_meters"
          :label="$t('spatial_resolution_meters') + $t('optional')"
          :error-messages="err_spatial"
          :hint="$t('hint_spatial')"
          prepend-icon="zoom_out_map"
          append-outer-icon="help_outline"
          clearable
          @click:append-outer="$h('spatial')"
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
          id="contact_point_name"
          v-model="dataset.contact_point_name"
          :label="$t('contact_point_name') + $t('optional')"
          :hint="$t('hint_contact_point_name')"
          prepend-icon="person"
          append-outer-icon="help_outline"
          clearable
          @click:append-outer="$h('contact_point_name')"
        />
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-text-field
          id="contact_point_email"
          v-model="dataset.contact_point_email"
          :label="$t('contact_point_email') + $t('optional')"
          :error-messages="err_contact_point_email"
          :hint="$t('hint_contact_point_email')"
          prepend-icon="alternate_email"
          append-outer-icon="help_outline"
          type="email"
          clearable
          @click:append-outer="$h('contact_point_email')"
        />
      </v-flex>
    </v-layout>
    <v-text-field
      id="documentation"
      v-model="dataset.documentation"
      :label="$t('documentation') + $t('optional')"
      :error-messages="err_documentation"
      :hint="$t('hint_documentation')"
      prepend-icon="link"
      append-outer-icon="help_outline"
      type="url"
      clearable
      @click:append-outer="$h('documentation')"
    />
    <app-solr-chips-autocomplete
      id="themes"
      v-model="dataset.themes"
      :label="$t('themes') + $t('optional')"
      :no-data-prompt="$t('themes_autocomplete_no_data')"
      prepend-icon="euro_symbol"
      code-list="themes"
    />
  </v-container>
</template>

<script>
import {createDatasetValidators, do_addKeyword} from "./dataset-model";
import DatePicker from "./ui/date-picker";
import RuinTypeCodelist from "./codelists/ruian-type"
import FrequenciesCodeList from "./codelists/frequencies";
import SolrAutocomplete from "./ui/solr-autocomplete";
import RuianAutocomplete from "./ui/ruian-autocomplete";
import SolrChipsAutocomplete from "./ui/solr-chips-autocomplete";
import DatasetThemes from "./codelists/dataset-theme";


export default {
  "name": "app-dataset-record-edit",
  "components": {
    "app-date-picker": DatePicker,
    "app-ruian-autocomplete": RuianAutocomplete,
    "app-solr-autocomplete": SolrAutocomplete,
    "app-solr-chips-autocomplete": SolrChipsAutocomplete,
  },
  "props": {
    "dataset": {"type": Object, "required": true}
  },
  "data": () => ({
    "frequencies": FrequenciesCodeList,
    "ruianTypes": RuinTypeCodelist,
    "dataset_themes": DatasetThemes,
  }),
  "computed": {
    ...createDatasetValidators()
  },
  "methods": {
    "addKeyword": function() {
      do_addKeyword(this.dataset);
    },
    "removeKeyword": function (item) {
      const index = this.dataset.keywords.indexOf(item);
      this.dataset.keywords.splice(index, 1);
    },
    "removeTheme": function (item) {
      const index = this.dataset.dataset_custom_themes.indexOf(item);
      this.dataset.dataset_custom_themes.splice(index, 1);
    },
    "onRuainTypeInput": function(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }
      this.dataset.ruian = "";
      this.$refs.ruian.clearItemCache();
    },
  }
};
</script>
