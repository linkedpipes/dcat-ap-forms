import App from "./catalog-withdrawn.vue";
import AppLabels from "../app/labels-en";
import CatalogLabels from "../catalog/labels-en";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "en", [AppLabels, CatalogLabels]);
