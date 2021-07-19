module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
  },
};
