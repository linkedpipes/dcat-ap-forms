const express = require("express");
const request = require("request");
const configuration = require("./server-configuration");

/**
 * Default rows limit for eager fetched codelists by Solr.
 */
const rowsLimit = 1048576;

/**
 * Export all codelist routes from this module.
 */
(function initialize() {
  const router = express.Router();
  router.get("/dataset-theme",
    createEagerCodelistGet(configuration.solr_dataset_theme));
  router.get("/media-types",
    createSortedCodelistGet(configuration.solr_media_types));
  router.get("/file-type",
    createSortedCodelistGet(configuration.solr_file_type));
  router.get("/frequency",
    createSortedEagerCodelistGet(configuration.solr_frequency));
  router.get("/themes",
    createCodelistGet(configuration.solr_themes));
  router.get("/continents",
    createCodelistGet(configuration.solr_continents));
  router.get("/countries",
    createCodelistGet(configuration.solr_countries));
  router.get("/places",
    createCodelistGet(configuration.solr_places));
  router.get("/ruian",
    createRuianCodelistGet());
  router.get("/hvd-categories",
    createHvdCategoriesCodelistGet());
  router.get("/isvs",
    createCodelistGet(configuration.solr_isvs));
  router.get("/related-terms",
    createRelatedTermsCodelistGet());
  module.exports = router;
})();

/**
 * @param {string} baseUrl
 * @returns The first 10 items matching the user query.
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
  request.get({ "url": url }).on("error", (error) => {
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
 * @returns The first 10 items matching the user query sorted by priority.
 */
function createSortedCodelistGet(baseUrl) {
  return (req, res) => {
    const url = baseUrl + "/query?q=" + getSolrQuery(req) + "&sort=priority+desc";
    proxySolrRequest(res, url);
  };
}

/**
 * @returns All items.
 */
function createEagerCodelistGet(baseUrl) {
  return (req, res) => {
    const url = baseUrl + "/query?q=" + getSolrQuery(req) + "&rows=" + rowsLimit;
    proxySolrRequest(res, url);
  };
}

/**
 * @returns All items sorted by priority field.
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
    request.get({ "url": url }).on("error", (error) => {
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
    request.get({ "url": url }).on("error", (error) => {
      handleError(res, error);
    }).pipe(res);
  };
}

function createRelatedTermsCodelistGet() {
  return (req, res) => {
    // Strip all wildcards — we append our own trailing wildcard below.
    const search = (req.query.search ?? "").replace(/\*/g, "");

    // bif:contains phrase escaping — two levels:
    //   SPARQL literal level ('...'): escape \ first, then escape ' as \'
    //   bif:contains phrase level ("..."): remove " (no in-phrase escape exists)
    // https://docs.openlinksw.com/virtuoso/textexprsyntax/
    // https://docs.openlinksw.com/virtuoso/sparqlextensions/
    // https://docs.openlinksw.com/virtuoso/bifcontainsoptions/
    const escapedSearch = search
      .replace(/\\/g, "\\\\")
      .replace(/'/g, "\\'")
      .replace(/"/g, "");

    if (escapedSearch.length < 4) {
      // Virtuoso does not support this.
      res.json({
        "response": {
          "docs": [],
        },
      });
      return;
    }

    // We search only using label as the Vuetify filter values
    // on client side and does not work well when the string is not in the
    // result label.
    const query = `
    PREFIX bif: <bif:>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>

    SELECT ?s ?label WHERE {
      ?s skos:prefLabel ?label .
      ?label bif:contains '"${escapedSearch}*"' .
    }
    `;

    const url = configuration.sparql_related_terms
      + "?default-graph-uri="
      + "&query=" + encodeURIComponent(query)
      + "&format=application%2Fsparql-results%2Bjson&timeout=0&signal_void=on";

    request.get(url, (error, _response, body) => {
      if (error) {
        handleError(res, error);
        return;
      }

      let content = [];

      try {
        content = JSON.parse(body);
      } catch {
        // Virtuoso could have returned something which is not a JSON,
        // like an error message.
        res.json({ "response": { "docs": [] } });
        console.error("Unexpected response.", { search });
        return;
      }

      // Transform into solr-like response.
      const docs = content.results.bindings.map(item => ({
        "code": item.s.value,
        "cs": item.label.value,
        "en": item.label.value,
      }));

      res.json({ "response": { docs } });
    });
  };
}