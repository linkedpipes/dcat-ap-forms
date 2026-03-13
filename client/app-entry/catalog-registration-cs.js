import App from "./catalog-registration.vue";
import AppLabels from "./shared-labels-cs";
import CatalogLabels from "../catalog/catalog-labels-cs";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "cs", [AppLabels, CatalogLabels]);
