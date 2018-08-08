import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "@/app/app";
import router from "@/app/router";
import {Labels, Plugin as LabelsPlugin} from "@/app-service/labels";
import {Plugin as Help} from "@/app-service/help";

require("vuetify/dist/vuetify.css");

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify, {
    "lang": {
        "locales": Labels,
        "current": "cs"
    }
});
Vue.use(LabelsPlugin);
Vue.use(Help);


/* eslint-disable no-new */
new Vue({
    "el": "#app",
    "router": router,
    "render": (h) => h(App)
});
