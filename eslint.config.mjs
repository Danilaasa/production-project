import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";
import reactHooks from "eslint-plugin-react-hooks"




/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            "react/react-in-jsx-scope": "off",
            "react/jsx-indent": ["error", 4],
            indent: ["error", 4],
            "quotes": ["error", "double"],
            "object-curly-spacing": ["error", "always"],
            "no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "@typescript-eslint/no-require-imports": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "error",
            "no-undef": "off",

        },
        plugins: {
            "unused-imports": unusedImports,
            "react-hooks": reactHooks
        }
    }
];
