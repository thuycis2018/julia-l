import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          1: '#15372c',
          2: '#008561',
          3: '#080561',
          4: '#93B78C',
          5: '#3F5E3B'
        },
        brown: {
          1: '#403434'
        },
      },
    },
  },
  plugins: [],
};
export default config;
