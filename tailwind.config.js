/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#F4F5FB",
        color: {
          brand: "#CA3884",
          hover: "#A52C6B",
          danger: "#C93847",
        },
        content: {
          primary: "#080B12",
          secondary: "#374151",
          tertiary: "#9CA3AF",
        },
        border: {
          primary: "#D1D5DB",
          hover: "#B9C2D0",
        },
      },
    },
  },
  plugins: [],
};

