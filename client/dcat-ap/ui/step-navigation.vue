<template>
    <v-layout row>
        <v-btn v-on:click="onPrevious"
               :disabled="value - 1 < min"
               flat icon>
            <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-spacer/>
        <v-btn v-on:click="onNext"
               v-if="value < max"
               flat icon color="primary">
            <v-icon>arrow_forward</v-icon>
        </v-btn>
        <v-btn v-on:click="onDownload"
               v-if="value === max"
               flat icon color="primary">
            <v-icon>file_download</v-icon>
        </v-btn>
    </v-layout>
</template>

<script>
    export default {
        "name": "app-step-navigation",
        "props": {
            "value": {"required": true},
            "min": {"required": true},
            "max": {"required": true}
        },
        "methods": {
            "onPrevious": function () {
                this.$emit("input", this.value - 1);
            },
            "onNext": function () {
                this.$emit("input", this.value + 1);
            },
            "onDownload": function() {
                // TODO Add download + validation as disable state to button.
            }
        }
    }
</script>