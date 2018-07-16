<template>
    <v-bottom-sheet v-if="data.isOpen" v-model="data.isOpen" lazy>
        <v-card>
            <v-card-text style="padding-bottom: 0px">
                <!-- {{$labels.get('help_' + data.name)}} -->
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed
                convallis magna eu sem. Cras elementum. Aenean fermentum risus
                id tortor. Mauris tincidunt sem sed arcu. Pellentesque pretium
                lectus id turpis.

                Mauris tincidunt sem sed arcu. Phasellus enim erat, vestibulum
                vel, aliquam a, posuere eu, velit. Mauris suscipit, ligula sit
                amet pharetra semper, nibh ante cursus purus, vel sagittis velit
                mauris vel metus. Sed elit dui, pellentesque a, faucibus vel,
                interdum nec, diam.
            </v-card-text>
            <v-layout justify-end="true">
                <v-btn v-on:click="data.isOpen = false">
                    Close
                </v-btn>
            </v-layout>
        </v-card>
    </v-bottom-sheet>
</template>

<script>

    const data = {
        "isOpen": false,
        "value": "",
        "show": onShow
    };

    function onShow(name) {
        data.isOpen = true;
        data.name = name;
    }

    export const Plugin = {
        "install": install
    };

    function install(Vue, options) {
        Object.defineProperty(Vue.prototype, "$h", {
            "get": () => data
        });
    }

    export default {
        "name": "app-help",
        "data": () => ({
            "data": data
        })
    }

</script>