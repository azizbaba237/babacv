/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6", // bleu Tailwind
        secondary: "#10B981", // émeraude Tailwind
        dark: "#1E293B", // slate-800
        light: "#F8FAFC", // slate-50
      },
    },
  },
  plugins: [],
}