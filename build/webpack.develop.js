const webpack = require("webpack");
const {merge} = require("webpack-merge");
const common = Object.assign({}, require("./webpack.common"));

module.exports = merge({
  "mode": "development",
  "devtool": "eval",
  "entry": {
    "webpack-hot-middleware": "webpack-hot-middleware/client",
  },
  "output": {
    "filename": "[name].js",
  },
  "devServer": {
    "hot": true,
  },
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          "vue-style-loader",
          // https://github.com/vuejs/vue-style-loader/issues/46
          {
            "loader": "css-loader",
            "options": {
              "esModule": false,
            },
          },
        ],
      },
      {
        "enforce": "pre",
        "test": /\.(js|vue)$/,
        "loader": "eslint-loader",
        "exclude": /node_modules/,
      },
    ],
  },
  "plugins": [
    new webpack.HotModuleReplacementPlugin(),
  ],
}, common);
