import VueRouter from "vue-router";
import Dataset from "@/dataset/dataset.vue";
import Catalog from "@/catalog/catalog.vue";

const router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": Dataset
        }, {
            "path": "/dataset",
            "component": Dataset
        }, {
            "path": "/catalog",
            "component": Catalog
        }
    ]
});

export default router;