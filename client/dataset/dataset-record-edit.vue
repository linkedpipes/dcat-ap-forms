<template>
    <v-container fluid grid-list-lg pa-0>
        <v-text-field
                id="dataset_title"
                v-model="dataset.title"
                :label="$labels.get('dataset_title')"
                :error-messages="err_title"
				prepend-icon="label"
                append-outer-icon="help_outline"
                :hint="$labels.get('hint_dataset_title')"
                v-on:click:append-outer="$h('dataset_title')"
                required clearable/>
        <v-textarea
                id="dataset_description"
                v-model="dataset.description"
                :label="$labels.get('dataset_description')"
                :error-messages="err_description"
				prepend-icon="description"
                append-outer-icon="help_outline"
                :hint="$labels.get('hint_dataset_description')"
                v-on:click:append-outer="$h('dataset_description')"
                rows="3" required auto-grow clearable/>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-autocomplete
                        id="dataset_theme"
                        v-model="dataset.dataset_theme"
                        prepend-icon="category"
						:items="dataset_themes"
                        :label="$labels.get('dataset_theme')"
                        :error-messages="err_dataset_theme"
                        item-text="cs" item-value="value"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h('dataset_theme')"
                        required/>
            </v-flex>
            <v-flex xs12 md6>
                <v-autocomplete
                        id="dataset_accrual_periodicity"
                        v-model="dataset.accrual_periodicity"
                        prepend-icon="snooze"
                        :items="frequencies"
                        :label="$labels.get('accrual_periodicity')"
                        item-text="cs" item-value="value"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h('accrual_periodicity')"
                        required/>
            </v-flex>
        </v-layout>

        <v-combobox
                id="keywords"
                v-model="dataset.keywords"
                :label="$labels.get('keywords')"
                :error-messages="err_keywords"
                prepend-icon="short_text"
                append-outer-icon="help_outline"
                :hint="$labels.get('hint_keywords')"
                v-on:click:append-outer="$h('keywords')"
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
                        prepend-icon="place"
                        item-text="cs" item-value="value"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h('ruian_type')"
                        v-on:input="onRuainTypeInput"
                        required/>
            </v-flex>
            <v-flex xs12 md6>
                <app-ruian-autocomplete
                        ref="ruian"
                        id="dataset_ruian"
                        v-model="dataset.ruian"
                        :label="$labels.get('ruian')"
                        :error-messages="err_ruian"
                        code-list="ruian"
                        prepend-icon="place"
                        :type="dataset.ruian_type"
                        v-on:update:label="dataset.$labels.ruian = $event"
                        :disabled="dataset.ruian_type === ''"/>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 md6>
                <app-date-picker
                        id="temporal_start"
                        v-model="dataset.temporal_start"
                        :label="$labels.get('temporal_start')"
						:hint="$labels.get('hint_temporal_start')"
						persistent-hint
                        append-outer-icon="help_outline"/>
            </v-flex>
            <v-flex xs12 md6>
                <app-date-picker
                        id="temporal_end"
                        v-model="dataset.temporal_end"
						:hint="$labels.get('hint_temporal_end')"
						persistent-hint
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
                        :hint="$labels.get('hint_contact_point_name')"
                        prepend-icon="person"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h('contact_point_name')"
                        clearable/>
            </v-flex>
            <v-flex xs12 md6>
                <v-text-field
                        id="contact_point_email"
                        v-model="dataset.contact_point_email"
                        :label="$labels.get('contact_point_email')"
                        :error-messages="err_contact_point_email"
                        prepend-icon="alternate_email"
                        :hint="$labels.get('hint_contact_point_email')"
                        append-outer-icon="help_outline"
                        v-on:click:append-outer="$h('contact_point_email')"
                        type="email" clearable/>
            </v-flex>
        </v-layout>

        <v-text-field
                id="documentation"
                v-model="dataset.documentation"
                :label="$labels.get('documentation')"
                :error-messages="err_documentation"
                :hint="$labels.get('hint_documentation')"
                prepend-icon="link"
                append-outer-icon="help_outline"
                v-on:click:append-outer="$h('documentation')"
                type="url" clearable/>

        <app-solr-chips-autocomplete
                id="themes"
                v-model="dataset.themes"
                prepend-icon="euro_symbol"
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
        "name": "app-dataset-record-edit",
        "components": {
            "app-date-picker": DatePicker,
            "app-ruian-autocomplete": RuianAutocomplete,
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
                this.$refs.ruian.clearItemCache();
            }
        }
    };
</script>