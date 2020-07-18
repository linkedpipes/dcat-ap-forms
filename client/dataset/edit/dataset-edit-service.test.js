/* eslint max-len: 0 */

import {EXPORT_NKOD, EXPORT_EDIT, EXPORT_LKOD} from "../dataset-model";
import {getDatasetEditDownloadFile} from "./dataset-edit-service";

test("Export NKOD file name.", () => {
  const dataset = {};
  const actual = getDatasetEditDownloadFile(dataset, EXPORT_NKOD);
  expect(actual).toEqual("nkod-registrace.jsonld.txt");
});

test("Export edit NKOD file name.", () => {
  const dataset = {
    "iri": "https://data.gov.cz/dataset"
  };
  const actual = getDatasetEditDownloadFile(dataset, EXPORT_EDIT);
  expect(actual).toEqual("nkod-registrace.jsonld.txt");
});

test("Export edit LKOD file name.", () => {
  const dataset = {
    "iri": "",
    "title_cs": "Můj dataset"
  };
  const actual = getDatasetEditDownloadFile(dataset, EXPORT_LKOD);
  expect(actual).toEqual("Můj dataset.jsonld");
});
