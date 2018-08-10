import VueRouter from "vue-router";
import DatasetEdit from "@/dataset/edit/dataset.vue";
import CatalogEdit from "@/catalog/edit/catalog.vue";
import Home from "@/home/home";

export default router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": Home
        }, {
            "path": "/" + encodeURI("registrace-datové-sady"),
            "component": DatasetEdit
        }, {
            "path": "/" + encodeURI("registrace-lokálního-katalogu"),
            "component": CatalogEdit
        }
    ]
});
