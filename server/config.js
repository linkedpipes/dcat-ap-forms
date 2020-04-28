const configuration = require("../configuration");

module.exports = {
  "port": configuration["port"],
  "solr_media_types": configuration["solr_media_types"],
  "solr_file_type": configuration["solr_file_type"],
  "solr_ruian": configuration["solr_ruian"],
  "solr_themes": configuration["solr_themes"],
  "solr_continents": configuration["solr_continents"],
  "solr_countries": configuration["solr_countries"],
  "solr_places": configuration["solr_places"],
  "html_head": configuration["head"],
};
