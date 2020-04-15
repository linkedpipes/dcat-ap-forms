module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "env": {
    "es6": true
  },
  "plugins": [
    "vuetify"
  ],
  "rules": {
    "quotes": ["error", "double"],
    "object-shorthand": ["error", "never"],
    "quote-props": ["error", "always"],
    "no-use-before-define": ["error", "nofunc"],
    "prefer-destructuring": 0,
    "no-var": 1
  },
  "globals": {
    "NKOD_ISDS": false,
    "DEREFERENCE_PROXY": false
  },
  "overrides": [
    {
      "files": [
        "**/*.test.js"
      ],
      "env": {
        "jest": true
      },
      "extends": [
        "plugin:jest/recommended"
      ],
      "plugins": ["jest"],
    }
  ],
};
