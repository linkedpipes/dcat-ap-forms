<template>
    <v-container fluid grid-list-lg>
        <v-layout row>
            <v-flex md10>
                <h2 class="display-1">{{catalog.url}}</h2>
            </v-flex>
            <v-spacer/>
            <v-btn v-on:click="onExport"
                   class="hidden-xs-only" color="success"
                   round outline>
                <v-icon left>file_download</v-icon>
                <span>{{$labels.get("button_download")}}</span>
            </v-btn>
        </v-layout>
        <v-divider class="my-2"/>
        <v-layout row>
            <v-spacer/>
            <v-tooltip bottom>
                <v-btn slot="activator" round v-on:click="onExport"
                       color="success" outline>
                    <v-icon left>file_download</v-icon>
                    <span>{{$labels.get("button_download")}}</span>
                </v-btn>
                <span>
                    {{$labels.get("catalog_delete_summary_download")}}
                    <code>{{$labels.get("nkod_databox")}}</code>.
                </span>
            </v-tooltip>
        </v-layout>
    </v-container>
</template>

<script>
    import {exportToJsonLd} from "./export-catalog-delete";
    import {downloadAsJsonLd} from "@/app-service/download";

    export default {
        "name": "app-export-summary",
        "props": {
            "catalog": {"type": Object, "required": true}
        },
        "methods": {
            "onExport": function () {
                const jsonld = exportToJsonLd(this.catalog);
                downloadAsJsonLd(
                    "nkod-odstranění-datové-sady.jsonld.txt",jsonld)
            }
        }
    }

</script>

<style scoped>
    .multiline {
        white-space: pre-wrap;
    }
</style>
