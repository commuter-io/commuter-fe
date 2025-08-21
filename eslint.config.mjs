import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

const eslintConfig = [
  // Next.js + TypeScript + Prettier
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      import: importPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      // Import 규칙
      "import/order": [
        "warn",
        {
          "newlines-between": "always"
        }],
      "import/no-unresolved": "error",
      "import/no-duplicates": "error",

      // Next.js + TypeScript에서 불필요한 규칙 비활성화
      "react/react-in-jsx-scope": "off", // Next.js는 React를 자동으로 import함
      "react/prop-types": "off", // TypeScript를 사용하므로 prop-types는 필요 없음


      // React Hooks 규칙
      "react-hooks/rules-of-hooks": "error",// React Hooks 규칙
      "react-hooks/exhaustive-deps": "warn", // Hook 의존성 배열

      // TypeScript 규칙
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        }],
      "@typescript-eslint/no-explicit-any": "warn", // any 타입 사용 경고
      "prefer-const": "error", // let 대신 const 사용 권장

      // 일반 JavaScript 규칙
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"]
        }], // console.warn, console.error는 허용
      "prefer-const": "error", // let 대신 const 사용 권장
      "no-var": "error", // var 사용 금지

      // Next.js 규칙
      "@next/next/no-img-element": "error", // img 태그 대신 next/image 사용 권장
      "@next/next/no-html-link-for-pages": "error", // next/link 사용 권장
    },
    settings: {
      react: {
        version: "detect", // React 버전을 자동으로 감지
      },
      "import/resolver": {
        typescript: {}, // TypeScript 지원
      },
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/dist/**",
      "**/build/**",
      "**/coverage/**",
      "**/public/static/**",
      "**/public/assets/**",
      "**/public/images/**",
      "README.md",
      "postcss.config.mjs",
      "tailwind.config.ts",
      "next.config.mjs",
      "next-env.d.ts",
    ],
  }
];

export default eslintConfig;
