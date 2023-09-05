<template>
  <v-autocomplete
    :id="id"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    :value="value"
    :label="label"
    :error-messages="errorMessages"
    :append-icon="null"
    :item-text="$vuetify.lang.current"
    :prepend-icon="prependIcon"
    item-value="code"
    append-outer-icon="help_outline"
    flat
    cache-items
    multiple
    chips
    @input="onInput"
    @click:append-outer="$h(id)"
  >
    <template
      slot="selection"
      slot-scope="data"
    >
      <v-chip
        close
        @click:close="removeTheme(data.item)"
      >
        <strong>{{ data.item[$vuetify.lang.current] }}</strong>
      </v-chip>
    </template>
    <template slot="no-data">
      <v-flex ma-5>
        <v-list-item>
          <v-list-item-title>
            {{ noDataPrompt }}
          </v-list-item-title>
        </v-list-item>
      </v-flex>
    </template>
  </v-autocomplete>
</template>

<script>
import {getLocalJson} from "../../../app-service/http";
import {addStoreItems} from "../codelists/local-storage";

export default {
  "name": "AppSolrChipsAutocomplete",
  "props": {
    "id": {"type": String, "required": true},
    "value": {"type": Array, "required": true},
    "label": {"type": String, "required": false, "default": undefined},
    "codeList": {"type": String, "required": true},
    "errorMessages": {"required": false},
    "noDataPrompt": {"type": String, "required": true},
    "prependIcon": {"type": String, "default": undefined},
  },
  "data": () => ({
    "loading": false,
    "items": [],
    "search": null,
    "ignoreNextSearch": false,
  }),
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
    "value": function (value){
      this.updateFromValue(value);
    },
  },
  "mounted": function () {
    this.updateFromValue(this.value);
  },
  "methods": {
    "updateFromValue": function (value) {
      value.forEach((value) => {
        const url = createTitleQueryUrl(
          this.codeList, value, this.$vuetify.lang.current);
        getLocalJson(url).then((response) => {
          if (response.json.response.docs.length === 0) {
            this.items = [...this.items, createNonLabeledItem(value)];
          } else {
            addStoreItems(this.codeList, response.json.response.docs);
            this.items = [
              ...this.items, ...response.json.response.docs,
            ];
          }
        });
      });
    },
    "querySelections": function (query) {
      this.loading = true;
      const url = createQueryUrl(
        this.codeList, query, this.$vuetify.lang.current);
      getLocalJson(url).then((response) => {
        addStoreItems(this.codeList, response.json.response.docs);
        this.items = response.json.response.docs;
        this.loading = false;
      });
    },
    "onInput": function (value) {
      this.ignoreNextSearch = true;
      this.$emit("input", value);
    },
    "removeTheme": function (item) {
      const index = this.value.indexOf(item.code);
      const newValue = [
        ... this.value.slice(0, index),
        ... this.value.slice(index + 1),
      ];
      this.$emit("input", newValue);
    },
    "reload":  function (values) {
      values.forEach((value) => {
        const url = createTitleQueryUrl(
          this.codeList, value, this.$vuetify.lang.current);
        getLocalJson(url).then((response) => {
          if (response.json.response.docs.length === 0) {
            this.items = [...this.items, createNonLabeledItem(value)];
          } else {
            addStoreItems(this.codeList, response.json.response.docs);
            this.items = [
              ...this.items, ...response.json.response.docs,
            ];
          }
        });
      });
    },
  },
};

function createQueryUrl(codeList, query, lang) {
  return "/api/v1/codelist/" + codeList +
      "?search=*" + encodeURIComponent(query) + "*" +
      "&lang=" + lang;
}

function createTitleQueryUrl(codeList, iri, lang) {
  const escapedIri = iri.replace(":", "\\:");
  return "/api/v1/codelist/" + codeList +
      "?iri=" + encodeURIComponent(escapedIri) +
      "&lang=" + lang;
}

function createNonLabeledItem(url) {
  return {
    "id": url,
    "cs": url,
    "en": url,
    "code": url,
  };
}

</script>