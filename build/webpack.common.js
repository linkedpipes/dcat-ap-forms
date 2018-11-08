const path = require("path");
const webpack = require("webpack");
const {VueLoaderPlugin} = require("vue-loader");
const config = require("../configuration");

const entryPath = path.join(__dirname, "..", "client", "app-entry");

module.exports = {
    "entry": {
        "catalog-registration-cs":
            path.join(entryPath, "catalog-registration-cs.js"),
        "catalog-registration-en":
            path.join(entryPath, "catalog-registration-en.js"),
        "catalog-withdrawn-cs":
            path.join(entryPath, "catalog-withdrawn-cs.js"),
        "catalog-withdrawn-en":
            path.join(entryPath, "catalog-withdrawn-en.js"),
        "dataset-registration-cs":
            path.join(entryPath, "dataset-registration-cs.js"),
        "dataset-registration-en":
            path.join(entryPath, "dataset-registration-en.js"),
        "dataset-withdrawn-cs":
            path.join(entryPath, "dataset-withdrawn-cs.js"),
        "dataset-withdrawn-en":
            path.join(entryPath, "dataset-withdrawn-en.js"),
        "home":
            path.join(entryPath, "home.js")
    },
    "output": {
        "path": path.join(__dirname, "..", "dist"),
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
        new webpack.DefinePlugin({
            "DEREFERENCE_PROXY": JSON.stringify(config.dereference_proxy),
            "NKOD_ISDS": JSON.stringify(config.nkod_databox)
        })
    ]
};