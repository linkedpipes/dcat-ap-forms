import CatalogLabels from "@/catalog/labels";
import DatasetLabels from "@/dataset/labels";
import HomeLabels from "@/home/labels";

const VuetifyLocalization = {
    "noDataText": "Dotazu neodpovídají žádná data."
};

const GlobalLabels = {
    "nkod_databox" : "uur3q2i"
};

export const Labels = {
    "cs": {
        ...CatalogLabels,
        ...DatasetLabels,
        ...HomeLabels,
        ...GlobalLabels,
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


