import VueRouter from "vue-router";
import DatasetEdit from "@/dataset/edit/dataset.vue";
import DatasetDelete from "@/dataset/delete/dataset-delete.vue";
import CatalogEdit from "@/catalog/edit/catalog.vue";
import Home from "@/home/home";

const router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": Home
        }, {
            "path": "/" + encodeURI("registrace-datové-sady"),
            "component": DatasetEdit
        }, {
            "path": "/" + encodeURI("odstranění-datové-sady"),
            "component": DatasetDelete
        }, {
            "path": "/" + encodeURI("registrace-lokálního-katalogu"),
            "component": CatalogEdit
        }
    ]
});

export default router;