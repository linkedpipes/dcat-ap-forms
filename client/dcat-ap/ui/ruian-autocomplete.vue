<template>
    <v-autocomplete
            :name="name"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            :value="value"
            :label="label"
            v-on:input="onInput"
            :error-messages="errorMessages"
            :disabled="disabled"
            item-value="code"
            item-text="title"
            flat>
        <template slot="selection" slot-scope="data">
            {{data.item.title}} ({{data.item.notation}})
        </template>
        <template slot="item" slot-scope="data">
            {{data.item.title}} ({{data.item.notation}})
        </template>
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
        "name": "app-ruian-autocomplete",
        "props": {
            "name": {"type": String, "required": false},
            "value": {"type": String, "required": true},
            "label": {"type": String, "required": false},
            "errorMessages": {"required": false},
            "disabled": {"type": Boolean, "default": false},
            "type": {"type": String}
        },
        "data": () => ({
            "loading": false,
            "items": [],
            "search": null,
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
                let url = createQueryUrl(query, "cs", this.type);
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

    function createQueryUrl(query, language, type) {
        return "/api/v1/codelist/ruian" +
            "?search=*" + encodeURIComponent(query) + "*" +
            "&lang=" + language + "&type=" + type
    }

</script>