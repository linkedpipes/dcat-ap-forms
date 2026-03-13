import App from "./dataset-withdrawn.vue";
import AppLabels from "./shared-labels-en";
import DatasetLabels from "../dataset/dataset-labels-en";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "en", [AppLabels, DatasetLabels]);
