import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Relax or disable specific ESLint rules
      "react/jsx-no-undef": "off", // Disable 'jsx-no-undef' rule
      "no-console": "warn", // Only show warnings for console statements
      "react/prop-types": "off", // Disable prop-types validation for React components
      "react/react-in-jsx-scope": "off", // Disable the requirement for React in scope
      "no-unused-vars": "warn", // Only show warnings for unused variables
      "no-alert": "off", // Allow `alert()` calls
      "no-debugger": "off", // Allow `debugger` statements
      "quotes": ["warn", "double"], // Use double quotes, but only show warnings
    }
  }
];

export default eslintConfig;
