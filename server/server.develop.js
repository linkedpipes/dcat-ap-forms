
(function initialize() {
    const express = require("express");
    const app = express();
    const server = require("./server.common");
    server.initialize(app);
    initializeWebpack(app);
    server.start(app);
})();

function initializeWebpack(app) {
    const webpack = require("webpack");
    const config = require("../build/webpack.develop.js");
    const webpackMiddleware = require("webpack-dev-middleware");
    // https://github.com/webpack-contrib/webpack-hot-middleware
    const webpackHotMiddleware = require("webpack-hot-middleware");
    const webpackCompiler = webpack(config);
    app.use(webpackMiddleware(webpackCompiler, {
        "publicPath": config.output.publicPath.substr(1),
        "stats": {
            "colors": true,
            "chunks": false
        }
    }));
    app.use(webpackHotMiddleware(webpackCompiler));
}
