import App from "./catalog-registration.vue";
import AppLabels from "../app/labels-en";
import CatalogLabels from "../catalog/labels-en";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "en", [AppLabels, CatalogLabels]);
