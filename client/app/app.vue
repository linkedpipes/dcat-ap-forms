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
        }
    }
</script>