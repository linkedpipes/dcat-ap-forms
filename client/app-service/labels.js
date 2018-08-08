import CatalogLabels from "@/catalog/labels";
import DatasetLabels from "@/dataset/labels";

const VuetifyLocalization = {
    "noDataText": "Dotazu neodpovídají žádná data."
};

export const Labels = {
    "cs": {
        ...CatalogLabels,
        ...DatasetLabels,
        ...VuetifyLocalization
    }
};

function install(Vue, options) {

    // Add property getter to every component.
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


