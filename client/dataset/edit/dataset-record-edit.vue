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
          :label="$t('keyword_cs')"
          :error-messages="err_keyword_cs"
          :hint="$t('hint_dataset_keyword_cs')"
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
          :label="$t('keyword_en')"
          :error-messages="err_keyword_en"
          :hint="$t('hint_dataset_keyword_en')"
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
        <v-btn
                color="red lighten-2"
                dark
                v-on:click="addKeyword"
        >
          {{ $t('keyword_add') }}
        </v-btn>
      </div>
    </v-layout>

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
                  @input="removeSpatial(data.item)"
          >
            <strong v-if="data.item.type === 'URL'">{{data.item.url }}</strong>
            <strong v-else-if="data.item.type === 'RUIAN'">{{data.item.label}}</strong>
            <strong v-else>{{data.item}}</strong>
          </v-chip>
        </template>
      </v-combobox>
    <v-layout
            row
            wrap
    >
      <div class="text-center">
        <v-dialog
                v-model="dialog"
                width="500"
        >
          <template v-slot:activator="{ on }">
            <v-btn
                    color="red lighten-2"
                    dark
                    v-on="on"
            >
              {{$t('dataset_spatial_add')}}
            </v-btn>
          </template>

          <v-card>
            <v-card-title
                    class="headline grey lighten-2"
                    primary-title
            >
              {{$t('dataset_spatial')}}
            </v-card-title>

            <v-tabs vertical v-model="tmp_spatial_active_tab">
              <v-tab>
                RÚIAN
              </v-tab>
              <v-tab>
                {{$t('dataset_spatial_arbitrary')}}
              </v-tab>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
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
                                v-model="ruian_type"
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
                                v-model="ruian"
                                :label="$t('ruian')"
                                :type="ruian_type"
                                :disabled="ruian_type === ''"
                                code-list="ruian"
                                prepend-icon="place"
                                @update:label="dataset.$labels.ruian = $event"
                        />
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </v-tab-item>

              <v-tab-item>
                <v-card flat>
                  <v-card-text>
                    <v-text-field
                            id="spatial_custom_url"
                            v-model="spatial_url"
                            :label="$t('dataset_spatial_url')"
                            :error-messages="err_spatial_url"
                            :hint="$t('hint_dataset_spatial_url')"
                            prepend-icon="label"
                            append-outer-icon="help_outline"
                            clearable
                            @click:append-outer="$h('dataset_spatial_url')"
                    />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                      color="primary"
                      text
                      @click="addSpatial()"
              >
                {{$t('dataset_spatial_add_confirm')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
import {createDatasetValidators, do_addKeyword, do_addSpatial} from "./dataset-model";
import DatePicker from "./ui/date-picker";
import RuinTypeCodelist from "./codelists/ruian-type"
import FrequenciesCodeList from "./codelists/frequencies";
import SolrAutocomplete from "./ui/solr-autocomplete";
import RuianAutocomplete from "./ui/ruian-autocomplete";
import SolrChipsAutocomplete from "./ui/solr-chips-autocomplete";
import DatasetThemes from "./codelists/dataset-theme";
import {getItem} from "./codelists/local-storage";


export default {
  "name": "app-dataset-record-edit",
  "components": {
    "app-date-picker": DatePicker,
    "app-ruian-autocomplete": RuianAutocomplete,
    "app-solr-autocomplete": SolrAutocomplete,
    "app-solr-chips-autocomplete": SolrChipsAutocomplete,
  },
  "props": {
    "dataset": {"type": Object, "required": true},
    "codelist": {"type": Object, "required": true}
  },
  "data": () => ({
    "frequencies": FrequenciesCodeList,
    "ruianTypes": RuinTypeCodelist,
    "dataset_themes": DatasetThemes,
    "dialog": false,
    "ruian_type": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
    "ruian": "https://linked.cuzk.cz/resource/ruian/stat/1",
  }),
  "computed": {
    ...createDatasetValidators()
  },
  "methods": {
    "addKeyword": function() {
      do_addKeyword(this.dataset);
      this.dataset.tmp_keyword_en = "";
      this.dataset.tmp_keyword_cs = "";
    },
    "addSpatial": function() {
      this.dialog = false;
      const label = this.ruianLabel(this.ruian);
      do_addSpatial(this.dataset, this.ruian_type, this.ruian, this.spatial_url, this.tmp_spatial_active_tab, label);
      this.ruian_type = "";
      this.ruian = "";
    },
    "removeKeyword": function (item) {
      const index = this.dataset.keywords.indexOf(item);
      this.dataset.keywords.splice(index, 1);
    },
    "removeTheme": function (item) {
      const index = this.dataset.dataset_custom_themes.indexOf(item);
      this.dataset.dataset_custom_themes.splice(index, 1);
    },
    "removeSpatial": function (item) {
      const index = this.dataset.spatial.indexOf(item);
      this.dataset.spatial.splice(index, 1);
    },
    "onRuainTypeInput": function(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }
      this.ruian = "";
      this.$refs.ruian.clearItemCache();
    },
    "ruianLabel": function (iri) {
      const value = getItem(this.codelist, "ruian", iri, this.$vuetify.lang.current);
      if (value === undefined) {
        return iri;
      } else {
        return value;
      }
    },
  }
};
</script>
