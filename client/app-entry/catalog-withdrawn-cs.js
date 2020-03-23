import "babel-polyfill";
import "isomorphic-fetch";

import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import App from "./catalog-withdrawn.vue";
import {prepareLabels, Plugin as LabelsPlugin} from "@/app-service/labels";
import {Plugin as Help} from "@/app-service/help";
import AppLabels from "@/app/labels-cs";
import CatalogLabels from "@/catalog/labels-cs";

require("vuetify/dist/vuetify.css");

Vue.config.productionTip = false;

const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

Vue.use(Vuetify, {
  "lang": {
    "locales": {"cs": prepareLabels(AppLabels, CatalogLabels)},
    "current": "cs"
  },
  "theme": {
    "dark": dark
  }
});
Vue.use(VueRouter);
Vue.use(LabelsPlugin);
Vue.use(Help);

/* eslint-disable no-new */
new Vue({
  "el": "#app",
  "router": new VueRouter({"mode": "history"}),
  "render": (h) => h(App)
});
