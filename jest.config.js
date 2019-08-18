module.exports = {
  "verbose": true,
  "testURL": "http://localhost/",
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/client/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ],
  "roots": [
    "client",
    "server"
  ],
  "globals": {
    "DEREFERENCE_PROXY": ""
  }
};