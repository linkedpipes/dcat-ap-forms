<template>
    <v-container fluid grid-list-lg>
        <div class="headline">
            {{$labels.get('headline_distribution_license')}}
        </div>
        <div>
            <v-layout row wrap>
                <v-flex xs12 lg4 xl2>
                    <v-select
                            :items="author_license_types"
                            v-model="distribution.license_author_type"
                            :label="$labels.get('license_author_type')"
                            item-text="label" item-value="value" required/>
                </v-flex>
                <v-flex xs12 lg4 xl2>
                    <v-text-field
                            name="distribution_license_author_name"
                            :disabled="!isCcByAuthor"
                            :required="isCcByAuthor"
                            v-model="distribution.license_author_name"
                            :label="$labels.get('license_author_name')"/>
                </v-flex>
                <v-flex xs12 lg4 xl2>
                    <v-text-field
                            name="distribution_license_author_custom"
                            :disabled="!isCustomAuthor"
                            :required="isCustomAuthor"
                            v-model="distribution.license_author_custom"
                            :label="$labels.get('license_author_custom')"
                            :error-messages="err_license_author_custom"
                            type="url"/>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12 lg4 xl2>
                    <v-select
                            :items="db_author_license_types"
                            v-model="distribution.license_db_type"
                            :label="$labels.get('license_db_type')"
                            item-text="label" item-value="value" required/>
                </v-flex>
                <v-flex xs12 lg4 xl2>
                    <v-text-field
                            name="distribution_license_db_name"
                            :disabled="!isCcByDb"
                            :required="isCcByDb"
                            v-model="distribution.license_db_name"
                            :label="$labels.get('license_db_name')"/>
                </v-flex>
                <v-flex xs12 lg4 xl2>
                    <v-text-field
                            name="distribution_license_db_custom"
                            :disabled="!isCustomDb"
                            :required="isCustomDb"
                            v-model="distribution.license_db_custom"
                            :label="$labels.get('license_db_custom')"
                            :error-messages="err_license_db_custom"
                            type="url"/>
                </v-flex>
            </v-layout>

            <v-layout row wrap>
                <v-flex xs12 lg4 xl2>
                    <v-select
                            :items="db_special_license_types"
                            v-model="distribution.license_specialdb_type"
                            :label="$labels.get('license_specialdb_type')"
                            item-text="label"
                            item-value="value" required/>
                </v-flex>
                <v-flex xs12 lg4 xl2/>
                <v-flex xs12 lg4 xl2>
                    <v-text-field
                            name="distribution_license_specialdb_custom"
                            :disabled="!isCustomSpecialDb"
                            :required="isCustomSpecialDb"
                            v-model="distribution.license_specialdb_custom"
                            :label="$labels.get('license_specialdb_custom')"
                            :error-messages="err_license_specialdb_custom"
                            type="url"/>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12 lg4 xl2>
                    <v-select
                            :items="personal_data_links"
                            v-model="distribution.license_personal_type"
                            :label="$labels.get('license_personal_type')"
                            item-text="label" item-value="value"
                            required/>
                </v-flex>
            </v-layout>

        </div>
        <div class="headline">
            {{$labels.get('headline_distribution_access')}}
        </div>
        <div>
            <v-text-field
                    name="distribution_url"
                    v-model="distribution.url"
                    :label="$labels.get('distribution_url')"
                    :error-messages="err_url"
                    required type="url"/>
            <v-text-field
                    name="distribution_format"
                    v-model="distribution.format"
                    :label="$labels.get('distribution_format')"
                    :error-messages="err_format"
                    required/>
            <v-text-field
                    name="distribution_title"
                    v-model="distribution.title"
                    :label="$labels.get('distribution_title')"/>
            <v-text-field
                    name="distribution_schema"
                    v-model="distribution.schema"
                    :label="$labels.get('distribution_schema_link')"
                    :error-messages="err_schema"
                    type="url"/>
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
    } from "./code-lists";
    import DatePicker from "./ui/date-picker";

    export default {
        "name": "app-distribution-edit",
        "components": {
            "app-date-picker": DatePicker
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