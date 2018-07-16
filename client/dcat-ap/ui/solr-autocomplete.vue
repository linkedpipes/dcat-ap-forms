<template>
    <v-autocomplete
            ref="autocomplete"
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
            flat>
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
        "name": "app-solr-autocomplete",
        "props": {
            "name": {"type": String, "required": false},
            "value": {"type": String, "required": true},
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
                // Also emit the label.
                for (let index in this.items) {
                    if (this.items[index].code === value) {
                        this.$emit("update:label", this.items[index].title);
                    }
                }
            }
        }
    }

    function createQueryUrl(codeList, query) {
        return "/api/v1/codelist/" + codeList +
            "?search=*" + encodeURIComponent(query) + "*";
    }

</script>