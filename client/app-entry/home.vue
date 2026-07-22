<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="2" />
        <v-col
          cols="8"
          style="text-align: center"
        >
          <h1>{{ view.title }}</h1>
        </v-col>
        <v-col
          cols="2"
          class="d-flex justify-end align-center"
        >
          <v-img
            v-show="locale !== 'cs'"
            alt="Čeština"
            src="./assets/images/flag-cs.svg"
            max-width="2em"
            class="mr-2"
            style="cursor: pointer"
            @click="setLocale('cs')"
          />
          <v-img
            v-show="locale !== 'en'"
            alt="English"
            src="./assets/images/flag-en.svg"
            max-width="2em"
            class="mr-2"
            style="cursor: pointer"
            @click="setLocale('en')"
          />
        </v-col>
      </v-row>
    </v-container>
    <hr>
    <v-container>
      <v-row
        v-for="row in view.items"
        :key="row.link"
        justify="center"
        class="mb-3"
      >
        <v-col
          v-for="(item, index) in row"
          :key="index"
          cols="12"
          md="6"
          lg="3"
        >
          <v-card
            outlined
            class="d-flex justify-center"
            style="height: 100%;"
          >
            <v-card-title style="text-align: center">
              <a :href="item.link">{{ item.title }}</a>
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
    // Active language.
    "locale": "cs",
    //
    "cs":{
      "title": "Registrační formuláře katalogů dat",
      "items": [
        [{
          "title": "Registrace lokálního katalogu",
          "link": "./registrace-lokálního-katalogu",
        }], [
          {
            "title": "Registrace otevřené datové sady",
            "link": "./registrace-datové-sady?mód=otevřená-data",
          },{
            "title": "Registrace datové sady s vysokou hodnotou",
            "link": "./registrace-datové-sady?mód=datová-sada-s-vysokou-hodnotou",
          }, {
            "title": "Registrace neveřejné datové sady",
            "link": "./registrace-datové-sady?mód=neveřejná-data",
          }],
      ],
    },
    //
    "en": {
      "title": "Registration forms for data catalog",
      "items": [
        [{
          "title": "Local catalog registration",
          "link": "./local-catalog-registration",
        }],[{
          "title": "Open dataset registration",
          "link": "./dataset-registration?mode=open-data",
        },{
          "title": "High Value Dataset (HVD) registration",
          "link": "./dataset-registration?mode=high-value-dataset",
        },{
          "title": "Non-public dataset registration",
          "link": "./dataset-registration?mode=non-public",
        }],
      ],
    },
  }),
  "computed": {
    "view": function() {
      return this[this.locale];
    },
  },
  /**
   * We need to resolve locale.
   */
  "beforeMount": function() {
    // 1. URL query param takes priority
    const queryLang = this.$route?.query?.language;
    if (queryLang === "cs" || queryLang === "en") {
      this.locale = queryLang;
      return;
    }
    // 2. Fall back to browser locale
    const browserLang = (
      navigator.language ||
        navigator.userLanguage ||
        ""
    ).toLowerCase();
    this.locale = browserLang.startsWith("cs") ? "cs" : "en";
  },
  "methods": {
    /** @param {string} language */
    "setLocale": function(language) {
      this.locale = language;
      // Update path since this is not the default.
      this.$router.replace({
        "query": { ...this.$route.query, "language": language },
      }).catch(() => {}); // ignore NavigationDuplicated if value unchanged
    },
  },
};
</script>

<style scoped>
  .v-card .v-card__title a {
    word-break: break-word;
  }
</style>
