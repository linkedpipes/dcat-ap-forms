<template>
    <v-bottom-nav :active="value" absolute class="hidden-md-and-up">
        <v-btn color="blue" flat :value="1" v-on:click="onClick(1)">
            <span>{{$labels.get('nav_dataset')}}</span>
            <v-icon>note</v-icon>
        </v-btn>
        <v-btn color="blue" flat :value="2" v-on:click="onClick(2)">
            <span>{{$labels.get('nav_distributions')}}</span>
            <v-icon>attach_file</v-icon>
        </v-btn>
        <v-btn color="blue" flat :value="3" v-on:click="onClick(3)">
            <span>{{$labels.get('nav_download')}}</span>
            <v-icon>cloud_download</v-icon>
        </v-btn>
    </v-bottom-nav>
</template>

<script>
    export default {
        "name": "app-step-navigation",
        "props": {
            "value": {"required": true},
        },
        "methods": {
            "onClick": function (value) {
                this.$emit("input", value);
            }
        }
    }
</script>