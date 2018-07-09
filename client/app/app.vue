<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>{{$labels.get("app_header")}}</v-toolbar-title>
        </v-toolbar>
        <router-view/>
        <v-footer>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        "name": "app"
    }
</script>