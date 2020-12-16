import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import {prepareLabels, LabelsPlugin} from "../app-service/labels";
import {HelpPlugin} from "../app-service/help-service";
import {initializeTheme, registerListener} from "../app-service/theme";

import "vuetify/dist/vuetify.min.css";
import "../dark-mode-fix.css";
import "@mdi/font/css/materialdesignicons.css";

export function initializeApplication(application, language, labels) {
  Vue.config.productionTip = false;
  Vue.use(VueRouter);
  Vue.use(Vuetify);
  Vue.use(LabelsPlugin);
  Vue.use(HelpPlugin);

  const options = {
    "lang": {
      "locales": {[language]: prepareLabels(labels)},
      "current": language,
    },
    "theme": {
      "dark": initializeTheme(),
    },
  };

  const vuetify = new Vuetify(options);
  /* eslint-disable no-new */
  new Vue({
    "vuetify": vuetify,
    "el": "#app",
    "router": new VueRouter({"mode": "history"}),
    "render": (h) => h(application),
  });
  registerListener(vuetify);
}
