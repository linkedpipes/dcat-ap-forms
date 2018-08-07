const path = require("path");
const webpack = require("webpack");
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    "entry": [
        path.join(__dirname, "..", "client", "index.js")
    ],
    "output": {
        "path": path.join(__dirname, "..", "dist"),
        "filename": "bundle.js",
        "publicPath": "./"
    },
    "resolve": {
        "modules": ["node_modules"],
        "extensions": [".js", ".vue"],
        "alias": {
            "@": path.resolve("client")
        }
    },
    "module": {
        "rules": [
            {
                "test": /\.vue$/,
                "use": "vue-loader"
            }, {
                "test": /\.js$/,
                "use": "babel-loader"
            }
        ]
    },
    "plugins": [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            "filename": "index.html",
            "template": path.join(__dirname, "..", "public", "index.html"),
            "inject": true
        }),
        new webpack.DefinePlugin({
            "URL_PREFIX" : "\".\""
        })
    ]
};