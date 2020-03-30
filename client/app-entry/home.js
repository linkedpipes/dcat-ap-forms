import "babel-polyfill";

import Vue from "vue";
import Vuetify from "vuetify";

import UploadButton from "vuetify-upload-button";

import App from "./home.vue";

require("vuetify/dist/vuetify.css");

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(UploadButton);

var dark = false;
var mq = null;
if (window.matchMedia) {
  mq = window.matchMedia("(prefers-color-scheme: dark)");
  dark = mq.matches;
}

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

if (mq != null) {
  mq.addEventListener("change", (e) => {
    vuetify.framework.theme.dark = e.matches;
  });
}
