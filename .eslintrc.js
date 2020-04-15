module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 9,
    "sourceType": "module",
  },
  "rules": {
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "max-len": ["error", {
      "code": 80,
      "ignoreUrls": true,
      "ignoreRegExpLiterals": true,
    }],
    "curly": [2, "all"],
    "brace-style": ["error", "1tbs"]
  }
};