<template>
    <v-container fluid grid-list-lg pa-0>
        <v-text-field
                id="dataset_title"
                v-model="dataset.title"
                :label="$labels.get('dataset_title')"
                :error-messages="err_title"
                append-outer-icon="help_outline"
                v-on:click:append-outer="$h.show('dataset_title')"
                required clearable/>
        <v-textarea
                id="dataset_description"
                v-model="dataset.description"
                :label="$labels.get('dataset_description')"
                :error-messages="err_description"
                append-outer-icon="help_outline"
                v-on:click:append-outer="$h.show('dataset_description')"
                rows="3" required auto-grow clearable/>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-autocomplete
                        id="dataset_theme"
                        v-model="dataset.dataset_theme"
                        :items="dataset_themes"
                        :label="$labels.get('dataset_theme')"
                        :error-messages="err_dataset_theme"
                        item-text="cs" item-value="value"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h.show('dataset_theme')"
                        required/>
            </v-flex>
            <v-flex xs12 md6>
                <v-autocomplete
                        id="dataset_accrual_periodicity"
                        v-model="dataset.accrual_periodicity"
                        :items="frequencies"
                        :label="$labels.get('accrual_periodicity')"
                        item-text="cs" item-value="value"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h.show('accrual_periodicity')"
                        required/>
            </v-flex>
        </v-layout>

        <v-combobox
                id="keywords"
                v-model="dataset.keywords"
                :label="$labels.get('keywords')"
                :error-messages="err_keywords"
                append-outer-icon="help_outline"
                v-on:click:append-outer="$h.show('keywords')"
                append-icon="" required chips multiple>
            <template slot="selection" slot-scope="data">
                <v-chip close @input="removeKeyword(data.item)">
                    <strong>{{data.item}}</strong>
                </v-chip>
            </template>
        </v-combobox>

        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-autocomplete
                        id="dataset_ruian_type"
                        v-model="dataset.ruian_type"
                        :items="ruianTypes"
                        :label="$labels.get('ruian_type')"
                        item-text="cs" item-value="value"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h.show('ruian_type')"
                        v-on:input="onRuainTypeInput"
                        required/>
            </v-flex>
            <v-flex xs12 md6>
                <app-ruain-autocomplete
                        id="dataset_ruian"
                        v-model="dataset.ruian"
                        :label="$labels.get('ruian')"
                        :error-messages="err_ruian"
                        code-list="ruian"
                        :type="dataset.ruian_type"
                        :disabled="dataset.ruian_type === ''"/>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 md6>
                <app-date-picker
                        id="temporal_start"
                        v-model="dataset.temporal_start"
                        :label="$labels.get('temporal_start')"
                        append-outer-icon="help_outline"/>
            </v-flex>
            <v-flex xs12 md6>
                <app-date-picker
                        id="temporal_end"
                        v-model="dataset.temporal_end"
                        :label="$labels.get('temporal_end')"/>
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-text-field
                        id="contact_point_name"
                        v-model="dataset.contact_point_name"
                        :label="$labels.get('contact_point_name')"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h.show('contact_point_name')"
                        clearable/>
            </v-flex>
            <v-flex xs12 md6>
                <v-text-field
                        id="contact_point_email"
                        v-model="dataset.contact_point_email"
                        :label="$labels.get('contact_point_email')"
                        :error-messages="err_contact_point_email"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h.show('contact_point_email')"
                        type="email" clearable/>
            </v-flex>
        </v-layout>

        <v-text-field
                id="documentation"
                v-model="dataset.documentation"
                :label="$labels.get('documentation')"
                :error-messages="err_documentation"
                append-outer-icon="help_outline"
                v-on:click:append-outer="$h.show('documentation')"
                type="url" clearable/>

        <app-solr-chips-autocomplete
                id="themes"
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
        "methods": {
            "removeKeyword": function (item) {
                const index = this.dataset.keywords.indexOf(item);
                this.dataset.keywords.splice(index, 1);
            },
            "onRuainTypeInput": function(newValue, oldValue) {
                if (newValue === oldValue) {
                    return;
                }
                this.dataset.ruian = "";
            }
        }
    };
</script>