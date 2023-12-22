import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#212529',
        texto: {
          white: '#f8f9fa',
          dark: '#343a40'
        },
        background: {
          dark: '#212529',
          white: '#f8f9fa'
        },
        input: {
          background: '#e9ecef',
          placeholder: '#6c757d'
        },
        error: '#ff6a6a'
      },
      fontSize: {
        rem: '1.3rem',
      }
    },
  },
  plugins: [],
};
export default config;
