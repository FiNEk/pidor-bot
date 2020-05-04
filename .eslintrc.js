module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended", // Must be last!
  ],
  rules: {
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
