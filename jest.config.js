module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/helpers/jestStyleMock.js"
  },
  "transform": {
    "^.+\\.hbs$": "<rootDir>/node_modules/handlebars-jest",
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
};