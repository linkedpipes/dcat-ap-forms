<template>
    <v-container fluid grid-list-lg>
        <v-layout align-center>
            <v-flex>
                <div class="display-3">{{dataset.title}}</div>
                <span class="subheading">{{dataset.description}}</span>
            </v-flex>
        </v-layout>
        <br/>
        <v-layout row wrap>
            <app-distribution-card
                    v-for="(item, index) in distributions"
                    :key="index"
                    :distribution="item"/>
        </v-layout>
    </v-container>
</template>

<script>
    import DistributionCard from "./ui/distribution-card";

    export default {
        "name": "app-export-summary",
        "components": {
            "app-distribution-card": DistributionCard
        },
        "props": {
            "dataset": {"type": Object, "required": true},
            "distributions": {"type": Array, "required": true}
        }
    }
</script>