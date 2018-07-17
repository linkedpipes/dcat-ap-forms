<template>
    <v-autocomplete
            :id="id"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            :value="value"
            :label="label"
            v-on:input="onInput"
            item-text="title"
            :error-messages="errorMessages"
            item-value="code"
            :append-icon="null"
            append-outer-icon="help_outline"
            v-on:click:append-outer="$h.show(id)"
            flat cache-items multiple chips>
        <template slot="selection" slot-scope="data">
            <v-chip v-on:input="removeTheme(data.item)" close>
                <strong>{{data.item.title}}</strong>
            </v-chip>
        </template>
        <template slot="no-data">
            <v-list-tile>
                <v-list-tile-title>
                    {{noDataPrompt}}
                </v-list-tile-title>
            </v-list-tile>
        </template>
    </v-autocomplete>
</template>

<script>
    import {fetchJson} from "@/app-service/http";

    export default {
        "name": "app-solr-chips-autocomplete",
        "props": {
            "id": {"type": String, "required": true},
            "value": {"type": Array, "required": true},
            "label": {"type": String, "required": false},
            "codeList": {"type": String, "required": true},
            "errorMessages": {"required": false},
            "noDataPrompt": {"type": String, "required": true}
        },
        "data": () => ({
            "loading": false,
            "items": [],
            "search": null,
            "ignoreNextSearch": false
        }),
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
                const url = createQueryUrl(this.codeList, query);
                fetchJson(url).then((response) => {
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
            }
        }
    }

    function createQueryUrl(codeList, query) {
        return "/api/v1/codelist/" + codeList +
            "?search=*" + encodeURIComponent(query) + "*";
    }


</script>