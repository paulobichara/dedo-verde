module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint-config-turbo',
    'eslint-config-next',
  ],
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
