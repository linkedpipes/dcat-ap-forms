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
    @click:append-outer="$h('ruian')">
    <template 
      slot="selection" 
      slot-scope="data">
      {{ data.item.title }} ({{ data.item.notation }})
    </template>
    <template 
      slot="item" 
      slot-scope="data">
      {{ data.item.title }} ({{ data.item.notation }})
    </template>
    <template slot="no-data">
      <v-list-tile>
        <v-list-tile-title>
          {{ $labels.get('ruian_autocomplete_no_data') }}
        </v-list-tile-title>
      </v-list-tile>
    </template>
  </v-autocomplete>
</template>

<script>
    import {getLocalJson} from "@/app-service/http";
    import {addItems} from "../codelists/local-storage";

    export default {
        "name": "app-ruian-autocomplete",
        "props": {
            "value": {"type": String, "required": true},
            "label": {"type": String, "required": false},
            "errorMessages": {"required": false},
            "disabled": {"type": Boolean, "default": false},
            "type": {"type": String},
            "prependIcon": {"type": String}
        },
        "data": () => ({
            "loading": false,
            "items": [],
            "search": null,
            "ignoreNextSearch": false
        }),
        "mounted": function () {
            const url = createTitleQueryUrl(this.codeList, this.value);
            getLocalJson(url).then((response) => {
                addItems("ruian", response.json.response.docs);
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
                    this.querySelections(value)
                }
            }
        },
        "methods": {
            "querySelections": function (query) {
                this.loading = true;
                let url = createQueryUrl(query, this.type);
                getLocalJson(url).then((response) => {
                    addItems("ruian", response.json.response.docs);
                    this.items = response.json.response.docs;
                    this.loading = false;
                });
            },
            "onInput": function (value) {
                this.ignoreNextSearch = true;
                this.$emit("input", value);
            },
            "clearItemCache": function() {
                this.items = [];
            }
        }
    }

    function createQueryUrl(query, type) {
        return "/api/v1/codelist/ruian" +
            "?search=*" + encodeURIComponent(query) + "*" +
            "&type=" + type
    }

    function createTitleQueryUrl(codeList, iri) {
        const escapedIri = iri.replace(":", "\\:");
        return "/api/v1/codelist/ruian" +
            "?iri=" + encodeURIComponent(escapedIri);
    }

</script>