import App from "./dataset-withdrawn.vue";
import AppLabels from "./labels-cs";
import DatasetLabels from "../dataset/labels-cs";
import {initializeApplication} from "./entry-point";

initializeApplication(App, "cs", [AppLabels, DatasetLabels]);
