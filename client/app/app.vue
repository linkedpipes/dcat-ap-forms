<template>
    <v-app>
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