const express = require("express");
const request = require("request");
const configuration = require("../config");

(function initialize() {
  const router = express.Router();
  router.get("/media-types", createCodelistGet(
    configuration.solr_media_types, true));
  router.get("/file-type", createCodelistGet(
    configuration.solr_file_type, true));
  router.get("/themes", createCodelistGet(
    configuration.solr_themes));
  router.get("/continents", createCodelistGet(
    configuration.solr_continents));
  router.get("/countries", createCodelistGet(
    configuration.solr_countries));
  router.get("/places", createCodelistGet(
    configuration.solr_places));
  router.get("/ruian", createRuianCodelistGet());
  router.get("/hvd-categories", createHvdCategoriesCodelistGet());
  module.exports = router;
})();

function createCodelistGet(baseUrl, sorted) {
  let querySuffix = "";
  if (sorted) {
    querySuffix += "&sort=priority desc";
  }
  return (req, res) => {
    const url = baseUrl + "/query?q=" + getSolrQuery(req) + querySuffix;
    request.get({"url": url}).on("error", (error) => {
      handleError(res, error);
    }).pipe(res);
  };
}

function getSolrQuery(req) {
  if (req.query.search) {
    return req.query.lang + ":(" + encodeURIComponent(req.query.search) + ")";
  } else if (req.query.iri) {
    return "code:" + encodeURIComponent(req.query.iri);
  }
}

function handleError(res, error) {
  console.error("Solr query failed.", error);
  res.status(500).json({
    "error": "service_request_failed",
  });
}

function createRuianCodelistGet() {
  return (req, res) => {
    let url = configuration.solr_ruian + "/query?q=" + getSolrQuery(req);
    if (req.query.type !== undefined) {
      url += "&fq=type:\"" + encodeURIComponent(req.query.type) + "\"";
    }
    request.get({"url": url}).on("error", (error) => {
      handleError(res, error);
    }).pipe(res);
  };
}

function createHvdCategoriesCodelistGet() {
  return (req, res) => {
    let url = configuration.solr_hvd_categories + "/query?q=" + getSolrQuery(req);
    if (req.query.type !== undefined) {
      url += "&fq=type:\"" + encodeURIComponent(req.query.type) + "\"";
    }
    request.get({"url": url}).on("error", (error) => {
      handleError(res, error);
    }).pipe(res);
  };
}