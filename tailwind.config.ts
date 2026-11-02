import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F4F1EB",
          dark: "#EBE6DC",
        },
        ink: {
          DEFAULT: "#20201E",
          muted: "#6F6B63",
          soft: "#9A958C",
        },
        clay: {
          DEFAULT: "#B87A5A",
          light: "#D4A288",
          dark: "#8F5A3E",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Fluid type — readable from ~320px up without oversized mobile headings
        "display-xl": [
          "clamp(2.125rem, 1.2rem + 4.6vw, 5.5rem)",
          { lineHeight: "1.08", letterSpacing: "-0.03em" },
        ],
        "display-lg": [
          "clamp(1.875rem, 1.15rem + 3.2vw, 4rem)",
          { lineHeight: "1.12", letterSpacing: "-0.025em" },
        ],
        "display-md": [
          "clamp(1.5rem, 1.05rem + 2vw, 2.75rem)",
          { lineHeight: "1.18", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: {
        site: "1400px",
      },
      spacing: {
        section: "clamp(3.5rem, 2.5rem + 4vw, 8rem)",
        "nav-h": "clamp(4rem, 3.5rem + 1vw, 5rem)",
      },
      minHeight: {
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
