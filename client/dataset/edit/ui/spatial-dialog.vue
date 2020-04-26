<template>
  <v-dialog v-model="visible">
    <template v-slot:activator="{ on }">
      <v-btn
        color="primary"
        dark
        fab
        small
        v-on="on"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar
        dark
        color="primary"
      >
        <v-toolbar-title>{{ $t('dataset_spatial') }}</v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click="onClose"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-tabs
        v-model="activeTab"
        vertical
      >
        <v-tab>{{ $t('dataset_spatial_ruian') }}</v-tab>
        <v-tab>{{ $t('dataset_spatial_continent') }}</v-tab>
        <v-tab>{{ $t('dataset_spatial_country') }}</v-tab>
        <v-tab>{{ $t('dataset_spatial_place') }}</v-tab>
        <v-tab>{{ $t('dataset_spatial_arbitrary') }}</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-autocomplete
                id="dataset_ruian_type"
                v-model="ruianType"
                :items="ruinTypeCodelist"
                :label="$t('ruian_type')"
                :item-text="$vuetify.lang.current"
                prepend-icon="place"
                item-value="value"
                append-outer-icon="help_outline"
                required
                @click:append-outer="$h('ruian_type')"
              />
              <app-ruian-autocomplete
                id="dataset_ruian"
                v-model="ruian"
                :label="$t('ruian')"
                :type="ruianType"
                :disabled="ruianType === ''"
                prepend-icon="place"
                @update:label="dataset.$labels.ruian = $event"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-autocomplete
                v-model="continent"
                :items="continentCodelist"
                :item-text="$vuetify.lang.current"
                item-value="value"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-autocomplete
                v-model="country"
                :items="countryCodelist"
                :item-text="$vuetify.lang.current"
                item-value="value"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-autocomplete
                v-model="place"
                :items="placeCodelist"
                :item-text="$vuetify.lang.current"
                item-value="value"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-text-field
                id="spatial_custom_url"
                v-model="customUrl"
                :label="$t('dataset_spatial_url')"
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
      <v-divider />
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="primary"
          text
          @click="onSave()"
        >
          {{ $t('dataset_spatial_add_confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import RuianAutocomplete from "./ruian-autocomplete";
import {ruianTypeCodelist} from "../codelists/ruian-type";
import DatasetThemes from "../codelists/dataset-theme";
import ContinentsCodeList from "../codelists/continents";
import CountryCodeList from "../codelists/countries";
import PlaceCodeList from "../codelists/places";
import {
  SPATIAL_RUIAN,
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_URL,
} from "../../dataset-model";

export default {
  "name": "spatial-dialog",
  "components": {
    "app-ruian-autocomplete": RuianAutocomplete,
  },
  "data": () => ({
    "visible": false,
    "ruianType": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST",
    "ruian": "https://linked.cuzk.cz/resource/ruian/stat/1",
    "continent": "",
    "country": "",
    "place": "",
    "customUrl": "",
    "activeTab": 0,
    //
    "ruinTypeCodelist": ruianTypeCodelist,
    "datasetThemesCodelist": DatasetThemes,
    "continentCodelist": ContinentsCodeList,
    "countryCodelist": CountryCodeList,
    "placeCodelist": PlaceCodeList,
  }),
  "methods": {
    "onClose": function() {
      this.close();
    },
    "close": function() {
      this.visible = false;
      //
      this.ruian = "";
      this.continent = "";
      this.country = "";
      this.place = "";
      this.customUrl = "";
      this.activeTab = 0;
    },
    "onSave": function() {
      const actionEvent = "add";
      switch (this.activeTab) {
      case 0:
        this.$emit(actionEvent, {
          "url": this.ruian,
          "type": SPATIAL_RUIAN,
        });
        this.close();
        break;
      case 1:
        this.$emit(actionEvent, {
          "url": this.continent,
          "type": SPATIAL_CONTINENT,
        });
        this.close();
        break;
      case 2:
        this.$emit(actionEvent, {
          "url": this.country,
          "type": SPATIAL_COUNTRY,
        });
        this.close();
        break;
      case 3:
        this.$emit(actionEvent, {
          "url": this.place,
          "type": SPATIAL_PLACE,
        });
        this.close();
        break;
      case 4:
        this.$emit(actionEvent, {
          "url": this.customUrl,
          "type": SPATIAL_URL,
        });
        this.close();
        break;
      }
    },
  },
};
</script>