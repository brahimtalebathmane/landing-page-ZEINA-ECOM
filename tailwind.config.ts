import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#2f7d39",
        brandDark: "#12561f",
        lightBg: "#eef5ed"
      },
      boxShadow: {
        soft: "0 6px 18px rgba(0, 0, 0, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
