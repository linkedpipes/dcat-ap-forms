<template>
    <v-container fluid grid-list-lg pa-0>
        <h2 class="headline">
            {{$labels.get('headline_distribution_license')}}
            <a href="https://opendata.gov.cz/cinnost:stanoveni-podminek-uziti" target="_blank" class="info_link">
                <v-icon color="blue" size="1.5rem" class="info_icon">
                    help_outline
                </v-icon>
            </a>
        </h2>
        <div>
            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-select
                            :items="author_license_types"
                            v-model="distribution.license_author_type"
                            :label="$labels.get('license_author_type')"
                            item-text="label" item-value="value"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_author_type')"
                            required/>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field
                            id="distribution_license_author_name"
                            :disabled="!isCcByAuthor"
                            :required="isCcByAuthor"
                            v-model="distribution.license_author_name"
                            :label="$labels.get('license_author_name')"
                            :error-messages="err_license_author_name"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_author_name')"
                            clearable/>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field
                            id="distribution_license_author_custom"
                            :disabled="!isCustomAuthor"
                            :required="isCustomAuthor"
                            v-model="distribution.license_author_custom"
                            :label="$labels.get('license_author_custom')"
                            :error-messages="err_license_author_custom"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_author_custom')"
                            type="url" clearable/>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-select
                            :items="db_author_license_types"
                            v-model="distribution.license_db_type"
                            :label="$labels.get('license_db_type')"
                            item-text="label" item-value="value"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_db_type')"
                            required/>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field
                            id="distribution_license_db_name"
                            :disabled="!isCcByDb"
                            :required="isCcByDb"
                            v-model="distribution.license_db_name"
                            :label="$labels.get('license_db_name')"
                            :error-messages="err_license_db_name"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_db_name')"
                            clearable/>
                </v-flex>
                <v-flex xs12 md4>
                    <v-text-field
                            id="distribution_license_db_custom"
                            :disabled="!isCustomDb"
                            :required="isCustomDb"
                            v-model="distribution.license_db_custom"
                            :label="$labels.get('license_db_custom')"
                            :error-messages="err_license_db_custom"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_db_custom')"
                            type="url" clearable/>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-select
                            :items="db_special_license_types"
                            v-model="distribution.license_specialdb_type"
                            :label="$labels.get('license_specialdb_type')"
                            item-text="label" item-value="value"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_specialdb_type')"
                            required/>
                </v-flex>
                <v-flex xs12 md4/>
                <v-flex xs12 md4>
                    <v-text-field
                            id="distribution_license_specialdb_custom"
                            :disabled="!isCustomSpecialDb"
                            :required="isCustomSpecialDb"
                            v-model="distribution.license_specialdb_custom"
                            :label="$labels.get('license_specialdb_custom')"
                            :error-messages="err_license_specialdb_custom"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_specialdb_custom')"
                            type="url" clearable/>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12 md4>
                    <v-select
                            :items="personal_data_links"
                            v-model="distribution.license_personal_type"
                            :label="$labels.get('license_personal_type')"
                            item-text="label" item-value="value"
                            append-outer-icon="help_outline"
                            v-on:click:append-outer="$h.show('license_personal_type')"
                            required/>
                </v-flex>
            </v-layout>

        </div>
        <h2 class="headline">
            {{$labels.get('headline_distribution_access')}}
        </h2>
        <div>
            <v-text-field
                    id="distribution_url"
                    v-model="distribution.url"
                    :label="$labels.get('distribution_url')"
                    :error-messages="err_url"
                    append-outer-icon="help_outline"
                    v-on:click:append-outer="$h.show('distribution_url')"
                    required type="url" clearable/>
            <v-layout row wrap>
                <v-flex xs12 md6>
                    <app-solr-autocomplete
                            id="distribution_format"
                            v-model="distribution.format"
                            :label="$labels.get('distribution_format')"
                            :no-data-prompt="$labels.get('format_autocomplete_no_data')"
                            :error-messages="err_format"
                            code-list="file-type"/>
                </v-flex>
                <v-flex xs12 md6>
                    <app-solr-autocomplete
                            id="distribution_media_type"
                            v-model="distribution.media_type"
                            :label="$labels.get('distribution_media_type')"
                            :no-data-prompt="$labels.get('media_type_autocomplete_no_data')"
                            :error-messages="err_media_type"
                            v-on:update:label="distribution.$labels.media_type = $event"
                            code-list="media-types"/>
                </v-flex>
            </v-layout>
            <v-text-field
                    id="distribution_schema"
                    v-model="distribution.schema"
                    :label="$labels.get('distribution_schema_link')"
                    :error-messages="err_schema"
                    append-outer-icon="help_outline"
                    v-on:click:append-outer="$h.show('distribution_schema_link')"
                    type="url" clearable/>
            <v-text-field
                    id="distribution_title"
                    v-model="distribution.title"
                    :label="$labels.get('distribution_title')"
                    append-outer-icon="help_outline"
                    v-on:click:append-outer="$h.show('distribution_title')"
                    clearable/>
        </div>
        <div v-if="canBeDeleted">
            <v-btn v-on:click="onDelete" flat>
                <v-icon color="error">delete</v-icon>
                {{$labels.get('delete_distribution')}}
            </v-btn>
        </div>
    </v-container>
</template>

<script>
    import {createDistributionValidators} from "./distribution-model";
    import {
        author_license_types,
        db_author_license_types,
        db_special_license_types,
        personal_data_links
    } from "./codelists/license";
    import DatePicker from "./ui/date-picker";
    import SolrAutocomplete from "./ui/solr-autocomplete";

    export default {
        "name": "app-distribution-edit",
        "components": {
            "app-date-picker": DatePicker,
            "app-solr-autocomplete": SolrAutocomplete
        },
        "props": {
            "distribution": {"type": Object, "required": true},
            "canBeDeleted": {"type": Boolean, "required": true}
        },
        "data": () => ({
            "author_license_types": author_license_types,
            "db_author_license_types": db_author_license_types,
            "db_special_license_types": db_special_license_types,
            "personal_data_links": personal_data_links
        }),
        "computed": {
            ...createDistributionValidators(),
            "isCcByAuthor": function () {
                return this.distribution.license_author_type === "CC BY";
            },
            "isCustomAuthor": function () {
                return this.distribution.license_author_type === "CUSTOM";
            },
            "isCcByDb": function () {
                return this.distribution.license_db_type === "CC BY";
            },
            "isCustomDb": function () {
                return this.distribution.license_db_type === "CUSTOM";
            },
            "isCustomSpecialDb": function () {
                return this.distribution.license_specialdb_type === "CUSTOM";
            }
        },
        "methods": {
            "onDelete": function () {
                this.$emit("delete");
            }
        }
    };
</script>

<style scoped>
    .info_link {
        text-decoration-line: None;
    }
    .info_icon {
        vertical-align: text-top;
    }
</style>