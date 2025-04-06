import js from "@eslint/js";
import eslintPluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist"],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      ...eslintPluginReact.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
    ],
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/jsx-uses-react": "off", // Optional if you're using React 17+ JSX transform
      "react/react-in-jsx-scope": "off", // Optional if you're using React 17+ JSX transform
    },
  }
);
