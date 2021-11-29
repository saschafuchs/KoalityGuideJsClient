module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-multiple-empty-lines': 'off',
    'no-trailing-spaces': 'warn',
    'comma-dangle': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-case-declarations': 'off',
    camelcase: 'off',
    curly: 0,
    'dot-notation': 0
  }
};
