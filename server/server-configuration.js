const configuration = require("../configuration");

module.exports = {
  "port": configuration["port"],
  "solr_media_types": configuration["solr_media_types"],
  "solr_dataset_theme": configuration["solr_dataset_theme"],
  "solr_file_type": configuration["solr_file_type"],
  "solr_frequency": configuration["solr_frequency"],
  "solr_ruian": configuration["solr_ruian"],
  "solr_themes": configuration["solr_themes"],
  "solr_continents": configuration["solr_continents"],
  "solr_countries": configuration["solr_countries"],
  "solr_places": configuration["solr_places"],
  "solr_hvd_categories": configuration["solr_hvd_categories"],
  "html_head": configuration["head"],
  //
  "base_url": configuration["base_url"],
  "client_api_base_url": configuration["client_api_base_url"],
  "server_api_base_url": configuration["server_api_base_url"],
  "dereference_proxy": configuration["dereference_proxy"],
};
