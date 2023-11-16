/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#57BD36",
        secondary: "#394648",
        accent: "#CBAC88",
      },
    },
  },
  plugins: [],
};
