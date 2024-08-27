import {
  getMultiLangString,
  selectString,
  unpackLangStringToProp,
} from "./properties";

test("Load empty string array.", () => {
  const data = {
    "http://prop": [],
  };
  const actual = getMultiLangString(data, "http://prop");
  const expected = {};
  expect(actual).toEqual(expected);
});

test("Load single simple string.", () => {
  const data = {
    "http://prop": "string",
  };
  const actual = getMultiLangString(data, "http://prop");
  const expected = {"": ["string"]};
  expect(actual).toEqual(expected);
});

test("Load single string.", () => {
  const data = {
    "http://prop": {
      "@language": "cs",
      "@value": "text-cs",
    },
  };
  const actual = getMultiLangString(data, "http://prop");
  const expected = {"cs": ["text-cs"]};
  expect(actual).toEqual(expected);
  expect(selectString(actual, "cs")).toEqual("text-cs");
});

test("Load single string in array.", () => {
  const data = {
    "http://prop": [{
      "@language": "cs",
      "@value": "text-cs",
    }],
  };
  const actual = getMultiLangString(data, "http://prop");
  const expected = {"cs": ["text-cs"]};
  expect(actual).toEqual(expected);
});

test("Load single multi-language string.", () => {
  const data = {
    "http://prop": [{
      "@language": "cs",
      "@value": "text-00",
    }, {
      "@language": "cs",
      "@value": "text-01",
    }, {
      "@language": "en",
      "@value": "text-02",
    }],
  };
  const actual = getMultiLangString(data, "http://prop");
  const expected = {
    "cs": ["text-00", "text-01"],
    "en": ["text-02"],
  };
  expect(actual).toEqual(expected);
  expect(selectString(actual, "cs")).toEqual("text-00");
  expect(selectString(actual, "en")).toEqual("text-02");
});

test("Unpack language string with empty language tag.", () => {
  const data = {"": ["Oprava kuchyně v MŠ-III.etapa"]};
  const actual = unpackLangStringToProp(
    "description", "cs", data);
  const expected = {
    "description_cs": "Oprava kuchyně v MŠ-III.etapa",
    "description_en": "",
  };
  expect(actual).toEqual(expected);
});

test("Load empty language string.", () => {
  const data = {
    "title": [
      {
        "@language": "en",
        "@value": "",
      },
      {
        "@language": "cs",
        "@value": "Základní topografická mapa",
      },
    ],
  };
  const actual = getMultiLangString(data, "title");
  const expected = {
    "cs": ["Základní topografická mapa"],
    "en": [""],
  };
  expect(actual).toEqual(expected);
});