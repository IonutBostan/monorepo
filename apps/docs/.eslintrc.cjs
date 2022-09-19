module.exports = {
  ...require('eslint-config-custom'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
