module.exports = {
  extends: 'stylelint-config-recommended-scss',
  processors: ['stylelint-processor-html'],
  plugins: ['stylelint-scss'],
  rules: {
    'no-empty-source': null
  }
}
