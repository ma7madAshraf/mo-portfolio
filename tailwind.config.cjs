/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        winter: {
          ...require("daisyui/src/theming/themes")["winter"],
          neutral: "#000000",
          "neutral-content": "#ffffff",
          primary: "#0891b2",
          "accent-content": "#475569",
        },
      },
      {
        night: {
          ...require("daisyui/src/theming/themes")["night"],
          neutral: "#ffffff",
          "neutral-content": "#000000",
          primary: "#0891b2",
          "accent-content": "#94a3b4",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
