import typescriptEslintParser from "@typescript-eslint/parser";
import globals from "globals";
import js from "@eslint/js";
import functional from "eslint-plugin-functional";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended.rules,
  {
    files: ["**/*.ts", "*.tsx"],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: { project: true },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
    plugins: { functional },
    rules: {
      "functional/immutable-data": "error",
    },
  },
];
