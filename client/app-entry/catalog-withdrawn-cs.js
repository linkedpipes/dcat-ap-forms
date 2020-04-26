import App from "./catalog-withdrawn.vue";
import AppLabels from "../app/labels-cs";
import CatalogLabels from "../catalog/labels-cs";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "cs", [AppLabels, CatalogLabels]);
