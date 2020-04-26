<template>
  <v-autocomplete
    id="ruian"
    :loading="loading"
    :items="items"
    :search-input.sync="search"
    :value="value"
    :label="label"
    :error-messages="errorMessages"
    :disabled="disabled"
    :item-text="$vuetify.lang.current"
    :prepend-icon="prependIcon"
    item-value="code"
    append-outer-icon="help_outline"
    flat
    no-filter
    @input="onInput"
    @click:append-outer="$h('ruian')"
  >
    <template
      slot="selection"
      slot-scope="data"
    >
      {{ data.item[$vuetify.lang.current] }} ({{ data.item.notation }})
    </template>
    <template
      slot="item"
      slot-scope="data"
    >
      {{ data.item[$vuetify.lang.current] }} ({{ data.item.notation }})
    </template>
    <template slot="no-data">
      <v-list-item>
        <v-list-item-title>
          {{ $t('ruian_autocomplete_no_data') }}
        </v-list-item-title>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<script>
import {getLocalJson} from "../../../app-service/http";
import {addStoreItems} from "../codelists/local-storage";

export default {
  "name": "app-ruian-autocomplete",
  "props": {
    "value": {"type": String, "required": true},
    "label": {"type": String, "required": false},
    "errorMessages": {"required": false},
    "disabled": {"type": Boolean, "default": false},
    "type": {"type": String},
    "prependIcon": {"type": String},
  },
  "data": () => ({
    "loading": false,
    "items": [],
    "search": null,
    "ignoreNextSearch": false,
  }),
  "mounted": function () {
    // Fetch label for the initial value.
    const url = createQueryUrlForIri(this.value, this.$vuetify.lang.current);
    getLocalJson(url).then((response) => {
      addStoreItems("ruian", response.json.response.docs);
      this.items = response.json.response.docs;
    });
  },
  "watch": {
    "search": function (value) {
      if (this.ignoreNextSearch) {
        this.ignoreNextSearch = false;
        return;
      }
      if (value) {
        this.fetchItems(value);
      }
    },
    "type": function(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }
      // Change value to empty as it is not valid for a different type.
      this.$emit("input", "");
      // And clear items in suggestions.
      this.items = [];
    },
  },
  "methods": {
    "fetchItems": function (query) {
      this.loading = true;
      let url = createQueryUrlForLabelAndType(
        query, this.type, this.$vuetify.lang.current);
      getLocalJson(url).then((response) => {
        addStoreItems("ruian", response.json.response.docs);
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

function createQueryUrlForIri(iri, lang) {
  const escapedIri = iri.replace(":", "\\:");
  return "/api/v1/codelist/ruian" +
    "?iri=" + encodeURIComponent(escapedIri) +
    "&lang=" + lang;
}

function createQueryUrlForLabelAndType(query, type, lang) {
  return "/api/v1/codelist/ruian" +
            "?search=*" + encodeURIComponent(query) + "*" +
            "&lang=" + lang +
            "&type=" + type;
}

</script>