/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Define where Tailwind should look for class names
    "./App.{js,jsx,ts,tsx}", // If your main app file is App.js or App.tsx
    "./components/**/*.{js,jsx,ts,tsx}", // Include all files in the components folder
    "./screens/**/*.{js,jsx,ts,tsx}", // Include all files in the screens folder
  ],
  theme: {
    extend: {
      // Customize colors, spacing, fonts, etc.
      colors: {
        primary: "#1a73e8",
        secondary: "#ffed4a",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
