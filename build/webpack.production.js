const path = require("path");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const common = Object.assign({}, require("./webpack.common"));

module.exports = merge({
  "mode": "production",
  "output": {
    "filename": "[name].[chunkhash].js",
  },
  "optimization": {
    "splitChunks": {
      "cacheGroups": {
        "commons": {
          "test": /[\\/]node_modules[\\/]/,
          "name": "commons",
          "chunks": "all",
          "filename": "[name].[chunkhash].js",
        },
      },
    },
    "minimizer": [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        "terserOptions": {
          "compress": {
            "ecma": 6,
          },
        },
      }),
    ],
  },
  "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  "plugins": [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      "filename": "[name].[chunkhash].css",
    }),
    new CopyWebpackPlugin({
      "patterns": [{
        "from": path.join(__dirname, "..", "public", "assets"),
        "to": path.join(__dirname, "..", "dist", "assets"),
      }],
    }),
  ],
}, common);
