import App from "./dataset-registration.vue";
import AppLabels from "../app/labels-cs";
import DatasetLabels from "../dataset/labels-cs";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "cs", [AppLabels, DatasetLabels]);
