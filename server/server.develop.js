const bodyParser = require("body-parser");
const {respondWithEntryPoint} = require("./server.common");
const routes = require("./routes-map");

(function initialize() {
  const express = require("express");
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const server = require("./server.common");
  server.initialize(app);
  initializeWebpack(app);
  initializeStatic(app);
  initializeEntryPoints(app);
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
      "chunks": false,
    },
  }));
  app.use(webpackHotMiddleware(webpackCompiler));
}

function initializeStatic(app) {
  const express = require("express");
  const path = require("path");
  const assetsPath = path.join(__dirname, "../public/assets");
  app.use("/assets", express.static(assetsPath));
}

function initializeEntryPoints(app) {
  routes.forEach((route) => {
    app.get(route.path, createEntryPointGetHandler(route));
    app.post(route.path, createEntryPointPostHandler(route));
  });
}

function createEntryPointGetHandler(route) {
  return (req, res) => {
    respondWithEntryPoint(getEntryJavascriptFiles(route), [], route, res);
  };
}

function getEntryJavascriptFiles(route) {
  return [
    "webpack-hot-middleware.js",
    "commons.js",
    route.name + ".js",
  ];
}

function createEntryPointPostHandler(route) {
  return (req, res) => {
    let body = req.body;
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
      body = decodeBodyFields(req.body);
    }
    respondWithEntryPoint(
      getEntryJavascriptFiles(route),
      [],
      {...route, "data": body},
      res
    );
  };
}

function decodeBodyFields(body) {
  const result = {};
  Object.keys(body).forEach((key) => {
    result[key] = JSON.parse(body[key]);
  })
  return result;
}
