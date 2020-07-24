const htmlTemplateFactory = require("./html-template");
const routes = require("./routes-map");
const bodyParser = require("body-parser");

(function initialize() {
  const express = require("express");
  const app = express();
  app.use(bodyParser.json());
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
    respondWithEntryPoint(getEntryJavascriptFiles(route),
      {
        ...route,
        "data": {
          "formData": DATASET,
          "userData": {
            "token": "123456",
          },
        },
      },
      res);
  }
}

function getEntryJavascriptFiles(route) {
  return [
    "./webpack-hot-middleware.js",
    "./commons.js",
    "./" + route.name + ".js",
  ];
}

function respondWithEntryPoint(javaScriptFiles, options, response) {
  const html = htmlTemplateFactory.create(javaScriptFiles, [], options);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(html);
}

function createEntryPointPostHandler(route) {
  return (req, res) => {
    respondWithEntryPoint(
      getEntryJavascriptFiles(route),
      {...route, "data": req.body},
      res
    );
  }
}
