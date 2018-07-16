<template>
    <v-container fluid grid-list-lg>
        <v-text-field
                id="dataset_title"
                v-model="dataset.title"
                :label="$labels.get('dataset_title')"
                :error-messages="err_title"
                required/>
        <v-textarea
                id="dataset_description"
                v-model="dataset.description"
                :label="$labels.get('dataset_description')"
                :error-messages="err_description"
                rows="3" required auto-grow/>
        <v-autocomplete
                id="dataset_accrual_periodicity"
                v-model="dataset.accrual_periodicity"
                :items="frequencies"
                :label="$labels.get('accrual_periodicity')"
                item-text="cs"
                item-value="value"
                required/>
        <v-layout row wrap>
            <v-flex xs12 lg6>
                <v-autocomplete
                        id="dataset_ruian_type"
                        v-model="dataset.ruian_type"
                        :items="ruianTypes"
                        :label="$labels.get('ruian_type')"
                        item-text="cs"
                        item-value="value"
                        required/>
            </v-flex>
            <v-flex xs12 lg6>
                <app-ruain-autocomplete
                        name="dataset_ruian"
                        v-model="dataset.ruian"
                        :label="$labels.get('ruian')"
                        :error-messages="err_ruian"
                        code-list="ruian"
                        :type="dataset.ruian_type"
                        :disabled="dataset.ruian_type === ''"/>
            </v-flex>
        </v-layout>

        <v-combobox
                v-model="dataset.keywords"
                :label="$labels.get('keywords')"
                :error-messages="err_keywords"
                append-icon="" required chips multiple>
            <template slot="selection" slot-scope="data">
                <v-chip close @input="removeKeyword(data.item)">
                    <strong>{{data.item}}</strong>
                </v-chip>
            </template>
        </v-combobox>

        <v-layout row wrap>
            <v-flex xs12 lg6>
                <v-text-field
                        name="contact_point_name"
                        v-model="dataset.contact_point_name"
                        :label="$labels.get('contact_point_name')"/>
            </v-flex>
            <v-flex xs12 lg6>
                <v-text-field
                        name="contact_point_email"
                        v-model="dataset.contact_point_email"
                        :label="$labels.get('contact_point_email')"
                        :error-messages="err_contact_point_email"
                        type="email"/>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 lg6>
                <app-date-picker
                        v-model="dataset.temporal_start"
                        :label="$labels.get('temporal_start')"/>
            </v-flex>
            <v-flex xs12 lg6>
                <app-date-picker
                        v-model="dataset.temporal_end"
                        :label="$labels.get('temporal_end')"/>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>

        <v-text-field
                name="documentation"
                v-model="dataset.documentation"
                :label="$labels.get('documentation')"
                :error-messages="err_documentation"
                type="url"/>

        <v-autocomplete
                id="dataset_theme"
                v-model="dataset.dataset_theme"
                :items="dataset_themes"
                :label="$labels.get('dataset_theme')"
                :error-messages="err_dataset_theme"
                item-text="cs"
                item-value="value"
                required/>

        <app-solr-chips-autocomplete
                name="data_theme"
                v-model="dataset.themes"
                :label="$labels.get('themes')"
                :no-data-prompt="$labels.get('themes_autocomplete_no_data')"
                code-list="themes"/>

    </v-container>
</template>

<script>
    import {createDatasetValidators} from "./dataset-model";
    import DatePicker from "./ui/date-picker";
    import RuinTypeCodelist from "./codelists/ruian_type"
    import FrequenciesCodeList from "./codelists/frequencies";
    import SolrAutocomplete from "./ui/solr-autocomplete";
    import RuianAutocomplete from "./ui/ruian-autocomplete";
    import SolrChipsAutocomplete from "./ui/solr-chips-autocomplete";
    import DatasetThemes from "./codelists/dataset_theme";

    export default {
        "name": "app-dataset-edit",
        "components": {
            "app-date-picker": DatePicker,
            "app-ruain-autocomplete": RuianAutocomplete,
            "app-solr-autocomplete": SolrAutocomplete,
            "app-solr-chips-autocomplete": SolrChipsAutocomplete
        },
        "props": {
            "dataset": {"type": Object, "required": true}
        },
        "data": () => ({
            "frequencies": FrequenciesCodeList,
            "ruianTypes": RuinTypeCodelist,
            "dataset_themes": DatasetThemes
        }),
        "computed": {
            ...createDatasetValidators()
        },
        "watch": {
            "dataset": function () {
                console.log("dataset", arguments);
            }
        },
        "methods": {
            "removeKeyword": function (item) {
                const index = this.dataset.keywords.indexOf(item);
                this.dataset.keywords.splice(index, 1);
            }
        }
    };
</script>