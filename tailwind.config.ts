import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2563EB", // Blue 600
        primaryDark: "#1E40AF", // Blue 800
        "background-light": "#F8FAFC", // Slate 50
        "background-dark": "#020617", // Slate 950
      },
      fontFamily: {
        display: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        pill: "9999px",
      },
      animation: {
        blob: "blob 10s infinite",
        float: "float 6s ease-in-out infinite",
        "glow-move": "glow-move 3s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        flow: "flow 3s linear infinite",
        typing: "typing 2s steps(40, end)",
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        flow: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "currentColor" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
