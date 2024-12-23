import type { Config } from "jest"

const config: Config = {
  modulePaths: ["<rootDir>/node_modules", "<rootDir>/src/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testEnvironment: "jsdom",
  testMatch: ["**/?(*.)+(spec|test).[t]s?(x)"],
  testTimeout: 30000,
  transform: {
    "\\.(css)$": "<rootDir>/node_modules/jest-transform-css",
    "\\.(ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
}

export default config
