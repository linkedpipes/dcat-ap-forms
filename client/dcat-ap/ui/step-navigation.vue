<template>
    <v-layout row>
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
        <v-btn v-on:click="onDownload"
               :disabled="!isValid"
               v-if="value === 3"
               flat color="primary">
            <v-icon>file_download</v-icon>
            {{$labels.get('nav_download')}}
        </v-btn>
    </v-layout>
</template>

<script>
    export default {
        "name": "app-step-navigation",
        "props": {
            "value": {"required": true},
            "isValid" : {"required": true}
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