import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import unusedImports from "eslint-plugin-unused-imports";



/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
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
        "no-unused-vars": "warn",
        "unused-imports/no-unused-imports": "error",
    },
    plugins: {
      "unused-imports": unusedImports
    },
  }
];
