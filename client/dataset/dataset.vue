<template>
    <v-content v-if="data.ready">
        <v-stepper :value="ui.step" v-on:input="onStepperInput">
            <v-stepper-header>
                <v-stepper-step editable
                                :complete="ui.step > 1"
                                :rules="[isDatasetValid]"
                                :step="1">
                    {{$labels.get("step_dataset")}}
                </v-stepper-step>
                <v-divider/>
                <v-stepper-step editable
                                :complete="ui.step > 2"
                                :rules="[areDistributionsValid]"
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
                            :distribution="data.distributions[ui.distribution]"
                            :canBeDeleted="data.distributions.length > 1"
                            v-on:delete="deleteDistribution"/>
                </v-stepper-content>
                <v-stepper-content :step="3">
                    <app-export-summary
                            :dataset="data.dataset"
                            :is-valid="isDatasetValid() && areDistributionsValid()"
                            :distributions="data.distributions"/>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
        <div class="hidden-md-and-up">
            <app-step-navigation-mobile v-model="ui.step"/>
        </div>
        <div class="hidden-sm-and-down">
            <app-step-navigation-desktop v-model="ui.step"/>
        </div>
    </v-content>
    <v-content v-else>

    </v-content>
</template>

<script>
    import DatasetEdit from "./dataset-record-edit";
    import DistributionEdit from "./distribution-record-edit";
    import {
        createDataset,
        isDatasetValid,
        decorateDataset
    } from "./dataset-model";
    import {
        createDistribution,
        isDistributionValid,
        decorateDistribution
    } from "./distribution-model";
    import DistributionSelector from "./ui/distribution-selector";
    import StepperNavigationMobile from "./ui/step-navigation-mobile";
    import StepperNavigationDesktop from "./ui/step-navigation-desktop";
    import ExportSummary from "./export-summary";
    import {importFromUrl} from "./import-from-url";

    export default {
        "name": "app-dataset-edit",
        "components": {
            "app-dataset": DatasetEdit,
            "app-distribution": DistributionEdit,
            "app-distribution-selector": DistributionSelector,
            "app-step-navigation-mobile": StepperNavigationMobile,
            "app-step-navigation-desktop": StepperNavigationDesktop,
            "app-export-summary": ExportSummary
        },
        "data": () => ({
            "data": {
                "ready": false,
                "dataset": undefined,
                "distributions": []
            },
            "ui": {
                "step": 1,
                "distribution": 0
            },
            "validation": {
                "dataset": false,
                "distributions": false
            }
        }),
        "watch": {
            "$route": function (location) {
                if (location.query.step === undefined) {
                    this.ui.step = 1;
                } else if (location.query.step !== this.ui.step) {
                    this.ui.step = location.query.step;
                }
            }
        },
        "mounted": function () {
            const url = this.$route.query.url;
            if (url === undefined) {
                this.data.dataset = createDataset();
                this.data.distributions.push(createDistribution());
                this.data.ready = true;
                return;
            }
            console.time("loading from url");
            importFromUrl(url).then((result) => {
                const distributions = Object.values(result.distributions)
                    .map(item => decorateDistribution(item));
                this.data.dataset = decorateDataset(result.dataset);
                this.data.distributions = distributions;
                this.data.ready = true;
                console.timeEnd("loading from url");
            });
        },
        "methods": {
            "isDatasetValid": function () {
                if (!this.validation.dataset) {
                    return true;
                }
                return isDatasetValid(this.data.dataset);
            },
            "areDistributionsValid": function () {
                if (!this.validation.distributions) {
                    return true;
                }
                for (let index in this.data.distributions) {
                    const distribution = this.data.distributions[index];
                    if (!distribution.$validators.force) {
                        // Newly added distribution. User does not
                        // visited last step after adding this one.
                        continue;
                    }
                    if (!isDistributionValid(distribution)) {
                        return false;
                    }
                }
                return true;
            },
            "addDistribution": function () {
                this.data.distributions = [
                    ...this.data.distributions,
                    createDistribution()
                ];
                this.ui.distribution = this.data.distributions.length - 1;
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
            "onStepperInput": function (value) {
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
                this.$router.push({
                    "query": {
                        "step": value
                    }
                });
            }
        }
    };


</script>
