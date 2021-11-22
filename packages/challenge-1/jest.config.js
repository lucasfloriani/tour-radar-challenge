module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  collectCoverageFrom: ["src/**/*.ts(x)?", "!src/**/stories.tsx"],
  modulePaths: ["<rootDir>/src/"],
};
