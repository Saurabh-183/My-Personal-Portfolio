import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#00f5d4",
          dim: "#00c4a9",
        },
        dark: {
          DEFAULT: "#050a0e",
          2: "#0a1118",
          3: "#0f1922",
        },
        theme: {
          bg: "var(--bg-main)",
          card: "var(--bg-card)",
          hover: "var(--bg-card-hover)",
          text: "var(--text-main)",
          muted: "var(--text-muted)",
          accent: "var(--accent)",
          border: "var(--border-subtle)"
        }
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Outfit'", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s forwards",
        "scroll-pulse": "scrollPulse 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
