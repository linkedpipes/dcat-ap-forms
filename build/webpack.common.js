const path = require("path");
const webpack = require("webpack");
const {VueLoaderPlugin} = require("vue-loader");
const config = require("../configuration");

const entryPath = path.join(__dirname, "..", "client", "app-entry");

module.exports = {
  "entry": {
    "dataset-registration-en":
      path.join(entryPath, "dataset-registration-en.js"),
  },
  "output": {
    "path": path.join(__dirname, "..", "dist"),
    "publicPath": "./",
  },
  "resolve": {
    "modules": ["node_modules"],
    "extensions": [".js", ".vue"],
  },
  "module": {
    "rules": [
      {
        "test": /\.vue$/,
        "use": "vue-loader",
      },
      {
        "test": /\.js$/,
        "use": "babel-loader",
      },
      {
        //see: https://github.com/webpack-contrib/css-loader/issues/38#issuecomment-72287584
        "test": /\.(png|woff|woff2|eot|ttf|svg)$/,
        "use": [
          {
            "loader": "url-loader",
            "options": {
              "limit": 8192,
            },
          },
        ],
      },
    ],
  },
  "plugins": [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      "DEREFERENCE_PROXY": JSON.stringify(config.dereference_proxy),
      "NKOD_ISDS": JSON.stringify(config.nkod_databox),
    }),
  ],
};

