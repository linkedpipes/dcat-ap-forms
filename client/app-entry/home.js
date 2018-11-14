import "babel-polyfill";

import Vue from "vue";
import Vuetify from "vuetify";

import App from "./home.vue";

require("vuetify/dist/vuetify.css");

Vue.config.productionTip = false;

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
    "el": "#app",
    "render": (h) => h(App)
});
