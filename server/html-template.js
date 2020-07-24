const config = require("./config");

function create(javascript, css, options) {
  return `
<!DOCTYPE html>
<html${options["lang"] ? " lang=\"" + options["lang"] + "\"" : ""}>
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
  return config.html_head.map((item) =>
    "<" + item["$type"] + " " +
        Object.keys(item)
          .filter((key) => !key.startsWith("$"))
          .map((key) => key + "=" + item[key]).join(" ")
        + " />"
  ).join("\n  ") + css.map((file) =>
    `<link href="${file}" rel="stylesheet"/>`
  ).join("\n  ");
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
    `<script type="text/javascript" src="${file}"></script>`
  ).join("\n  ");
}

module.exports = {
  "create": create,
};
