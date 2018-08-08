import VueRouter from "vue-router";
import Dataset from "@/dataset/dataset.vue";
import Catalog from "@/catalog/catalog.vue";

const router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": Dataset
        }, {
            "path": "/" + encodeURI("registrace-datové-sady"),
            "component": Dataset
        }, {
            "path": "/" + encodeURI("registrace-lokálního-catalogu"),
            "component": Catalog
        }
    ]
});

export default router;