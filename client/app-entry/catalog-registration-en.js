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

Vue.use(Vuetify, {
    "lang": {
        "locales": {"en": prepareLabels(AppLabels, CatalogLabels)},
        "current": "en"
    }
});
Vue.use(VueRouter);
Vue.use(LabelsPlugin);
Vue.use(Help);

/* eslint-disable no-new */
new Vue({
    "el": "#app",
    "router": new VueRouter(),
    "render": (h) => h(App)
});
