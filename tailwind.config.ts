import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#122334",
        steel: "#EEF1F0",
        steelline: "#D8DEDC",
        amber: "#E8A33D",
        urgent: "#C1442E",
      },
      fontFamily: {
        head: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-plex-sans)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
