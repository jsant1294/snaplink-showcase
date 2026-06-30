import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#050505",
        ink: "#10100e",
        cream: "#f5efe2",
        parchment: "#d9c6a1",
        champagne: "#c7a45b",
        gilt: "#f2d28a",
        smoke: "#1a1713"
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        gold: "0 24px 80px rgba(199, 164, 91, 0.22)",
        velvet: "0 30px 120px rgba(0, 0, 0, 0.55)"
      }
    }
  },
  plugins: []
};

export default config;
