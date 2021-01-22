<template>
  <v-dialog v-model="visible">
    <template #activator="{ on }">
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
        <v-tab>{{ $t('dataset_spatial_country') }}</v-tab>
        <v-tab>{{ $t('dataset_spatial_continent') }}</v-tab>
        <v-tab>{{ $t('dataset_spatial_place') }}</v-tab>
        <v-tab>{{ $t('dataset_spatial_arbitrary') }}</v-tab>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <app-solr-autocomplete
                v-model="country"
                :code-list="COUNTRIES"
                :label="$t('countries')"
                :no-data-prompt="$t('countries_no_data')"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <app-solr-autocomplete
                v-model="continent"
                :code-list="CONTINENTS"
                :label="$t('continents')"
                :no-data-prompt="$t('continents_no_data')"
              />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <app-solr-autocomplete
                v-model="place"
                :code-list="PLACES"
                :label="$t('places')"
                :no-data-prompt="$t('places_no_data')"
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
                :error-messages="errCustomUrl"
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
          :disabled="confirmDisabled"
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
import SolrAutocomplete from "./solr-autocomplete";
import {ruianTypeCodelist} from "../codelists/ruian-type";
import {
  SPATIAL_RUIAN,
  SPATIAL_CONTINENT,
  SPATIAL_COUNTRY,
  SPATIAL_PLACE,
  SPATIAL_URL,
} from "../../dataset-model";
import {provided, url} from "../../../app-service/validators";
import {CONTINENTS, COUNTRIES, PLACES} from "../codelists/server-codelists";

export default {
  "name": "SpatialDialog",
  "components": {
    "app-solr-autocomplete": SolrAutocomplete,
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
    "CONTINENTS": CONTINENTS,
    "COUNTRIES": COUNTRIES,
    "PLACES": PLACES,
  }),
  "computed": {
    "errCustomUrl": function() {
      if (!provided(this.customUrl) || url(this.customUrl)) {
        return [];
      } else {
        return [this.$t("dataset_spatial_url_invalid")];
      }
    },
    "confirmDisabled": function () {
      switch (this.activeTab) {
      case 1:
        return this.continent.length === 0;
      case 2:
        return this.country.length === 0;
      case 3:
        return this.place.length === 0;
      case 4:
        return this.customUrl.length === 0 || this.errCustomUrl.length > 0;
      default:
        return false;
      }
    },
  },
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