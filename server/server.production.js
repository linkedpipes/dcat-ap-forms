const path = require("path");
const bodyParser = require("body-parser");
const {respondWithEntryPoint} = require("./server.common");
const routes = require("./routes-map");
const fs = require("fs");

(function initialize() {
  const express = require("express");
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  const server = require("./server.common");
  server.initialize(app);
  initializeStatic(app, express);
  initializeEntryPoints(app);
  server.start(app);
})();

function initializeStatic(app, express) {
  app.use(express.static(path.join(__dirname, "..", "dist")));
}

function initializeEntryPoints(app) {
  console.log("Preparing entry points ...");
  const distFiles = listDistFiles();
  routes.forEach((route) => {
    const files =
      distFiles.filter((file) => isFileUsedForRoute(route, file));
    const javascriptFiles = files.filter((file) => file.endsWith(".js"));
    const cssFiles = files.filter((file) => file.endsWith(".css"));
    app.get(
      route.path,
      createEntryPointGetHandler(route, javascriptFiles, cssFiles));
    app.post(
      route.path,
      createEntryPointPostHandler(route, javascriptFiles, cssFiles));
  });
  console.log("Preparing entry points ... done");
}

function listDistFiles() {
  const base = path.join(__dirname, "..", "dist");
  return fs.readdirSync(base)
    .filter((file) => fs.lstatSync(path.join(base, file)).isFile());
}

function isFileUsedForRoute(route, file) {
  return file.includes(route["name"] + ".") || file.includes("commons.");
}

function createEntryPointGetHandler(route, javascriptFiles, cssFiles) {
  return (req, res) => {
    respondWithEntryPoint(javascriptFiles, cssFiles, route, res);
  };
}

function createEntryPointPostHandler(route, javascriptFiles, cssFiles) {
  return (req, res) => {
    let body = req.body;
    if (req.headers["content-type"] === "application/x-www-form-urlencoded") {
      body = decodeBodyFields(req.body);
    }
    respondWithEntryPoint(
      javascriptFiles, cssFiles,
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
