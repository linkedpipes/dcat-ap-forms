import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import App from "@/app/app";
import router from "@/app/router";
import Labels from "@/app-service/labels";

require("vuetify/dist/vuetify.css");

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(Labels);

/* eslint-disable no-new */
new Vue({
    "el": "#app",
    "router": router,
    "render": (h) => h(App)
});
