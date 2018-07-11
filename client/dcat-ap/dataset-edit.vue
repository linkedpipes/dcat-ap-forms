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
            <v-flex xs12 lg6 xl2>
                <v-autocomplete
                        id="dataset_ruian_type"
                        v-model="dataset.ruian_type"
                        :items="ruianTypes"
                        :label="$labels.get('ruian_type')"
                        item-text="cs"
                        item-value="value"
                        required/>
            </v-flex>
            <v-flex xs12 lg6 xl2>
                <v-text-field
                        name="dataset_ruian_code"
                        v-model="dataset.ruian_code"
                        :label="$labels.get('ruian_code')"
                        :error-messages="err_ruian_code"
                        type="number"
                        required/>
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
            <v-flex xs12 lg6 xl3>
                <v-text-field
                        name="contact_point_name"
                        v-model="dataset.contact_point_name"
                        :label="$labels.get('contact_point_name')"/>
            </v-flex>
            <v-flex xs12 lg6 xl3>
                <v-text-field
                        name="contact_point_email"
                        v-model="dataset.contact_point_email"
                        :label="$labels.get('contact_point_email')"
                        :error-messages="err_contact_point_email"
                        type="email"/>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex xs12 lg6 xl2>
                <app-date-picker
                        v-model="dataset.temporal_start"
                        :label="$labels.get('temporal_start')" />
            </v-flex>
            <v-flex xs12 lg6 xl2>
                <app-date-picker
                        v-model="dataset.temporal_end"
                        :label="$labels.get('temporal_end')" />
            </v-flex>
            <v-spacer></v-spacer>
        </v-layout>

        <v-text-field
                name="documentation"
                v-model="dataset.documentation"
                :label="$labels.get('documentation')"
                :error-messages="err_documentation"
                type="url"/>

        <v-combobox
                v-model="dataset.themes"
                :label="$labels.get('themes')"
                chips multiple append-icon="">
            <template slot="selection" slot-scope="data">
                <v-chip v-on:input="removeTheme(data.item)" close>
                    <strong>{{ data.item }}</strong>
                </v-chip>
            </template>
        </v-combobox>

    </v-container>
</template>

<script>
    import {createDatasetValidators} from "./dataset-model";
    import DatePicker from "./ui/date-picker";
    import RuinTypeCodelist from "./codelists/ruian_type"
    import FrequenciesCodeList from "./codelists/frequencies";

    export default {
        "name": "app-dataset-edit",
        "components" : {
            "app-date-picker" : DatePicker
        },
        "props": {
            "dataset": {"type": Object, "required": true}
        },
        "data": () => ({
            "frequencies": FrequenciesCodeList,
            "ruianTypes": RuinTypeCodelist
        }),
        "computed": {
            ...createDatasetValidators()
        },
        "watch": {
            "dataset": function() {
                console.log("dataset", arguments);
            }
        },
        "methods": {
            "removeKeyword": function (item) {
                const index = this.dataset.keywords.indexOf(item);
                this.dataset.keywords.splice(index, 1);
            },
            "removeTheme": function (item) {
                const index = this.dataset.themes.indexOf(item);
                this.dataset.themes.splice(index, 1);
            }
        }
    };
</script>