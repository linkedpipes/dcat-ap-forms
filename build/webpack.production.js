const path = require("path");
const merge = require("webpack-merge");
const common = Object.assign({}, require("./webpack.common"));
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
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
    "occurrenceOrder": true,
    "minimizer": [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        "cache": true,
        "parallel": false,
        "sourceMap": false,
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
        "test": /\.css?$/,
        "use": [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  "plugins": [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ["dist"],
    }),
    new MiniCssExtractPlugin({
      "filename": "[name].[chunkhash].css",
    }),
    new CopyWebpackPlugin([
      {
        "from": path.join(__dirname, "..", "public", "assets"),
        "to": path.join(__dirname, "..", "dist", "assets"),
      },
    ]),
  ],
});
