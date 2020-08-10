const htmlTemplateFactory = require("./html-template");

function initialize(app) {
  app.use("/api/v1/codelist", require("./codelist/routes"));
}

function start(app) {
  const config = require("./config");
  const port = config.port;
  app.listen(port, function onStart(error) {
    if (error) {
      console.error(error);
    }
    console.info("Listening on port %s.", port);
  });
}

function respondWithEntryPoint(javaScriptFiles, cssFiles, options, response) {
  const html = htmlTemplateFactory.create(javaScriptFiles, cssFiles, options);
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(html);
}

module.exports = {
  "initialize" : initialize,
  "start": start,
  "respondWithEntryPoint": respondWithEntryPoint,
};
