<template>
    <v-autocomplete
            id="ruian"
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
            append-outer-icon="help_outline"
            v-on:click:append-outer="$h('ruian')"
            :prepend-icon="prependIcon"
            flat no-filter>
        <template slot="selection" slot-scope="data">
            {{data.item.title}} ({{data.item.notation}})
        </template>
        <template slot="item" slot-scope="data">
            {{data.item.title}} ({{data.item.notation}})
        </template>
        <template slot="no-data">
            <v-list-tile>
                <v-list-tile-title>
                    {{$labels.get('ruian_autocomplete_no_data')}}
                </v-list-tile-title>
            </v-list-tile>
        </template>
    </v-autocomplete>
</template>

<script>
    import {getLocalJson} from "@/app-service/http";
    import {addItems} from "../codelists/local-storage";

    const defaultItem = {
        "code": "https://linked.cuzk.cz/resource/ruian/stat/1",
        "notation": "1",
        "title": "Česká republika",
        "type": "https://linked.cuzk.cz/ontology/ruian/TypPrvku/ST"
    };

    addItems("ruian", [defaultItem]);

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
            "items": [defaultItem],
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
                let url = createQueryUrl(query, "cs", this.type);
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

    function createQueryUrl(query, language, type) {
        return "/api/v1/codelist/ruian" +
            "?search=*" + encodeURIComponent(query) + "*" +
            "&lang=" + language + "&type=" + type
    }

</script>