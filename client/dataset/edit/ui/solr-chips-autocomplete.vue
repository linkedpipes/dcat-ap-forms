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
        @input="removeTheme(data.item)"
      >
        <strong>{{ data.item[$vuetify.lang.current] }}</strong>
      </v-chip>
    </template>
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
import {getLocalJson} from "@/app-service/http";
import {addItems} from "../codelists/local-storage";

export default {
  "name": "app-solr-chips-autocomplete",
  "props": {
    "id": {"type": String, "required": true},
    "value": {"type": Array, "required": true},
    "label": {"type": String, "required": false},
    "codeList": {"type": String, "required": true},
    "errorMessages": {"required": false},
    "noDataPrompt": {"type": String, "required": true},
    "prependIcon": {"type": String}
  },
  "data": () => ({
    "loading": false,
    "items": [],
    "search": null,
    "ignoreNextSearch": false
  }),
  "mounted": function () {
    this.value.forEach((value) => {
      const url = createTitleQueryUrl(
        this.codeList, value, this.$vuetify.lang.current);
      getLocalJson(url).then((response) => {
        if (response.json.response.docs.length === 0) {
          this.items = [...this.items, createNonLabeledItem(value)];
        } else {
          addItems(this.codeList, response.json.response.docs);
          this.items = [
            ...this.items, ...response.json.response.docs
          ];
        }
      });
    })
  },
  "watch": {
    "search": function (value) {
      if (this.ignoreNextSearch) {
        this.ignoreNextSearch = false;
        return;
      }
      if (value) {
        this.querySelections(value)
      }
    }
  },
  "methods": {
    "querySelections": function (query) {
      this.loading = true;
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
    "removeTheme": function (item) {
      const index = this.value.indexOf(item.code);
      const newValue = [
        ... this.value.slice(0, index),
        ... this.value.slice(index + 1)
      ];
      this.$emit("input", newValue);
    },
    "reload":  function (vals) {
      vals.forEach((value) => {
        const url = createTitleQueryUrl(this.codeList, value, this.$vuetify.lang.current);
        getLocalJson(url).then((response) => {
          if (response.json.response.docs.length === 0) {
            this.items = [...this.items, createNonLabeledItem(value)];
          } else {
            addItems(this.codeList, response.json.response.docs);
            this.items = [
              ...this.items, ...response.json.response.docs
            ];
          }
        });
      })
      this.$emit("input", this.value);
    },
  }
}

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
    "code": url
  }
}

</script>