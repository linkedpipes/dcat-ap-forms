import "babel-polyfill";

import Vue from "vue";
import Vuetify from "vuetify";

import UploadButton from "vuetify-upload-button";

import App from "./home.vue";

require("vuetify/dist/vuetify.css");

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(UploadButton);

const dark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;

const opts = {
  "theme": {
    "dark": dark
  }
}
/* eslint-disable no-new */
const vuetify = new Vuetify(opts);
new Vue({
  "vuetify": vuetify,
  "el": "#app",
  "render": (h) => h(App),
});
