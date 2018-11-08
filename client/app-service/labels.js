export function prepareLabels() {
    let result = {};
    for (let index = 0; index < arguments.length; ++index) {
        const arg = arguments[index];
        result = {
            ...result,
            ...arg
        };
    }
    return result;
}

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
