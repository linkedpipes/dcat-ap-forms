<template>
  <v-autocomplete
    :id="id"
    :loading="loading"
    :items="items"
    :value="value"
    :label="label"
    :item-text="$vuetify.lang.current"
    :error-messages="errorMessages"
    :prepend-icon="prependIcon"
    :required="required"
    :multiple="multiple"
    item-value="code"
    append-outer-icon="help_outline"
    flat
    @input="onInput"
    @click:append-outer="$h(id)"
  >
  </v-autocomplete>
</template>

<script>
import {getLocalJson} from "../../../app-service/http";
import {addStoreItems} from "../codelists/local-storage";

/**
 * Eager loaded autocomplete component from Solr.
 *
 * The server must return all values for the request.
 * Thus it must use createSortedEagerCodelistGet or
 * createEagerCodelistGet handler.
 */
export default {
  "name": "AppSolrAutocomplete",
  "props": {
    "id": {"type": String, "required": true},
    // Value can be String or Array based on the multiple argument.
    "value": { "required": true},
    "label": {"type": String, "required": false, "default": undefined},
    "codeList": {"type": String, "required": true},
    "errorMessages": {"type": Array},
    "prependIcon": {"type": String, "default": undefined},
    "required": {"type": Boolean, "default": false},
    "multiple": {"type": Boolean, "default": false},
    "sortByLabel": {"type": Boolean, "default": false},
  },
  "data": () => ({
    "loading": false,
    "items": [],
    "lastFetchFor": undefined,
  }),
  "mounted": function () {
    this.fetch();
  },
  "methods": {
    "fetch": function () {
      if (this.loading || this.items.length > 0) {
        return;
      }
      this.loading = true;
      const language = this.$vuetify.lang.current;
      const url = createFetchUrl(this.codeList, language);
      getLocalJson(url).then((response) => {
        addStoreItems(this.codeList, response.json.response.docs);
        const items = response.json.response.docs;
        if (this.sortByLabel) {
          items.sort((left, right) => left[language].localeCompare(right[language]));
        }
        this.items = items;
        this.loading = false;
      }).catch(() => {
        this.loading = false;
      });
    },
    "onInput": function (value) {
      this.$emit("input", value);
    },
  },
};

function createFetchUrl(codeList, lang) {
  return "/api/v1/codelist/" + codeList +
    "?search=*:*&lang=" + lang;
}

</script>