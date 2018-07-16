<template>
    <v-bottom-sheet v-if="data.isOpen" v-model="data.isOpen" lazy>
        <v-card>
            <v-card-text style="padding-bottom: 0px">
                <span v-html="$labels.get('help_' + data.name)"/>
            </v-card-text>
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