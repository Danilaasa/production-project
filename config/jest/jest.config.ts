import type { Config } from "jest";

const config: Config = {
    clearMocks: true,
    testEnvironment: "jsdom",
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\"
    ],
    moduleDirectories: [
        "node_modules"
    ],
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
    ],
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
