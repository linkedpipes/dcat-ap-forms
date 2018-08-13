import CatalogLabels from "@/catalog/labels";
import DatasetLabels from "@/dataset/labels";
import HomeLabels from "@/home/labels";

const VuetifyLocalization = {
    "noDataText": "Dotazu neodpovídají žádná data."
};

export const Labels = {
    "cs": {
        ...CatalogLabels,
        ...DatasetLabels,
        ...HomeLabels,
        ...VuetifyLocalization
    }
};

function install(Vue, options) {
    Object.defineProperty(Vue.prototype, "$labels", {
        "get": function () {
            return {
                "get": (name) => this.$vuetify.t("$vuetify." + name)
            };
        }
    });
}

export const Plugin = {
    "install": install
};


