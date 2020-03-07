const webpack = require("webpack");
const merge = require("webpack-merge");
const common = Object.assign({}, require("./webpack.common"));

module.exports = merge(common, {
  "mode": "development",
  "devtool": "eval",
  "entry": {
    "webpack-hot-middleware": "webpack-hot-middleware/client"
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
          "filename": "[name].js"
        }
      }
    },
    "occurrenceOrder": true
  },
  "devServer": {
    "hot": true
  },
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          "vue-style-loader",
          "css-loader"
        ]
      }, {
        // Apply linter during run development.
        "enforce": "pre",
        "test": /\.(js|vue)$/,
        "loader": "eslint-loader",
        "exclude": /node_modules/
      }, {
        //see: https://github.com/webpack-contrib/css-loader/issues/38#issuecomment-72287584
        "test": /\.(png|woff|woff2|eot|ttf|svg)$/,
        "loader": "url-loader?limit=100000"
      }
    ]
  },
  "plugins": [
    new webpack.HotModuleReplacementPlugin()
  ]
});
