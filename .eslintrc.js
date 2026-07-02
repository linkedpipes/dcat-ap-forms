module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
  },
  "rules": {
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "max-len": ["warn", {
      "code": 120,
      "ignoreUrls": true,
      "ignoreRegExpLiterals": true,
    }],
    "curly": [2, "all"],
    "brace-style": ["error", "1tbs"],
    "semi": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
    }],
    "quote-props": ["warn", "always"],
  },
  "ignorePatterns": ["./dist/**"],
};