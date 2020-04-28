# LinkedPipes DCAT-AP Forms
[DCAT-AP v2.0](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe/release/200) compatible web form producing JSON-LD, primarily intended for the [Czech National Open Data](https://data.gov.cz) catalog.

## Requirements
 * [Node.js] and npm
 * [Apache Solr] 7

## Installation

### Solr
[Install Solr](https://lucene.apache.org/solr/guide/7_3/installing-solr.html). It is expected that Solr runs on localhost, port 8983.

Create cores:
```
solr.cmd create -c iana-media-types
solr.cmd create -c mdr-file-type
solr.cmd create -c ruian
solr.cmd create -c eurovoc
solr.cmd create -c places
solr.cmd create -c countries
solr.cmd create -c continents
solr.cmd create -c frequencies
```

Set core properties:
```
curl http://localhost:8983/solr/iana-media-types/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

curl http://localhost:8983/solr/mdr-file-type/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

curl http://localhost:8983/solr/ruian/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

curl http://localhost:8983/solr/eurovoc/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

curl http://localhost:8983/solr/places/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

curl http://localhost:8983/solr/countries/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

curl http://localhost:8983/solr/continents/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

curl http://localhost:8983/solr/frequencies/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'


```


Create schema:
```
curl http://localhost:8983/solr/iana-media-types/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [{"class":"solr.LowerCaseFilterFactory"}]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "cs", "type": "text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "text" , "indexed": true, "docValues": false},
    "add-field": {"name": "priority", "type": "pint" , "indexed": true, "docValues": true}    
}'

curl http://localhost:8983/solr/mdr-file-type/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [{"class":"solr.LowerCaseFilterFactory"}]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "cs", "type": "text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "text" , "indexed": true, "docValues": false},
    "add-field": {"name": "priority", "type": "pint" , "indexed": true, "docValues": true}    
}'

curl http://localhost:8983/solr/ruian/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "ascii_text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [
            {"class":"solr.LowerCaseFilterFactory"},
            {"class":"solr.ASCIIFoldingFilterFactory"}
        ]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "notation", "type": "string" , "indexed": false, "docValues": false},    
    "add-field": {"name": "type", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "cs", "type": "ascii_text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "ascii_text" , "indexed": true, "docValues": false},
}'

curl http://localhost:8983/solr/eurovoc/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "ascii_text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [
            {"class":"solr.LowerCaseFilterFactory"},
            {"class":"solr.ASCIIFoldingFilterFactory"}
        ]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "notation", "type": "string" , "indexed": false, "docValues": false},    
    "add-field": {"name": "cs", "type": "ascii_text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "ascii_text" , "indexed": true, "docValues": false},
}'

curl http://localhost:8983/solr/places/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "ascii_text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [
            {"class":"solr.LowerCaseFilterFactory"},
            {"class":"solr.ASCIIFoldingFilterFactory"}
        ]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "type", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "cs", "type": "ascii_text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "ascii_text" , "indexed": true, "docValues": false},
}'

curl http://localhost:8983/solr/countries/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "ascii_text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [
            {"class":"solr.LowerCaseFilterFactory"},
            {"class":"solr.ASCIIFoldingFilterFactory"}
        ]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "type", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "cs", "type": "ascii_text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "ascii_text" , "indexed": true, "docValues": false},
}'

curl http://localhost:8983/solr/continents/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "ascii_text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [
            {"class":"solr.LowerCaseFilterFactory"},
            {"class":"solr.ASCIIFoldingFilterFactory"}
        ]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "type", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "cs", "type": "ascii_text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "ascii_text" , "indexed": true, "docValues": false},
}'

curl http://localhost:8983/solr/frequencies/schema -X POST -H 'Content-type:application/json' --data-binary '{
    "add-field-type": {"name": "ascii_text", "class": "solr.TextField", "positionIncrementGap": "100", "analyzer": {
        "tokenizer": {"class":"solr.WhitespaceTokenizerFactory"},
        "filters": [
            {"class":"solr.LowerCaseFilterFactory"},
            {"class":"solr.ASCIIFoldingFilterFactory"}
        ]
    }},
    "add-field": {"name": "code", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "type", "type": "string" , "indexed": true, "docValues": false},
    "add-field": {"name": "cs", "type": "ascii_text" , "indexed": true, "docValues": false},
    "add-field": {"name": "en", "type": "ascii_text" , "indexed": true, "docValues": false},
}'

```

### DCAT-AP Forms

* Install dependencies
```
npm install
```

* Custom configuration, can be provided using Javascript configuration file. Copy and edit the sample:
```
cp configuration.js my-configuration.js
```

* The path to the custom file can be set using program argument ie.
```
npm run build -- -env.configFileLocation=./my-configuration.js
npm run start -- -env.configFileLocation=./my-configuration.js
```
where the argument is relative path from the project root, or absolute path. 
It's necessary to provide absolute path or start the path with ```./```.
Another way is to set environment property ```dcatApFormsConfig```. 

The following custom configuration file set the port to ```1111```:
```
module.exports = {
    "port": 1111,
    "nkod_databox": "
};
```
For more information about the configuration properties please refer to 
```./configuration.js``` file and a variable ```defaultConfiguration```.

[Node.js]: <https://nodejs.org>
[Apache Solr]: <http://lucene.apache.org/solr/>
