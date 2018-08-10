<template>
    <div class="centred">
        <v-btn v-on:click="onPrevious"
               :disabled="value < 1"
               flat icon>
            <v-icon>navigate_before</v-icon>
        </v-btn>
        <v-btn v-for="(item, index) in distributions" :key="index" flat icon>
            <v-icon v-on:click="onSelect(index)"
                    :color="index === value ? 'blue' : undefined">
                lens
            </v-icon>
        </v-btn>
        <v-btn v-on:click="onNew" flat icon>
            <v-icon color="green">add_circle</v-icon>
        </v-btn>
        <v-btn v-on:click="onNext"
               :disabled="value + 1 >= distributions.length"
               flat icon>
            <v-icon>navigate_next</v-icon>
        </v-btn>
    </div>
</template>

<script>
    import {isDistributionValid} from "../distribution-model";

    export default {
        "name": "app-item-selector",
        "props": {
            "value": {"type": Number, "required": true},
            "distributions": {"type": Array, "required": true}
        },
        "methods": {
            "onPrevious": function () {
                this.$emit("input", this.value - 1);
            },
            "onNew": function () {
                this.$emit("add");
            },
            "onNext": function () {
                this.$emit("input", this.value + 1);
            },
            "onSelect": function (index) {
                this.$emit("input", index);
            }
        }
    };
</script>

<style scoped>
    .centred {
        text-align: center;
    }
    .active {
        color: blue;
    }
</style>