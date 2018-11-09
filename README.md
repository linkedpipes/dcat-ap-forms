# LinkedPipes DCAT-AP Forms
DCAT-AP v1.1 compatible web form producing JSON-LD, intended for the [Czech National Open Data](https://data.gov.cz) catalog.

## Installation

### Solr
Create cores:
```
solr.cmd create -c iana-media-types
solr.cmd create -c mdr-file-type
solr.cmd create -c ruian
solr.cmd create -c eurovoc
solr.cmd create -c dataset-themes
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

```

### DCAT-AP Forms

Custom configuration, can be provided using Javascript configuration file. 
The path to the custom file can be set using program argument ie.
```
npm start -- -configFileLocation=./my-configuration.js
```
where the argument is relative path from the project root, or absolute path. 
It's necessary to provide absolute path or start the path with ```./```.
Another way is to set environment property ```dcatApFormsConfig```. 

The following custom configuration file set the port to 1111:
```
module.exports = {
    "port": 1111
};
```
For more information about the configuration properties please refer to 
```./configuration.js``` file and the property ```defaultConfiguration```.

