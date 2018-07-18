<template>
    <v-container fluid grid-list-lg pa-0>
        <v-layout align-center>
            <v-flex>
                <div class="display-3">{{dataset.title}}</div>
                <span class="subheading">{{dataset.description}}</span>
            </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap>
            <app-distribution-card
                    v-for="(item, index) in distributions"
                    :key="index"
                    :distribution="item"/>
        </v-layout>
        <v-layout row>
            <v-spacer/>
            <v-btn v-on:click="onDownload" :disabled="!isValid"
                   color="blue" flat>
                <span>{{$labels.get('nav_download')}}</span>
                <v-icon>file_download</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
    import {exportToJsonLd} from "./export-to-jsonld";
    import {downloadAsJsonLd} from "@/app-service/download";
    import DistributionCard from "./ui/distribution-card";

    export default {
        "name": "app-export-summary",
        "components": {
            "app-distribution-card": DistributionCard
        },
        "props": {
            "dataset": {"type": Object, "required": true},
            "distributions": {"type": Array, "required": true},
            "isValid": {"type": Boolean, "required": true}
        },
        "methods": {
            "onDownload": function () {
                const jsonld = exportToJsonLd(this.dataset, this.distributions);
                downloadAsJsonLd("nkod-registrace.jsonld", jsonld)
            }
        }
    }
</script>