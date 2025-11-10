# LinkedPipes DCAT-AP Forms
[DCAT-AP v3.0](https://semiceu.github.io/DCAT-AP/releases/3.0.0/) and [DCAT-AP HVD](https://semiceu.github.io/DCAT-AP/releases/3.0.0-hvd/) compatible web form producing JSON-LD, intended for the [Czech National Open Data](https://data.gov.cz) catalog.

## Requirements
 * [Node.js](https://nodejs.org) (tested on 22.9) and npm
 * [Apache Solr](http://lucene.apache.org/solr/) (tested on 8.11.1)

## Installation

### Solr
[Install Solr](https://lucene.apache.org/solr/guide/8_7/installing-solr.html).
It is expected that Solr runs on localhost, port 8983.
Create Solr cores as configured in the configuration.

### DCAT-AP Forms

* Install dependencies
```shell
npm install
```

* Custom configuration, can be provided using Javascript configuration file.
  Copy and edit the sample:
```shell
cp configuration.js my-configuration.js
```

* The path to the custom file can be set using program argument ie.
```shell
npm run build -- --env configFileLocation=./my-configuration.js
npm run start -- --env configFileLocation=./my-configuration.js
```
where the argument is relative path from the project root, or absolute path.
It's necessary to provide absolute path or start the path with ```./```.
Another way is to set environment property ```dcatApFormsConfig```.

The following custom configuration file set the port to ```1111```:
```javascript
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

### Prefill forms using POST
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

Let us demonstrate using example and dataset delete.
We can post the data to `./odstranění-datové-sady` or `./dataset-withdrawn` for Czech or English version respectively using following command:
```shell
curl -d data="{\"@type\":\"http://www.w3.org/ns/dcat#Dataset\", \"@id\":\"http://dataset-to-be-removed\",\"http://purl.org/dc/terms/title\":{\"@value\":\"Dataset name\",\"@lang\":\"cs\"},\"http://purl.org/dc/terms/description\":{\"@value\":\"Dataset description\",\"@lang\":\"cs\"}}" http://localhost:8057/odstranění-datové-sady
```
In the HTML response we can see `window.serverPostData` set to the posted content.
The client will load this data in a same way as when importing from URL.

While the simple example above is sufficient for dataset delete, as only basic information is utilized, you may need to provide more information when using dataset edit available at `./registrace-datové-sady` or `./dataset-registration`.

### Using returnUrl to POST data to an URL of choice
If you provide `returnUrl` query argument with an URL, the last step of the form will POST the data to given URL instead of download.
The request is using `application/x-www-form-urlencoded` content type with the `formData` data field.

We can even create a nice loop, using following URL `./registrace-datové-sady?returnUrl=./odstranění-datové-sady`.
In this case user is navigated to an empty registration form.
Once the form is filled, user can submit the form using POST to the dataset delete form.
