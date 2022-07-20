module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    allowImportExportEverywhere: true,
    ecmaVersion: 2020,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/interface-name-prefix': ['off'],
    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-namespace': ['off'],
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/no-untyped-public-signature': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/ban-types': ['off'],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
};
