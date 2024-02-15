import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "hsl(var(--color-black))",
        border: "hsl(var(--color-border))",
        accent: "hsl(var(--color-accent))",
        background: "hsl(var(--color-background))",
        destructive: "hsl(var(--color-destructive))",
        "on-destructive": "hsl(var(--color-text-destructive))",
      },
      fontFamily: {
        aclonica: ["Aclonica", "sans-serif"],
      },
    },
  },
  plugins: [],
} as Config;
