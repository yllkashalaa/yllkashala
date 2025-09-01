/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#94B59F",
        secondary: "#AEC9AB",
        text: "white",
        title: "#94B59F",
        bgPrimary: "#09090B",
        bgSecondary: "#2d2d2e",
      },
    },
  },
  plugins: [],
}
