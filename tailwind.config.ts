import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          primary: "#003d7a",
          secondary: "#1d4ed8", 
          accent: "#2563eb",
          neutral: "#64748b",
          'bg-light': "#f8fafc",
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
