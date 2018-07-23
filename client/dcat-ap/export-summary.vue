<template>
    <v-container fluid grid-list-lg pa-0>
        <p class="display-3">{{dataset.title}}</p>
        <p class="subheading">{{dataset.description}}</p>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-list two-line>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{themeToLabel(dataset.dataset_theme)}}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                {{$labels.get('dataset_theme')}}
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile>
                        <v-list-tile-content>
                            <v-list-tile-title>{{frequencyToLabel(dataset.accrual_periodicity)}}
                            </v-list-tile-title>
                            <v-list-tile-sub-title>
                                {{$labels.get('accrual_periodicity')}}
                            </v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider></v-divider>
                    <v-list-tile v-if="dataset.keywords.length">
                        <v-list-tile-content>
                            <v-list-tile-title><span v-for="keyword in dataset.keywords">{{keyword}} </span></v-list-tile-title>
                            <v-list-tile-sub-title>{{$labels.get('keywords')}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="dataset.keywords.length"></v-divider>
                    <v-list-tile v-if="dataset.contact_point_name">
                        <v-list-tile-content>
                            <v-list-tile-title>{{dataset.contact_point_name}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{$labels.get('contact_point_name')}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="dataset.contact_point_name"></v-divider>
                    <v-list-tile v-if="dataset.contact_point_email">
                        <v-list-tile-content>
                            <v-list-tile-title>{{dataset.contact_point_email}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{$labels.get('contact_point_email')}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="dataset.contact_point_email"></v-divider>
                    <v-list-tile v-if="dataset.documentation">
                        <v-list-tile-content>
                            <v-list-tile-title>{{dataset.documentation}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{$labels.get('documentation')}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon ripple v-on:click="openDocumentation">
                                <v-icon color="blue">forward</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="dataset.documentation"></v-divider>
                    <v-list-tile v-if="dataset.ruian">
                        <v-list-tile-content>
                            <v-list-tile-title>{{dataset.ruian}}</v-list-tile-title>
                            <v-list-tile-sub-title>{{$labels.get('ruian_iri')}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon ripple v-on:click="openRuian">
                                <v-icon color="blue">forward</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="dataset.ruian"></v-divider>
                    <v-list-tile v-if="dataset.temporal_start || dataset.temporal_end">
                        <v-list-tile-content>
                            <v-list-tile-title>{{dataset.temporal_start}}<span v-if="dataset.temporal_end"> - {{dataset.temporal_end}}</span></v-list-tile-title>
                            <v-list-tile-sub-title>{{$labels.get('temporal')}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="dataset.temporal_start || dataset.temporal_end"></v-divider>
                    <v-list-tile v-if="dataset.themes.length">
                        <v-list-tile-content>
                            <v-list-tile-title><span v-for="theme in dataset.themes">{{theme}} </span></v-list-tile-title>
                            <v-list-tile-sub-title>{{$labels.get('themes')}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider v-if="dataset.themes.length"></v-divider>
                </v-list>
            </v-flex>
            
            <v-flex xs12 md6>
                <v-layout row wrap>
                    <app-distribution-card
                            v-for="(item, index) in distributions"
                            :key="index"
                            :distribution="item"/>
                </v-layout>
            </v-flex>
        </v-layout>
        <br/>
        <v-divider/>
        <br/>
        <p>
            Zde vidíte náhled registrované datové sady.
            Hotový registrační záznam stáhněte a zašlete jako přílohu do datové schránky <code>uur3q2i</code>.
        </p>
        <br/>
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
    import {getLabel as themeToLabel} from "@/dcat-ap/codelists/dataset_theme";
    import {getLabel as frequencyToLabel} from "@/dcat-ap/codelists/frequencies.js";

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
            },
            "openDocumentation": function () {
                downloadUrl(this.dataset.documentation);
            },
            "openRuian": function () {
                downloadUrl(this.dataset.ruian);
            },
            "themeToLabel": themeToLabel,
            "frequencyToLabel": frequencyToLabel
        }
    }

    function downloadUrl(uri) {
        window.open(uri);
    }
</script>