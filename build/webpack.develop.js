const webpack = require("webpack");
const merge = require("webpack-merge");
const common = Object.assign({}, require("./webpack.common"));

module.exports = merge(common, {
  "mode": "development",
  "devtool": "eval",
  "entry": {
    "webpack-hot-middleware": "webpack-hot-middleware/client",
  },
  "output": {
    "filename": "[name].js",
  },
  "optimization": {
    "splitChunks": {
      "cacheGroups": {
        "commons": {
          "test": /[\\/]node_modules[\\/]/,
          "name": "commons",
          "chunks": "all",
          "filename": "[name].js",
        },
      },
    },
    "occurrenceOrder": true,
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
          "css-loader",
        ],
      }, {
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
});
