/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#2c6e49",
        secondary: "#fefee3",
        accent: "#4c956c",
      },
    },
  },
  plugins: [],
};
