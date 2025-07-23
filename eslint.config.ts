import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import * as eslintPluginMdx from "eslint-plugin-mdx";
import { parser as eslintMdxParser } from "eslint-mdx";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { "@typescript-eslint": typescript, react },
    rules: {
      // Add or override rules here
    },
  },
  {
    files: ["**/*.mdx"],
    languageOptions: {
      parser: eslintMdxParser,
    },
    plugins: { mdx: eslintPluginMdx },
    // No extends here!
  },
  prettier,
] as const;
