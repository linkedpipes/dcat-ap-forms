export function prepareLabels(labels) {
  let result = {};
  for (let item of labels) {
    result = {
      ...result,
      ...item,
    };
  }
  return result;
}

function install(Vue) {
  Object.defineProperty(Vue.prototype, "$t", {
    "value": function (name) {
      return this.$vuetify.lang.t("$vuetify." + name);
    },
  });
}

export const LabelsPlugin = {
  "install": install,
};
