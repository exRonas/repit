/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        qore: {
          black: "#111111", // Industrial Black
          dark: "#1A1A1A",  // Dark Gray (Cards)
          gray: "#F5F5F7",  // Light Gray (Background)
          orange: "#FF5C00", // Safety Orange (Main Accent)
          blue: "#00E0FF"    // Electric Blue (Tech/AI)
        },
      },
    },
  },
  plugins: [],
}
