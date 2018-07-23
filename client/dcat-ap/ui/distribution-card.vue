<template>
    <v-flex xs12 lg6>
        <v-card>
            <v-card-title>
                <h3 v-if="distribution.title.length > 0" class="headline mb-0">
                    {{distribution.title}}
                </h3>
            </v-card-title>
            <v-list two-line subheader>
                <v-subheader>
                  {{ $labels.get('headline_distribution_license') }}
                </v-subheader>
                <v-list-tile avatar v-if="distribution.license_author_type == 'CC BY'">
                    <v-list-tile-avatar>
                        <v-icon class="green white--text">turned_in</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span class="hidden-lg-and-down">Autorské dílo licencované </span>CC BY 4.0
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{distribution.license_author_name}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://creativecommons.org/licenses/by/4.0/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar v-if="distribution.license_author_type == 'NO'" >
                    <v-list-tile-avatar>
                        <v-icon class="green white--text"></v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Neobsahuje<span class="hidden-lg-and-down"> autorská díla</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_author_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar v-if="distribution.license_author_type == 'MULTI'">
                    <v-list-tile-avatar>
                        <v-icon class="red white--text">list</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Obsahuje více<span class="hidden-sm-and-down"> autorských</span> děl
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_author_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar v-if="distribution.license_author_type == 'CUSTOM'">
                    <v-list-tile-avatar>
                        <v-icon class="red white--text">help</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Vlastní licence<span class="hidden-lg-and-down"> (nedoporučeno)</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{distribution.license_author_custom}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl(distribution.license_author_custom)">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                
                <v-list-tile avatar v-if="distribution.license_db_type == 'CC BY'">
                    <v-list-tile-avatar>
                        <v-icon class="green white--text">turned_in</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span class="hidden-lg-and-down">Databáze licencována </span>CC BY 4.0
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{distribution.license_db_name}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://creativecommons.org/licenses/by/4.0/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar v-if="distribution.license_db_type == 'NO'">
                    <v-list-tile-avatar>
                        <v-icon class="green white--text"></v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span class="hidden-lg-and-down">Není autorskoprávně chráněnou databází</span>
                            <span class="hidden-xl-only">Není chráněna</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_db_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>              
                <v-list-tile avatar v-if="distribution.license_db_type == 'CUSTOM'">
                    <v-list-tile-avatar>
                        <v-icon class="red white--text">help</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Vlastní licence<span class="hidden-lg-and-down"> (nedoporučeno)</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{distribution.license_db_custom}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl(distribution.license_db_custom)">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                
                <v-list-tile avatar v-if="distribution.license_specialdb_type == 'CC0'">
                    <v-list-tile-avatar>
                        <v-icon class="green white--text">turned_in</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            CC0
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_specialdb_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://creativecommons.org/publicdomain/zero/1.0/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar v-if="distribution.license_specialdb_type == 'NO'">
                    <v-list-tile-avatar>
                        <v-icon class="green white--text"></v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <span class="hidden-lg-and-down">Není chráněna zvláštním právem pořizovatele databáze</span>
                            <span class="hidden-xl-only">Není chráněna</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_specialdb_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar v-if="distribution.license_specialdb_type == 'CUSTOM'">
                    <v-list-tile-avatar>
                        <v-icon class="red white--text">help</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Vlastní licence<span class="hidden-lg-and-down"> (nedoporučeno)</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_specialdb_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl(distribution.license_specialdb_custom)">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>

                <v-list-tile avatar v-if="distribution.license_personal_type == 'NO'">
                    <v-list-tile-avatar>
                        <v-icon class="green white--text">person</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Neobsahuje<span class="hidden-lg-and-down"> osobní údaje</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_personal_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar v-if="distribution.license_personal_type == 'YES'">
                    <v-list-tile-avatar>
                        <v-icon class="red white--text">person</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            Obsahuje<span class="hidden-lg-and-down"> osobní údaje</span>
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('license_personal_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn icon ripple v-on:click="openUrl('https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/')">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>                    
                    </v-list-tile-action>
                </v-list-tile>
            </v-list>
            <v-divider/>
            <v-list two-line subheader>         
                <v-subheader>
                  {{ $labels.get('headline_distribution_access') }}
                </v-subheader>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-icon class="blue white--text">cloud_download</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{distribution.url }}
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('distribution_download')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn flat icon v-on:click="downloadDistribution">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-icon class="blue white--text">info</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{mediaTypeLabel}}
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('media_type')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn flat icon v-on:click="openMediaType">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <v-icon class="blue white--text">info</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{formatLabel}}
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('distribution_format')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar v-if="schemaProvided">
                    <v-list-tile-avatar>
                        <v-icon class="blue white--text">description</v-icon>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title>
                            {{distribution.schema}}
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                            {{$labels.get('distribution_schema')}}
                        </v-list-tile-sub-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-btn flat icon v-on:click="downloadSchema">
                            <v-icon color="blue">link</v-icon>
                        </v-btn>
                    </v-list-tile-action>
                </v-list-tile>

            </v-list>
        </v-card>
    </v-flex>
</template>

<script>
    import {getItem} from "./../codelists/local-storage";

    export default {
        "name": "app-distribution-card",
        "props": {
            "distribution": {"type": Object, "required": true}
        },
        "computed": {
            "schemaProvided": function () {
                return this.distribution.schema !== null &&
                    this.distribution.schema.length > 0;
            },
            "mediaTypeLabel": function() {
                const iri = this.distribution.media_type;
                const value = getItem("media-types",iri);
                if (value === undefined) {
                    return undefined;
                } else {
                    return value["title"];
                }
            },
            "formatLabel": function() {
                const iri = this.distribution.format;
                const value = getItem("file-type",iri);
                if (value === undefined) {
                    return undefined;
                } else {
                    return value["title"];
                }
            }
        },
        "methods": {
            "downloadDistribution": function () {
                downloadUrl(this.distribution.url);
            },
            "downloadSchema": function () {
                downloadUrl(this.schema.url);
            },
            "openMediaType": function () {
                downloadUrl(this.distribution.media_type);
            },
            "openUrl": function (url) {
                downloadUrl(url);
            }
        }
    }

    function downloadUrl(uri) {
        window.open(uri);
    }

</script>