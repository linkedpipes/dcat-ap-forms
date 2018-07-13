<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <h1 class="headline">{{$labels.get("app_header")}}</h1>
            </v-toolbar-title>
        </v-toolbar>
        <router-view/>
    </v-app>
</template>

<script>
    export default {
        "name": "app",
        "watch": {
            "$labels": function () {
                this.updateTitle();
            }
        },
        "mounted": function () {
            this.updateTitle();
        },
        "methods": {
            "updateTitle": function () {
                document.title = this.$labels.get("app_header");
            }
        }
    }
</script>