# LinkedPipes DCAT-AP Forms
[DCAT-AP v2.0.1](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/dcat-application-profile-data-portals-europe/release/201-0) compatible web form producing JSON-LD, primarily intended for the [Czech National Open Data](https://data.gov.cz) catalog.

## Requirements
 * [Node.js] (tested on 20.5.1) and npm
 * [Apache Solr] (tested on 8.11.1)

## Installation

### Solr
[Install Solr](https://lucene.apache.org/solr/guide/8_7/installing-solr.html).
It is expected that Solr runs on localhost, port 8983.

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
solr.cmd create -c dataset-themes
```

Set core properties:
```bash
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

curl http://localhost:8983/solr/dataset-themes/config -H 'Content-type:application/json' -d '{
    "set-user-property": {"update.autoCreateFields":"false"},
    "set-property" : {"requestDispatcher.requestParsers.enableRemoteStreaming":true},
    "set-property" : {"requestDispatcher.requestParsers.enableStreamBody":true}
}'

```


Create schema:
```bash
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

curl http://localhost:8983/solr/dataset-themes/schema -X POST -H 'Content-type:application/json' --data-binary '{
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
npm run build -- --env configFileLocation=./my-configuration.js
npm run start -- --env configFileLocation=./my-configuration.js
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

## Integration
DCAT-AP Forms can be integrated with external systems by
- using POST request to prefill the forms.
- using `returnUrl` URL query argument to POST content of the form as a submit action.

## Prefill forms using POST
This functionality is supported for dataset delete and dataset edit.
For both endpoints we can POST JSON-LD dataset using `formData` field with `application/x-www-form-urlencoded` content type.

An example of the post data may look like this:
```json
{
  "@type":"http://www.w3.org/ns/dcat#Dataset",
  "@id":"http://dataset-to-be-removed",
  "http://purl.org/dc/terms/title": {"@value": "Dataset name", "@lang": "cs"},
  "http://purl.org/dc/terms/description": {"@value": "Dataset description", "@lang": "cs"}
}
```
In fact, we can fill in the dataset edit form manually.
Download the content as a file and post it to the form, to prefill the form.

Let us demonstrate using exampel and dataset delete.
We can post the data to `./odstranění-datové-sady` or `./dataset-withdrawn` for Czech or English version respectively using following command:
```bash
curl -d data="{\"@type\":\"http://www.w3.org/ns/dcat#Dataset\", \"@id\":\"http://dataset-to-be-removed\",\"http://purl.org/dc/terms/title\":{\"@value\":\"Dataset name\",\"@lang\":\"cs\"},\"http://purl.org/dc/terms/description\":{\"@value\":\"Dataset description\",\"@lang\":\"cs\"}}" http://localhost:8057/odstranění-datové-sady
```
In the HTML response we can see `window.serverPostData` set to the posted content.
The client will load this data in a same way as when importing from URL.

While the simple example above is suficient for dataset delete, as only basic information is utilized, you may need to provide more information when using dataset edit available at `./registrace-datové-sady` or `./dataset-registration`.

## Using returnUrl to POST data to URL of choice
If you provide `returnUrl` query argument with an URL, the last step of the form will POST the data to given URL instead of download.
The request is using `application/x-www-form-urlencoded` content type with the `formData` data field.

We can even create a nice loop, using following URL `./registrace-datové-sady?returnUrl=./odstranění-datové-sady`.
In this case user is navigated to an empty registration form.
Once the form is filled, user can submit the form using POST to the dataset delete form.

[Node.js]: <https://nodejs.org>
[Apache Solr]: <http://lucene.apache.org/solr/>
