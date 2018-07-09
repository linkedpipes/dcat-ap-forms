import VueRouter from "vue-router";
import DcatApEdit from "@/dcat-ap/dcat-ap-edit.vue";

const router = new VueRouter({
    "routes": [
        {
            "path": "/",
            "component": DcatApEdit
        }
    ]
});

export default router;