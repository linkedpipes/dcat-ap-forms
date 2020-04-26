const data = {
  "isOpen": false,
  "name": "",
};

export const HelpPlugin = {
  "install": install,
};

function install(Vue) {
  Object.defineProperty(Vue.prototype, "$h", {
    "get": () => onShow,
  });
}

function onShow(name) {
  data.name = name;
  data.isOpen = true;
}

export function getData() {
  return data;
}