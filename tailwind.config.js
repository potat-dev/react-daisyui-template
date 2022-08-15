/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night", "winter", "synthwave", "cyberpunk"],
  },
};
