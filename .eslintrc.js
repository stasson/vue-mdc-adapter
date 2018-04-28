module.exports = {
  env: {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  plugins: [
    "vue",
    "prettier"
  ],
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  "parserOptions": {
    "sourceType": "module",
    "parser": 'babel-eslint',
    "ecmaFeatures": {
      "jsx": true,
    }
  },
  "rules": {
    "vue/name-property-casing": ["error", "kebab-case"],
    "vue/require-default-prop": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    "prettier/prettier": "warn"
  }
}
