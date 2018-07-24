import VueRouter from "vue-router";
import Dataset from "@/dataset/dataset.vue";

const router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": Dataset
        }, {
            "path": "/dataset",
            "component": Dataset
        }
    ]
});

export default router;