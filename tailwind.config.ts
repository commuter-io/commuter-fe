import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // App Router 파일들
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // 페이지 컴포넌트들
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // 모든 src 하위 파일
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // commuter: "var(--commuter-color)",
      },
      // ios safe area 대응
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
    }
  },
  plugins: [],
};
export default config;
