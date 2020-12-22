import App from "./dataset-withdrawn.vue";
import AppLabels from "./labels-en";
import DatasetLabels from "../dataset/labels-en";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "en", [AppLabels, DatasetLabels]);
