<template>
    <v-app>
        <app-header/>
        <router-view/>
    </v-app>
</template>

<script>
    import Header from "./header";

    export default {
        "name": "app",
        "components": {
            "app-header": Header
        },
        "data": () => ({
            "drawer": false
        })
    }
</script>