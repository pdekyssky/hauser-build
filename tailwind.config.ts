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
        "display-xl": ["clamp(2.75rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        site: "1400px",
      },
      spacing: {
        section: "clamp(4.5rem, 10vw, 8rem)",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
