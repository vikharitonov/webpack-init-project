module.exports = {
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/helpers/jestStyleMock.js"
  },
  "transform": {
    "^.+\\.html?$": "html-loader-jest",
    "^.+\\.hbs$": "<rootDir>/node_modules/handlebars-jest",
    "^.+\\.[t|j]sx?$": "babel-jest"
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!<rootDir>/node_modules/"
  ],
};