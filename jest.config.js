module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.(tsx|ts)$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      diagnostics: {
        warnOnly: true,
      },
    },
  },

  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: ["./setupTests.ts"],
};
