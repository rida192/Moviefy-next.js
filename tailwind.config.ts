import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["var(--font-pacifico)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
          "3xl": "1124px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
