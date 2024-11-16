import type { Config } from "jest";
import path from "path";

const config: Config = {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
    ],
    moduleNameMapper: {
        "src/(.*)": "<rootDir>/src/$1",
        "\\.(css|scss)$": "identity-obj-proxy",
        "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx")
    },
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node"
    ],
    rootDir: "../../"
};

export default config;
