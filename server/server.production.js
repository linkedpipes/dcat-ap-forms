const path = require("path");
const bodyParser = require("body-parser");
const htmlTemplateFactory = require("./html-template");
const routes = require("./routes-map");
const fs = require("fs");

(function initialize() {
  const express = require("express");
  const app = express();
  app.use(bodyParser.json());
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
    const javaScriptFiles = files.filter((file) => file.endsWith(".js"));
    const cssFiles = files.filter((file) => file.endsWith(".css"));
    app.get(
      route.path,
      createEntryPointGetHandler(route, javaScriptFiles, cssFiles));
    app.get(
      route.path,
      createEntryPointPostHandler(route, javaScriptFiles, cssFiles));
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
  const options = {"lang": route["lang"]};
  return (req, res) => {
    respondWithEntryPoint(javascriptFiles, cssFiles, options, res);
  };
}

function respondWithEntryPoint(javaScriptFiles, cssFiles, options, response) {
  const html = htmlTemplateFactory.create(javaScriptFiles, cssFiles, options);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(html);
}

function createEntryPointPostHandler(route) {
  return (req, res) => {
    respondWithEntryPoint(
      getEntryJavascriptFiles(route),
      {"lang:": route["lang"], "data": req.body},
      res
    );
  };
}


