const { rules } = require("eslint-config-prettier");

module.exports = {
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-turbo',
    'expo',
  ],
  ignorePatterns: ['/dist/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  root: true,
  rules: {
    "react/jsx-sort-props": [
      "warn",
      {
        "ignoreCase": true,
      }
    ]
  },
};
