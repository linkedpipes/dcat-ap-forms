<template>
    <v-autocomplete
            :name="name"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            :value="value"
            :label="label"
            v-on:input="onInput"
            item-text="title"
            :error-messages="errorMessages"
            item-value="code"
            cache-items flat>
        <!-- TODO Replace with Vuetify localization -->
        <template slot="no-data">
            <v-list-tile>
                <v-list-tile-title>
                    {{$labels.get('autocomplete_no_data')}}
                </v-list-tile-title>
            </v-list-tile>
        </template>
    </v-autocomplete>
</template>

<script>
    import {fetchJson} from "@/app-service/http";

    export default {
        "name": "app-solr-autocomplete",
        "props": {
            "name": {"type": String, "required": false},
            "value": {"type": String, "required": true},
            "label": {"type": String, "required": false},
            "codeList": {"type": String, "required": true},
            "errorMessages": {"required": false}
        },
        "data": () => ({
            "loading": false,
            "items": [],
            "search": null
        }),
        "watch": {
            "search": function (value) {
                if (value && value !== this.value) {
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
                this.$emit("input", value);
            }
        }
    }

    function createQueryUrl(codeList, query) {
        return "/api/v1/codelist/" + codeList +
            "?search=*" + encodeURIComponent(query) + "*";
    }

</script>