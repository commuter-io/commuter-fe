import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

const compat = new FlatCompat({
  baseDirectory: process.cwd(),
});

const eslintConfig = [
  // Next.js + TypeScript + Prettier
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser, // TypeScript 파서 사용
      parserOptions: {
        ecmaVersion: "latest", // 최신 ECMAScript 기능 지원
        sourceType: "module", // ES 모듈 사용
        ecmaFeatures: {
          jsx: true, // JSX 지원 (명시적)
        },
        // project: "./tsconfig.json", // TypeScript 프로젝트 설정 파일 (필요시 활성화)
      },
      globals: {
        React: "writable", // React를 전역 변수로 설정 (Next.js에서 필요)
        JSX: "writable", // JSX 네임스페이스를 전역 변수로 설정
      },
    },
    plugins: {
      import: importPlugin,
      "react-hooks": reactHooks,
      "@typescript-eslint": tseslint,
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      // Import 규칙
      "import/order": [
        "warn",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
          "newlines-between": "always",
          "alphabetize": { "order": "asc", "caseInsensitive": true }
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

      // 일반 JavaScript 규칙
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"]
        }], // console.warn, console.error는 허용
      "prefer-const": "error", // let 대신 const 사용 권장
      "no-var": "error", // var 사용 금지
      "no-param-reassign": [
        "error",
        {
          props: true,
        }
      ],

      // Next.js 규칙
      "@next/next/no-img-element": "error", // img 태그 대신 next/image 사용 권장
      "@next/next/no-html-link-for-pages": "error", // next/link 사용 권장

      // Tailwind CSS 규칙
      "better-tailwindcss/enforce-consistent-class-order": ["warn", {
        order: "official",
        callees: ["cn", "cva", "clsx"],
      }], // Tailwind CSS 클래스 정렬 순서 기본값 적용
      "better-tailwindcss/no-duplicate-classes": "error", // 중복된 Tailwind CSS 클래스 금지
      "better-tailwindcss/no-unnecessary-whitespace": "warn", // 불필요한 공백 금지

    },
    settings: {
      react: {
        version: "detect", // React 버전을 자동으로 감지
      },
      "import/resolver": {
        typescript: {}, // TypeScript 지원
      },
      "tailwindcss/config": "./tailwind.config.ts",
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
      "**/public/**",
      "README.md",
      "postcss.config.mjs",
      "tailwind.config.ts",
      "next.config.mjs",
      "next-env.d.ts",
    ],
  }
];

export default eslintConfig;
