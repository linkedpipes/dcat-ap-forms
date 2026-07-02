import App from "./dataset-withdrawn.vue";
import AppLabels from "./shared-labels-cs";
import DatasetLabels from "../dataset/dataset-labels-cs";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "cs", [AppLabels, DatasetLabels]);
