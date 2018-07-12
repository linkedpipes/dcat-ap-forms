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

module.exports = {
    "initialize" : initialize,
    "start": start
};