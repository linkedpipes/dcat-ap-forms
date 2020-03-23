import "babel-polyfill";
import "isomorphic-fetch";
import "@mdi/font/css/materialdesignicons.css";

import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import App from "./catalog-registration.vue";
import {prepareLabels, Plugin as LabelsPlugin} from "@/app-service/labels";
import {Plugin as Help} from "@/app-service/help";
import AppLabels from "@/app/labels-en";
import CatalogLabels from "@/catalog/labels-en";

require("vuetify/dist/vuetify.css");

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(LabelsPlugin);
Vue.use(Help);

const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

/* eslint-disable no-new */
const opts = {
  "lang": {
    "locales": {"en": prepareLabels(AppLabels, CatalogLabels)},
    "current": "en"
  },
  "theme": {
    "dark": dark
  }
};

const vuetify = new Vuetify(opts);

/* eslint-disable no-new */
new Vue({
  "vuetify": vuetify,
  "el": "#app",
  "router": new VueRouter({"mode": "history"}),
  "render": (h) => h(App)
});
