<template>
    <v-app>
        <v-toolbar>
            <v-toolbar-title>
                <h1>{{$labels.get("app_header")}}</h1>
            </v-toolbar-title>
        </v-toolbar>
        <router-view/>
    </v-app>
</template>

<script>
    export default {
        "name": "app"
    }
</script>