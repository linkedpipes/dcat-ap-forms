import App from "./catalog-withdrawn.vue";
import AppLabels from "./shared-labels-en";
import CatalogLabels from "../catalog/catalog-labels-en";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "en", [AppLabels, CatalogLabels]);
