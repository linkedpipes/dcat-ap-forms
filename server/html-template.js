const config = require("./config");

function create(javascript, css, options) {
  return `
<!DOCTYPE html>
<html${options.lang ? " lang=\"" + options.lang + "\"" : ""}>
<head>
  <title>${options.title}</title>
  ${generateHead(css)}
</head>
<body>
  ${generateDataPlaceholder(options)}
  <div id="app"></div>
  ${generateBody(javascript)}
</body>
</html>
`;
}

function generateHead(css) {
  const head = config.html_head.map((item) =>
    "<" + item["$type"] + " " +
    Object.keys(item)
      .filter((key) => !key.startsWith("$"))
      .map((key) => key + "=" + item[key]).join(" ")
    + " />"
  ).join("\n  ");
  const styleFiles = css.map((file) =>
    `<link href="${fileUrl(file)}" rel="stylesheet"/>`
  ).join("\n  ");
  return head + "\n  " + styleFiles;
}

function fileUrl(file) {
  return config.resources_url_prefix + file;
}

function generateDataPlaceholder(options) {
  if (!options["data"]) {
    return "";
  }
  return `<script type="text/javascript">
    window.serverPostData = ${JSON.stringify(options["data"])} ;
  </script>`;
}

function generateBody(javascript) {
  return javascript.map((file) =>
    `<script type="text/javascript" src="${fileUrl(file)}"></script>`
  ).join("\n  ");
}

module.exports = {
  "create": create,
};
