<template>
    <v-card>
        <v-card-title>
            <div v-if="distribution.title.length > 0" class="headline mb-0">
                {{distribution.title}}
            </div>
        </v-card-title>
        <v-list>
            <v-list-tile>
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
                        <v-icon color="primary">file_download</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>
                        AD:
                        <a v-if="distribution.license_author_type == 'CC BY'"
                           href="https://creativecommons.org/licenses/by/4.0/"
                           title="Jedno autorské dílo licencované CC BY 4.0"
                           target="_blank">
                            CC BY
                        </a>
                        <a v-if="distribution.license_author_type == 'NO'"
                           href="https://data.gov.cz/podmínky-užití/neobsahuje-autorská-díla/"
                           title="Neobsahuje autorská díla"
                           target="_blank">
                            <v-icon color="green">turned_in</v-icon>
                        </a>
                        <a v-if="distribution.license_author_type == 'MULTI'"
                           href="https://data.gov.cz/podmínky-užití/obsahuje-více-autorských-děl/"
                           title="Obsahuje více autorských děl"
                           target="_blank">
                            <v-icon color="red">list</v-icon>
                        </a>
                        <a v-if="distribution.license_author_type == 'CUSTOM'"
                           :href="distribution.license_author_custom"
                           title="Vlastní licence (nedoporučeno)"
                           target="_blank">
                            <v-icon color="red">help</v-icon>
                        </a>
                        DB:
                        <a v-if="distribution.license_db_type == 'CC BY'"
                           href="https://creativecommons.org/licenses/by/4.0/"
                           title="Databáze licencována CC BY 4.0"
                           target="_blank">
                            CC BY
                        </a>
                        <a v-if="distribution.license_db_type == 'NO'"
                           href="https://data.gov.cz/podmínky-užití/není-autorskoprávně-chráněnou-databází/"
                           title="Není autorskoprávně chráněnou databází"
                           target="_blank">
                            <v-icon color="green">turned_in</v-icon>
                        </a>
                        <a v-if="distribution.license_db_type == 'CUSTOM'"
                           :href="distribution.license_specialdb_custom"
                           title="Vlastní licence (nedoporučeno)"
                           target="_blank">
                            <v-icon color="red">help</v-icon>
                        </a>
                        ZP:
                        <a v-if="distribution.license_specialdb_type == 'CC0'"
                           href="https://creativecommons.org/publicdomain/zero/1.0/"
                           title="CC0"
                           target="_blank">
                            CC0
                        </a>
                        <a v-if="distribution.license_specialdb_type == 'NO'"
                           href="https://data.gov.cz/podmínky-užití/není-chráněna-zvláštním-právem-pořizovatele-databáze/"
                           title="Není chráněna zvláštním právem pořizovatele databáze"
                           target="_blank">
                            <v-icon color="green">turned_in</v-icon>
                        </a>
                        <a v-if="distribution.license_specialdb_type == 'CUSTOM'"
                           :href="distribution.license_specialdb_custom"
                           title="Vlastní licence (nedoporučeno)"
                           target="_blank">
                            <v-icon color="red">help</v-icon>
                        </a>
                        OÚ:
                        <a v-if="distribution.license_personal_type == 'NO'"
                           href="https://data.gov.cz/podmínky-užití/neobsahuje-osobní-údaje/"
                           title="Neobsahuje osobní údaje"
                           target="_blank">
                            <v-icon color="green">person</v-icon>
                        </a>
                        <a v-if="distribution.license_personal_type == 'YES'"
                           href="https://data.gov.cz/podmínky-užití/obsahuje-osobní-údaje/"
                           title="Obsahuje osobní údaje"
                           target="_blank">
                            <v-icon color="red">person</v-icon>
                        </a>
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                        {{$labels.get('terms_of_use')}}
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-tile>
                <v-list-tile-content>
                    <v-list-tile-title>
                        {{distribution.$labels.media_type}}
                    </v-list-tile-title>
                    <v-list-tile-sub-title>
                        {{$labels.get('media_type')}}
                    </v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                    <v-icon>class</v-icon>
                </v-list-tile-action>
            </v-list-tile>
            <v-list-tile v-if="schemaProvided">
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
                        <v-icon color="primary">description</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>

        </v-list>
    </v-card>
</template>

<script>
    export default {
        "name": "app-distribution-card",
        "props": {
            "distribution": {"type": Object, "required": true}
        },
        "computed": {
            "schemaProvided": function () {
                return this.distribution.schema !== null &&
                    this.distribution.schema.length > 0;
            }
        },
        "methods": {
            "downloadDistribution": function () {
                downloadUrl(this.distribution.url);
            },
            "downloadSchema": function () {
                downloadUrl(this.schema.url);
            }
        }
    }

    function downloadUrl(uri) {
        window.open(uri);
    }

</script>