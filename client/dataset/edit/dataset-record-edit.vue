<template>
  <v-container
    fluid
    grid-list-lg
    pa-0
  >
    <v-alert
      outlined
      type="warning"
      dismissible
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
          :label="$t('dataset_title_en') + $t('optional')"
          :hint="$t('hint_dataset_title')"
          prepend-icon="label"
          append-outer-icon="help_outline"
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
          :label="$t('dataset_description_en') + $t('optional')"
          :hint="$t('hint_dataset_description')"
          prepend-icon="description"
          append-outer-icon="help_outline"
          rows="3"
          auto-grow
          clearable
          @click:append-outer="$h('dataset_description')"
        />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex
        xs12
        md6
      >
        <v-combobox
          id="keywords_cs"
          v-model="dataset.keywords_cs"
          :label="$t('keywords_cs')"
          :error-messages="err_keywords_cs"
          :hint="$t('hint_keywords')"
          prepend-icon="short_text"
          append-outer-icon="help_outline"
          append-icon=""
          required
          chips
          multiple
          @click:append-outer="$h('keywords')"
        >
          <template
            slot="selection"
            slot-scope="data"
          >
            <v-chip
              close
              @click:close="removeKeywordCs(data.index)"
            >
              <strong>{{ data.item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
      </v-flex>
      <v-flex
        xs12
        md6
      >
        <v-combobox
          id="keywords_en"
          v-model="dataset.keywords_en"
          :label="$t('keywords_en')"
          :hint="$t('hint_keywords')"
          prepend-icon="short_text"
          append-outer-icon="help_outline"
          append-icon=""
          required
          chips
          multiple
          @click:append-outer="$h('keywords')"
        >
          <template
            slot="selection"
            slot-scope="data"
          >
            <v-chip
              close
              @click:close="removeKeywordEn(data.index)"
            >
              <strong>{{ data.item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
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
          :items="datasetThemeCodelist"
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
              @click:close="removeTheme(data.index)"
            >
              <strong>{{ data.item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
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
        <v-combobox
          id="dataset_ofn"
          v-model="dataset.ofn"
          :label="$t('dataset_ofn') + $t('optional')"
          :error-messages="err_dataset_ofn"
          :hint="$t('hint_dataset_ofn')"
          item-value="value"
          prepend-icon="short_text"
          append-outer-icon="help_outline"
          append-icon=""
          chips
          multiple
          @click:append-outer="$h('dataset_ofn')"
        >
          <template
            slot="selection"
            slot-scope="data"
          >
            <v-chip
              close
              @click:close="removeOfn(data.index)"
            >
              <strong>{{ data.item }}</strong>
            </v-chip>
          </template>
        </v-combobox>
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
      <v-flex
        xs1
        md1
      >
        <div class="text-center">
          <spatial-dialog @add="addSpatial" />
        </div>
      </v-flex>
      <v-flex
        xs11
        md5
      >
        <v-combobox
          id="dataset_spatial"
          v-model="dataset.spatial"
          :label="$t('dataset_spatial')"
          :error-messages="err_dataset_spatial"
          :hint="$t('hint_dataset_spatial')"
          item-value="value"
          prepend-icon="place"
          append-outer-icon="help_outline"
          append-icon=""
          required
          chips
          multiple
          readonly
          @click:append-outer="$h('dataset_spatial')"
        >
          <template
            slot="selection"
            slot-scope="data"
          >
            <v-chip
              close
              @click:close="removeSpatial(data.index)"
            >
              <strong>
                {{ getSpatialLabel(data.item) }}
              </strong>
            </v-chip>
          </template>
        </v-combobox>
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
      :code-list="EUROVOC"
    />
    <v-layout
      v-if="allowImport"
      row
      wrap
    >
      <div class="text-center">
        <upload-file-dialog @upload="loadFromFile" />
        <upload-url-dialog @upload="loadFromUrl" />
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import DatePicker from "./components/date-picker";
import SolrChipsAutocomplete from "./components/solr-chips-autocomplete";
import DatasetThemes from "./codelists/dataset-theme";
import FrequenciesCodeList from "./codelists/frequencies";
import SpatialDialog from "./components/spatial-dialog";
import UploadFileDialog from "./components/upload-file-dialog";
import UploadUrlDialog from "./components/upload-url-dialog";
import {createDatasetValidators} from "../dataset-model";
import {getSpatialLabel} from "./codelists/spatial";
import {EUROVOC} from "./codelists/server-codelists";

export default {
  "name": "AppDatasetRecordEdit",
  "components": {
    "app-date-picker": DatePicker,
    "app-solr-chips-autocomplete": SolrChipsAutocomplete,
    "spatial-dialog": SpatialDialog,
    "upload-file-dialog": UploadFileDialog,
    "upload-url-dialog": UploadUrlDialog,
  },
  "props": {
    "dataset": {"type": Object, "required": true},
    "codelist": {"type": Object, "required": true},
    "distributions": {"type": Array, "required": true},
    "allowImport": {"type": Boolean, "required": true},
  },
  "data": () => ({
    "frequencies": FrequenciesCodeList,
    "datasetThemeCodelist": DatasetThemes,
    "dialog": false,
    "dialog_keyword": false,
    "dialog_url": false,
    "EUROVOC": EUROVOC,
  }),
  "computed": {
    ...createDatasetValidators(),
  },
  "methods": {
    "addSpatial": function(value) {
      if (containsSpatial(this.dataset, value)) {
        return;
      }
      this.dataset.spatial.push(value);
    },
    "removeKeywordCs": function (index) {
      this.dataset.keywords_cs.splice(index, 1);
    },
    "removeKeywordEn": function (index) {
      this.dataset.keywords_en.splice(index, 1);
    },
    "removeTheme": function (index) {
      this.dataset.dataset_custom_themes.splice(index, 1);
    },
    "removeSpatial": function (index) {
      this.dataset.spatial.splice(index, 1);
    },
    "removeOfn": function (index) {
      this.dataset.ofn.splice(index, 1);
    },
    "getSpatialLabel": function(item) {
      return getSpatialLabel(this.codelist, item, this.$vuetify.lang.current);
    },
    "loadFromFile": function (file) {
      this.$emit("load-from-file", file);
    },
    "loadFromUrl": function(url) {
      this.$emit("load-from-url", url);
    },
  },
};

function containsSpatial(dataset, spatial) {
  for (let item of dataset.spatial) {
    if (item.type === spatial.type && item.url === spatial.url) {
      return true;
    }
  }
  return false;
}

</script>
