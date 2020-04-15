import "babel-polyfill";
import "isomorphic-fetch";

import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import App from "./dataset-withdrawn.vue";
import {prepareLabels, Plugin as LabelsPlugin} from "../app-service/labels";
import {Plugin as Help} from "../app-service/help";
import AppLabels from "../app/labels-en";
import DatasetLabels from "../dataset/labels-en";

import "vuetify/dist/vuetify.css";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(LabelsPlugin);
Vue.use(Help);

let dark = false;
let mq = null;
if (window.matchMedia) {
  mq = window.matchMedia("(prefers-color-scheme: dark)");
  dark = mq.matches;
}

const opts = {
  "lang": {
    "locales": {"en": prepareLabels(AppLabels, DatasetLabels)},
    "current": "en"
  },
  "theme": {
    "dark": dark
  }
};

/* eslint-disable no-new */
const vuetify = new Vuetify(opts);
new Vue({
  "vuetify": vuetify,
  "el": "#app",
  "router": new VueRouter({"mode": "history"}),
  "render": (h) => h(App)
});

if (mq != null) {
  mq.addEventListener("change", (e) => {
    vuetify.framework.theme.dark = e.matches;
  });
}
