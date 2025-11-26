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
                black: "#312E81", // Indigo 900 (Deep Navy)
                dark: "#1E1B4B", // Indigo 950 (Midnight)
                gray: "#E2E8F0", // Slate 200 (Softer Light Bg)
                orange: "#F59E0B", // Amber 500 (Rich Accent)
                blue: "#10B981", // Emerald 500 (Vibrant Tech)
        },
      },
    },
  },
  plugins: [],
}
