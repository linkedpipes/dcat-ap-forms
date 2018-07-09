<template>
    <v-content>
        <v-stepper v-model="ui.step" v-on:input="onStepperInput">
            <v-stepper-header>
                <v-stepper-step editable
                                :complete="ui.step > 1"
                                :rules="[() => isDatasetValid()]"
                                :step="1">
                    {{$labels.get("step_dataset")}}
                </v-stepper-step>
                <v-divider/>
                <v-stepper-step editable
                                :complete="ui.step > 2"
                                :rules="[isDistributionValid]"
                                :step="2">
                    {{$labels.get("step_distribution")}}
                </v-stepper-step>
                <v-divider/>
                <v-stepper-step editable :step="3">
                    {{$labels.get("step_download")}}
                </v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content :step="1">
                    <app-dataset :dataset="data.dataset"/>
                </v-stepper-content>
                <v-stepper-content :step="2">
                    <app-distribution-selector
                            v-model="ui.distribution"
                            v-on:add="addDistribution"
                            :distributions="data.distributions"/>
                    <app-distribution
                            v-if="data.distributions.length > 0"
                            :distribution="data.distributions[ui.distribution]"
                            v-on:delete="deleteDistribution"/>
                    <div v-else>
                        {{$labels.get('no_distribution')}}
                    </div>
                </v-stepper-content>
                <v-stepper-content :step="3">
                    Someday you may be able to download something from here ...
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        <app-step-navigation :min="1" :max="3" v-model="ui.step"/>
    </v-content>
</template>

<script>
    import DatasetEdit from "./dataset-edit";
    import DistributionEdit from "./distribution-edit";
    import {createDataset, isDatasetValid} from "./dataset-model";
    import {
        createDistribution,
        isDistributionValid
    } from "./distribution-model";
    import DistributionSelector from "./ui/distribution-selector";
    import StepperNavigation from "./ui/step-navigation";

    export default {
        "name": "app-dcat-ap-edit",
        "components": {
            "app-dataset": DatasetEdit,
            "app-distribution": DistributionEdit,
            "app-distribution-selector": DistributionSelector,
            "app-step-navigation": StepperNavigation
        },
        "data": () => ({
            "data": {
                "dataset": createDataset(),
                "distributions": [
                    createDistribution()
                ]
            },
            "ui": {
                "step": 1,
                "distribution": 0
            },
            "validation" : {
                "dataset": false,
                "distributions": false
            }
        }),
        "methods": {
            "isDatasetValid": function () {
                if (!this.validation.dataset) {
                    return true;
                }
                return isDatasetValid(this.data.dataset);
            },
            "isDistributionValid": function () {
                if (!this.validation.distributions) {
                    return true;
                }
                return isDistributionValid(this.data.distributions[0]);
            },
            "addDistribution": function () {
                this.data.distributions = [
                    ...this.data.distributions,
                    createDistribution()
                ];
                this.ui.distribution = this.data.distributions.length -1;
            },
            "deleteDistribution": function () {
                const index = this.ui.distribution;
                this.data.distributions = [
                    ...this.data.distributions.slice(0, index),
                    ...this.data.distributions.slice(index + 1)
                ];
                this.ui.distribution = Math.min(
                    this.ui.distribution,
                    this.data.distributions.length - 1);
            },
            "onStepperInput" : function(value) {
                if (!this.validation.dataset && value > 1) {
                    this.validation.dataset = true;
                    this.data.dataset.$validators.force = true;
                }
                if (value > 2) {
                    this.validation.distributions = true;
                    this.data.distributions.forEach((distribution) => {
                        distribution.$validators.force = true;
                    });
                }
            }
        }
    };
</script>

<style scoped>

</style>
