<template>
    <v-app>
        <router-view/>
        <app-help/>
    </v-app>
</template>

<script>
    import Help from "@/app-service/help";

    export default {
        "name": "app",
        "components": {
            "app-help": Help
        },
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