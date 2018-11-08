const config = require("./config");

function create(javascript, css, options) {
    const langTitle = options["lang"] || options["langTitle"];
    return `
<!DOCTYPE html>
<html${options["lang"] ? " lang=\"" + options["lang"] + "\"" : ""}>
<head>
  <title>${config.html_title[langTitle]}</title>
  ${generateHead(css)}
</head>
<body>
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

function generateBody(javascript) {
    return javascript.map((file) =>
        `<script type="text/javascript" src="${file}"></script>`
    ).join("\n  ");
}

module.exports = {
    "create": create
};