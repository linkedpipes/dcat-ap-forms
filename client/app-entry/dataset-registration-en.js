import App from "./dataset-registration.vue";
import AppLabels from "../app/labels-en";
import DatasetLabels from "../dataset/labels-en";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "en", [AppLabels, DatasetLabels]);
