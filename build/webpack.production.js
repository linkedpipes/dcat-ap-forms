const merge = require("webpack-merge");
const common = Object.assign({}, require("./webpack.common"));
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {
    "mode": "production",
    "output": {
        "filename": "bundle.[chunkhash].js",
    },
    "optimization": {
        "splitChunks": {
            "cacheGroups": {
                "commons": {
                    "test": /[\\/]node_modules[\\/]/,
                    "name": "vendor",
                    "chunks": "all",
                    "filename": "commons.[chunkhash].js"
                },
            },
        },
        "minimizer": [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    "module": {
        "rules": [
            {
                "test": /\.css?$/,
                "use": [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    "plugins": [
        new MiniCssExtractPlugin({
            "filename": "main.[hash].css"
        })
    ]
});
