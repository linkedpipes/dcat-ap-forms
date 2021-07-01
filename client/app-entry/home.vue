<template>
  <v-app>
    <v-container style="text-align: center">
      <h1>Registrační formuláře katalogů otevřených dat</h1>
      <hr>
    </v-container>
    <v-container>
      <v-row
        v-for="(row, index) in rows"
        :key="index"
        justify="center"
      >
        <v-col
          v-for="card in row"
          :key="card.link"
          cols="12"
          md="6"
          lg="3"
        >
          <v-card outlined>
            <v-card-title style="text-align: center">
              <v-layout justify-center>
                <a :href="card.link">
                  {{ card.title }}
                </a>
              </v-layout>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  "name": "Home",
  "data": () => ({
    "rows": [
      [
        {
          "title": "Registrace datové sady",
          "link": "./registrace-datové-sady",
        }, {
          "title": "Registrace lokálního katalogu",
          "link": "./registrace-lokálního-katalogu",
        }, {
          "title": "Registrace datové sady LKOD",
          "link": "./registrace-datové-sady?lkod",
        },
      ], [
        {
          "title": "Dataset registration",
          "link": "./dataset-registration",
        }, {
          "title": "Local catalog registration",
          "link": "./local-catalog-registration",
        }, {
          "title": "Dataset registration LODC",
          "link": "./dataset-registration?lkod",
        },
      ],
    ],
  }),
};
</script>