import VueRouter from "vue-router";
import Dataset from "@/dataset/dataset.vue";
import Catalog from "@/catalog/catalog.vue";
import Home from "@/home/home";

const router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": Home
        }, {
            "path": "/" + encodeURI("registrace-datové-sady"),
            "component": Dataset
        }, {
            "path": "/" + encodeURI("registrace-lokálního-katalogu"),
            "component": Catalog
        }
    ]
});

export default router;