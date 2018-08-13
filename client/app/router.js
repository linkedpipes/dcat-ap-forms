import VueRouter from "vue-router";
import DatasetEdit from "@/dataset/edit/dataset.vue";
import DatasetDelete from "@/dataset/delete/dataset-delete.vue";
import CatalogEdit from "@/catalog/edit/catalog.vue";
import CatalogDelete from "@/catalog/delete/catalog-delete.vue";
import Home from "@/home/home";

const router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": Home
        }, {
            "path": "/" + encodeURI("registrace-datové-sady"),
            "component": DatasetEdit,
            "name": "dataset-registration"
        }, {
            "path": "/" + encodeURI("odstranění-datové-sady"),
            "component": DatasetDelete,
            "name": "dataset-withdrawn"
        }, {
            "path": "/" + encodeURI("registrace-lokálního-katalogu"),
            "component": CatalogEdit,
            "name": "catalog-registration"
        }, {
            "path": "/" + encodeURI("odstranění-lokálního-katalogu"),
            "component": CatalogDelete,
            "name": "catalog-withdrawn"
        }
    ]
});

export default router;