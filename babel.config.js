module.exports = (api) => {

  api.cache.using(() => process.env.NODE_ENV);

  const presets = [
    ["@babel/preset-env"],
  ];

  const plugins = [
    ["@babel/plugin-transform-runtime", {

    }],
  ];

  const ignore = [
    "node_modules",
  ];

  return {
    "presets": presets,
    "plugins": plugins,
    "ignore": ignore,
  };
};
