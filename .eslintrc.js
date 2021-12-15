module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['prettier'],
  parserOptions: {
    ecmaVersion: 2020,
  },
	plugins: ['prettier'],
  rules: {
    'no-shadow': 'off',
    "no-alert": "off",
    'import/no-cycle': 'off',
    'no-use-before-define': 'off',
    'camelcase': 'off',
    'no-unused-expressions': 'off',
    'import/no-self-import': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    "import/prefer-default-export": "off",
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': true,
        'useTabs': false,
        'tabWidth': 2,
        'trailingComma': 'all',
        'bracketSpacing': true,
        'printWidth': 120,
        'arrowParens': 'always'
      }
    ],
    'import/no-extraneous-dependencies': [
      'off',
      {
        'devDependencies': ['**/*.test.ts'],
      }
    ]
  },
};
