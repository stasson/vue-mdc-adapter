module.exports = {
  testPathIgnorePatterns: [
    "/.c9/",
    "/node_modules/"
  ],
  moduleDirectories: ["node_modules"],
  moduleFileExtensions: [
    "js",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  'transformIgnorePatterns': []
}