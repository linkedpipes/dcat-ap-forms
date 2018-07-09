const webpack = require("webpack");
const merge = require("webpack-merge");
const common = Object.assign({}, require("./webpack.common"));

module.exports = merge(common, {
    "mode": "development",
    "devtool": "inline-source-map",
    "entry": [
        "webpack-hot-middleware/client"
    ],
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
            }
        ]
    },
    "plugins": [
        new webpack.HotModuleReplacementPlugin()
    ]
});
