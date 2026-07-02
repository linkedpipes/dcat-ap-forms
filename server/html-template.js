const configuration = require("./server-configuration");

/**
 * @param {string[]} javaScriptFiles JavaScript files to link.
 * @param {string[]} cssFiles CSS files to link.
 * @param {{lang: "cs" | "en", title: string, data: *}} options
 * @returns {string} HTML site.
 */
function createHtml(javaScriptFiles, cssFiles, options) {
  return `
<!DOCTYPE html>
<html${options.lang ? " lang=\"" + options.lang + "\"" : ""}>
<head>
  <title>${options.title}</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="theme-color" content="#057fa5">
  <meta name="msapplication-TileColor" content="#057fa5">
  <meta name="msapplication-config" content="./assets/icons/browserconfig.xml">
  <link rel="apple-touch-icon" sizes="180x180" href="./assets/icons/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="./assets/icons/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="./assets/icons/favicon-16x16.png">
  <link rel="manifest" href="./assets/manifest.json">
  <link rel="mask-icon" href="./assets/icons/safari-pinned-tab.svg" color="#5bbad5">
  <link rel="shortcut" icon="" href="./assets/icons/favicon.ico">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" rel="stylesheet">
  ${generateStylesheetLinks(cssFiles)}
</head>
<body>
  <div id="app"></div>
  ${generateDataPlaceholder(options.data)}
  <script type="text/javascript">
    window.configuration = ${JSON.stringify({
    "apiUrl": configuration.client_api_base_url,
    "dereferenceTemplate": configuration.dereference_proxy,
    "databox": configuration.databox,
  })};
  </script>
  ${generateScriptTags(javaScriptFiles)}
</body>
</html>
`;
}

/**
 * @param {string[]} links
 * @returns {string}
 */
function generateStylesheetLinks(links) {
  return links.map((url) =>
    `<link href="${resolveUrl(url)}" rel="stylesheet"/>`
  ).join("\n  ");
}

/**
 * Prefix given URL with base URL.
 * @param {string} url
 * @returns {string}
 */
function resolveUrl(url) {
  return configuration.base_url + url;
}

/**
 * Generate script tag to store given data in window.serverPostData.
 * @param {string | null | undefined} data
 * @returns {string}
 */
function generateDataPlaceholder(data) {
  if (!data) {
    return "";
  }
  return `<script type="text/javascript">
    window.serverPostData = ${JSON.stringify(data)} ;
  </script>`;
}

/**
 * @param {string[]} links
 * @returns {string}
 */
function generateScriptTags(links) {
  return links.map((url) =>
    `<script type="text/javascript" src="${resolveUrl(url)}"></script>`
  ).join("\n  ");
}

module.exports = {
  "create": createHtml,
};
