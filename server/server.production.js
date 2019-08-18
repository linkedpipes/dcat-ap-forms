const path = require("path");
const htmlTemplateFactory = require("./html-template");
const routes = require("./routes-map");
const fs = require("fs");

(function initialize() {
  const express = require("express");
  const app = express();
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
    const html = generateEntryPointsResponse(route, distFiles);
    app.get(route.path, (req, res) => {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(html);
    });
  });
  console.log("Preparing entry points ... done");
}

function listDistFiles() {
  const base = path.join(__dirname, "..", "dist");
  return fs.readdirSync(base)
    .filter((file) => fs.lstatSync(path.join(base, file)).isFile());
}

function generateEntryPointsResponse(route, distFiles) {
  const files = distFiles.filter((file) => useFileForRoute(route, file));
  const javascript = files.filter((file) => file.endsWith(".js"));
  const css = files.filter((file) => file.endsWith(".css"));
  return htmlTemplateFactory.create(javascript, css, route);
}

function useFileForRoute(route, file) {
  return file.includes(route["name"] + ".") || file.includes("commons.");
}