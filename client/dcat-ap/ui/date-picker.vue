<template>
    <v-menu
            ref="menu"
            v-model="menu"
            :return-value="value"
            :nudge-right="40"
            :close-on-content-click="false"
            transition="scale-transition"
            min-width="15rem"
            lazy offset-y full-width>
        <v-text-field
                slot="activator"
                :value="value"
                :label="label"
                v-on:input="updateValue"
                prepend-icon="event"
                readonly clearable/>
        <v-date-picker
                ref="picker"
                :value="value"
                @change="save"/>
    </v-menu>
</template>

<script>
    export default {
        "name": "app-date-picker",
        "props": {
            "value": {"required": true},
            "label": {"type": String, "required": true}
        },
        "data": () => ({
            "menu": false
        }),
        "methods": {
            "save": function (date) {
                this.$refs.menu.save(date);
                this.$emit("input", date);
            },
            "updateValue": function(value) {
                this.$emit("input", value);
            }
        }
    };
</script>