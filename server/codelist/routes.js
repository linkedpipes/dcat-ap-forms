const express = require("express");
const request = require("request");
const configuration = require('../config');

(function initialize() {
    const router = express.Router();
    router.get("/media-types", createCodelistGet(
        configuration.solr_media_types));
    router.get("/file-type", createCodelistGet(
        configuration.solr_file_type));
    router.get("/themes", createCodelistGet(
        configuration.solr_themes));
    router.get("/ruian", createRuianCodelistGet());
    router.get("/dataset-themes", createCodelistGet(
        configuration.solr_dataset_themes));
    module.exports = router;
})();

function createCodelistGet(baseUrl) {
    return (req, res) => {
        const url = baseUrl + "/query?q=" + getSolrQuery(req);
        console.log("URL", url);
        request.get({"url": url}).on("error", (error) => {
            handleError(res, error);
        }).pipe(res);
    }
}

function getSolrQuery(req) {
    return "title:" + encodeURIComponent(req.query.search);
}

function handleError(res, error) {
    console.error("Solr query failed.", error);
    res.status(500).json({
        "error": "service_request_failed"
    });
}

function createRuianCodelistGet() {
    return (req, res) => {
        let url = configuration.solr_ruian + "/query?q=" + getSolrQuery(req);
        if (req.query.type !== undefined) {
            url += "&fq=type:\"" + encodeURIComponent(req.query.type) + "\"";
        }
        console.log("URL", url);
        request.get({"url": url}).on("error", (error) => {
            handleError(res, error);
        }).pipe(res);
    }
}
