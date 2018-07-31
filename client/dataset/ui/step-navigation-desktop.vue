<template>
    <v-layout row mt-1>
        <v-btn v-on:click="onPrevious"
               v-if="value > 1"
               flat>
            <v-icon>arrow_back</v-icon>
            {{prevLabel}}
        </v-btn>
        <v-spacer/>
        <v-btn v-on:click="onNext"
               v-if="value < 3"
               flat color="primary">
            {{nextLabel}}
            <v-icon>arrow_forward</v-icon>
        </v-btn>
    </v-layout>
</template>

<script>
    export default {
        "name": "app-step-navigation-desktop",
        "props": {
            "value": {"required": true},
        },
        "computed": {
            "prevLabel": function() {
                switch (this.value) {
                    case 2:
                        return this.$labels.get("nav_dataset");
                    case 3:
                        return this.$labels.get("nav_distributions")
                }
            },
            "nextLabel": function() {
                switch (this.value) {
                    case 1:
                        return this.$labels.get("nav_distributions");
                    case 2:
                        return this.$labels.get("nav_download")
                }
            }
        },
        "methods": {
            "onPrevious": function () {
                this.$emit("input", this.value - 1);
            },
            "onNext": function () {
                this.$emit("input", this.value + 1);
            },
            "onDownload": function() {
                this.$emit("download");
            }
        }
    }
</script>