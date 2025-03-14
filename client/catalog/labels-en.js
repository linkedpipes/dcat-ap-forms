/* eslint max-len: 0 */

export default {
  "nav_catalog": "Catalog",
  "step_catalog": "Catalog",
  "catalog_summary_error": "The catalog registration form is not yet filled in correctly.",
  "catalog_summary_download": "Download the catalog registration record and send it as an only attachment of a data message with \".txt\" extension and the subject \"NKOD\" to the databox ",
  "catalog_title_cs": "Title of the local open data catalog in Czech",
  "catalog_title_en": "Title of the local open data catalog in English (optional)",
  "hint_catalog_title": "Title of the local open data catalog to be registered. If it is the only one that the institution has, it can be \"Open data catalog of XXX\"",
  "help_catalog_title": "<h3>Title of the local open data catalog</h3><p>Typically, this is <code>Open data of XY</code>. In the case of one institution having multiple local open data catalogs, the titles should be different for each one.</p>",
  "catalog_title_missing": "Title of the local open data catalog is mandatory.",
  "catalog_contact_point_name": "Name of the administrator of the local open data catalog",
  "hint_catalog_contact_point_name": "This person will be contacted in case of problems with the catalog.",
  "help_catalog_contact_point_name": "<h3>Name of the administrator of the local open data catalog</h3><p>Name of the administrator of the local open data catalog who will be contacted in case of problems with the catalog. This can be issues with the API, accessibility of the interface, etc.</p>",
  "catalog_contact_point_name_missing": "Name of the administrator of the local open data catalog is mandatory.",
  "catalog_contact_point_email": "E-mail of the administrator of the local open data catalog",
  "hint_catalog_contact_point_email": "This is the e-mail address where problem reports will be sent.",
  "help_catalog_contact_point_email": "<h3>E-mail of the administrator of the local open data catalog</h3><p>E-mail of the administrator of the local open data catalog.</p>",
  "catalog_contact_point_email_missing": "E-mail of the administrator of the local open data catalog is mandatory.",
  "catalog_contact_point_email_invalid": "E-mail of the administrator of the local open data catalog is invalid.",
  "catalog_type": "API type of the local open data catalog",
  "help_catalog_type": "<h3>API type of the local open data catalog</h3><p>The API of the local open data catalog must comply with the <a href=\"https://data.gov.cz/otevřené-formální-normy/rozhraní-katalogů-otevřených-dat/\" target=\"_blank\">open formal norm for the interface of open data catalogs</a>. Currently, 2 types of LKOD APIs are supported, DCAT-AP Documents and the DCAT-AP SPARQL Endpoint.</p>",
  "catalog_url": "LKOD API URL",
  "hint_catalog_url": "HTTPS URL of the API endpoint. This is the URL of the dcat:Catalog instance for DCAT-AP Documents, and the URL of the DCAT-AP SPARQL Endpoint.",
  "help_catalog_url": "<h3>LKOD API URL</h3><p>For DCAT-AP Documents, this is URL of your catalog, i.e. instance of the <code>dcat:Catalog</code> class, e.g. <code>https://data.gov.cz/lkod/mdcr/katalog</code>. For DCAT-AP SPARQL Endpoint, it is the URL of the endpoint, e.g. <code>https://data.cssz.cz/sparql</code>.</p>",
  "catalog_url_missing": "HTTPS URL of the LKOD API is mandatory",
  "catalog_url_invalid": "Invalid HTTPS LKOD API URL",
  "homepage": "Homepage of the catalog",
  "hint_homepage": "URL of the homepage of your local open data catalog.",
  "help_homepage": "<h3>Homepage of the catalog</h3><p>Enter the URL of the homepage of your local open data catalog, if one exists. Your local open data catalog may contain more information and provide a richer context for your data than is available in the National open data catalog. For this reason, you may want your data consumers to be able to navigate to your data catalog.</p>",
  "homepage_invalid": "Homepage of the catalog has to be a valid HTTPS URL.",
  "catalog_delete_page_title": "Removal of local open data catalog from NODC",
  "catalog_edit_page_title": "Edit of an NODC catalog",
  "missing-catalog": "Link to a catalog is missing.",
  "catalog_delete_summary_download": "If you are certain that you want to remove the local open data catalog registration, send the downloaded file as an attachment of a data message with \".txt\" extension and the subject \"NKOD\" to the databox ",
  "step_download": "Summary",
  "button_download": "Download",
  "summary_download": "Download the registration file and send it as an only attachment of a data message with the subject \"NKOD\" to the databox ",
  "nav_download": "Summary",
  "summary_error": "The form is not yet filled in correctly.",
  "cant_import_catalog": "Unable to import catalog data.",
  "catalog_homepage": "Catalog homepage",
  "catalog_type_missing": "API type of the local open data catalog is mandatory.",
  "common_errors_description": "Avoid the mistakes made by many publishers before you. Before you register your catalog, make sure that you don't do some of the ",
  "common_errors_link_label": "most common errors in open data",
  "ofn": "Also make sure that the catalog interface complies with the ",
  "ofn_link_label": "open formal norm for the interface of open data catalogs",
};
