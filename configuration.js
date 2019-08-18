const defaultConfiguration = {
  "port": 8057,
  "nkod_databox": "abc123",
  "solr_media_types": "http://localhost:8983/solr/iana-media-types",
  "solr_file_type": "http://localhost:8983/solr/mdr-file-type",
  "solr_ruian": "http://localhost:8983/solr/ruian",
  "solr_themes": "http://localhost:8983/solr/eurovoc",
  "dereference_proxy": "https://data.gov.cz/sparql-graph-crud?graph={}",
  "head": [
    {
      "$type": "meta",
      "charset": "UTF-8"
    }, {
      "$type": "meta",
      "name": "viewport",
      "content": "width=device-width,initial-scale=1.0"
    }, {
      "$type": "meta",
      "name": "theme-color",
      "content": "#057fa5"
    }, {
      "$type": "meta",
      "name": "msapplication-TileColor",
      "content": "#057fa5"
    }, {
      "$type": "meta",
      "name": "msapplication-config",
      "content": "./assets/icons/browserconfig.xml"
    }, {
      "$type": "link",
      "rel": "apple-touch-icon",
      "sizes": "180x180",
      "href": "./assets/icons/apple-touch-icon.png"
    }, {
      "$type": "link",
      "rel": "icon",
      "type": "image/png",
      "sizes": "32x32",
      "href": "./assets/icons/favicon-32x32.png"
    }, {
      "$type": "link",
      "rel": "icon",
      "type": "image/png",
      "sizes": "16x16",
      "href": "./assets/icons/favicon-16x16.png"
    }, {
      "$type": "link",
      "rel": "manifest",
      "href": "./assets/manifest.json"
    }, {
      "$type": "link",
      "rel": "mask-icon",
      "href": "./assets/icons/safari-pinned-tab.svg",
      "color": "#5bbad5"
    }, {
      "$type": "link",
      "rel": "shortcut icon",
      "href": "./assets/icons/favicon.ico"
    }, {
      "$type": "link",
      "href": "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
      "rel": "stylesheet"
    }
  ]
};

(function initialize() {

  const configurationPath = readProperty(
    "env.configFileLocation", "dcatApFormsConfig");
  let userConfiguration = {};
  if (configurationPath) {
    console.log("Loading configuration from: ", configurationPath);
    userConfiguration = require(configurationPath);
  }

  module.exports = {
    ...defaultConfiguration,
    ...userConfiguration,
  };
})();

function readProperty(argName, envName) {
  const argument = readProgramArgument("-" + argName);
  if (argument !== undefined) {
    return argument;
  } else if (process.env[envName] !== undefined) {
    return process.env[envName];
  } else {
    return undefined;
  }
}

function readProgramArgument(name) {
  let output = undefined;
  process.argv.forEach((value) => {
    const line = value.split("=");
    if (line.length !== 2) {
      return;
    }
    if (line[0] === name) {
      output = line[1];
    }
  });
  return output;
}
