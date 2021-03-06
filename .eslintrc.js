module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'import/extensions': 0,
    'no-unused-expressions': 0,
    'import/no-unresolved': 0,
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
  },
};
