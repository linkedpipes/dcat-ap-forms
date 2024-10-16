const express = require("express");
const request = require("request");
const configuration = require("../config");

// Default rows limit for eager fetched codelists.
let rowsLimit = 1048576;

(function initialize() {
  const router = express.Router();
  router.get("/dataset-theme", createEagerCodelistGet(
    configuration.solr_dataset_theme));
  router.get("/media-types", createSortedCodelistGet(
    configuration.solr_media_types));
  router.get("/file-type", createSortedCodelistGet(
    configuration.solr_file_type));
  router.get("/frequency", createSortedEagerCodelistGet(
    configuration.solr_frequency));
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

/**
 * Returns 10 items matching the user query.
 */
function createCodelistGet(baseUrl) {
  return (req, res) => {
    const url = baseUrl + "/query?q=" + getSolrQuery(req);
    proxySolrRequest(res, url);
  };
}

function getSolrQuery(req) {
  if (req.query.search !== undefined) {
    return req.query.lang + ":(" + encodeURIComponent(req.query.search) + ")";
  } else if (req.query.iri !== undefined) {
    return "code:" + encodeURIComponent(req.query.iri);
  }
}

function proxySolrRequest(response, url) {
  request.get({"url": url}).on("error", (error) => {
    handleError(response, error);
  }).pipe(response);
}

function handleError(res, error) {
  console.error("Solr query failed.", error);
  res.status(500).json({
    "message": "Failed to query Solr.",
  });
}

/**
 * Returns 10 items matching the user query sorted by priority.
 */
function createSortedCodelistGet(baseUrl) {
  return (req, res) => {
    const url = baseUrl + "/query?q=" + getSolrQuery(req) + "&sort=priority+desc";
    proxySolrRequest(res, url);
  };
}

/**
 * Returns all items.
 */
function createEagerCodelistGet(baseUrl) {
  return (req, res) => {
    const url = baseUrl + "/query?q=" + getSolrQuery(req) + "&rows=" + rowsLimit;
    proxySolrRequest(res, url);
  };
}

/**
 * Returns all items sorted by priority field.
 */
function createSortedEagerCodelistGet(baseUrl) {
  return (req, res) => {
    const url = baseUrl + "/query?q=" + getSolrQuery(req) + "&sort=priority+desc&rows=" + rowsLimit;
    proxySolrRequest(res, url);
  };
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
