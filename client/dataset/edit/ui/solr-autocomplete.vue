<template>
  <v-autocomplete
    :id="id"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    :value="value"
    :label="label"
    :item-text="$vuetify.lang.current"
    :error-messages="errorMessages"
    :prepend-icon="prependIcon"
    item-value="code"
    append-outer-icon="help_outline"
    flat
    no-filter
    @input="onInput"
    @click:append-outer="$h(id)"
  >
    <template slot="no-data">
      <v-list-tile>
        <v-list-tile-title>
          {{ noDataPrompt }}
        </v-list-tile-title>
      </v-list-tile>
    </template>
  </v-autocomplete>
</template>

<script>
import {getLocalJson} from "../../../app-service/http";
import {addItems, fetchLabelFromCodeList} from "../codelists/local-storage";

export default {
  "name": "app-solr-autocomplete",
  "props": {
    "id": {"type": String, "required": false},
    "value": {"type": String, "required": true},
    "label": {"type": String, "required": false},
    "codeList": {"type": String, "required": true},
    "errorMessages": {"required": false},
    "noDataPrompt": {"type": String, "required": true},
    "prependIcon": {"type": String},
  },
  "data": () => ({
    "loading": false,
    "items": [],
    "search": null,
    "ignoreNextSearch": false,
    "lastFetchFor": undefined,
  }),
  "mounted": function () {
    fetchTitle(this, this.value);
  },
  "watch": {
    "search": function (value) {
      if (this.ignoreNextSearch) {
        this.ignoreNextSearch = false;
        return;
      }
      if (value) {
        this.querySelections(value);
      }
    },
    "value": function (value) {
      // this.ignoreNextSearch will be unset in watch.search
      // that follow after this method.
      if (!this.ignoreNextSearch) {
        fetchTitle(this, value);
      }
    },
  },
  "methods": {
    "querySelections": function (query) {
      this.loading = true;
      this.lastFetchFor = query;
      const url = createQueryUrl(
        this.codeList, query, this.$vuetify.lang.current);
      getLocalJson(url).then((response) => {
        addItems(this.codeList, response.json.response.docs);
        this.items = response.json.response.docs;
        this.loading = false;
      });
    },
    "onInput": function (value) {
      this.ignoreNextSearch = true;
      this.$emit("input", value);
    },
  },
};

function createQueryUrl(codeList, query, lang) {
  return "/api/v1/codelist/" + codeList +
            "?search=*" + encodeURIComponent(query) + "*" +
            "&lang=" + lang;
}

function fetchTitle(component, value) {
  fetchLabelFromCodeList(
    component.codeList, value, component.$vuetify.lang.current)
    .then((item) => component.items = item);
}

</script>