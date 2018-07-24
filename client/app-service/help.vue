<template>
    <v-bottom-sheet v-if="isOpen" v-model="isOpen" lazy>
        <v-card>
            <v-card-text>
                <span v-html="$labels.get('help_' + name)"/>
            </v-card-text>
        </v-card>
    </v-bottom-sheet>
</template>

<script>

    const data = {
        "isOpen": false,
        "name": ""
    };

    function onShow(name) {
        data.name = name;
        data.isOpen = true;
    }

    export const Plugin = {
        "install": install
    };

    function install(Vue, options) {
        Object.defineProperty(Vue.prototype, "$h", {
            "get": () => onShow
        });
    }

    export default {
        "name": "app-help",
        "data": () => data,
        "watch": {
            "$route" : function(location) {
                this.isOpen = false;
            }
        }
    }

</script>