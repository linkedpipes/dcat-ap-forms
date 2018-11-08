const solrBaseUrl = "http://localhost:8983/solr/";

module.exports = {
    "port": 8057,
    "nkod_databox": "uur3q2i",
    "solr_media_types": solrBaseUrl + "iana-media-types",
    "solr_file_type": solrBaseUrl + "mdr-file-type",
    "solr_ruian": solrBaseUrl + "ruian",
    "solr_themes": solrBaseUrl + "eurovoc",
    "dereference_proxy": "https://dev.nkod.opendata.cz/sparql-graph-crud?graph={}",
    "title": {
        "cs": "Registrační formulář pro NKOD"
    },
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
    ],
};
