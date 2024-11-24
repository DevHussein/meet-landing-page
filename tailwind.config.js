/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cyan600: "hsl(192, 37%, 48%)",
      cyan300: "hsl(192, 90%, 77%)",
      purple600: "hsl(268, 34%, 53%)",
      purple300: "hsl(268, 100%, 86%)",
      slate900: "hsl(240, 21%, 20%)",
      slate600: "hsl(240, 10%, 57%)",
      slate300: "hsl(240, 18%, 85%)",
      white: "hsl(0, 0%, 98%)",
    },
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
    },
    fontSize: {
      "mobile-tp1": [
        "40px",
        { lineHeight: "110%", letterSpacing: "0px", fontWeight: "900" },
      ],
      "mobile-tp2": [
        "32px",
        { lineHeight: "110%", letterSpacing: "0px", fontWeight: "900" },
      ],
      "mobile-tp3": [
        "12px",
        { lineHeight: "110%", letterSpacing: "4px", fontWeight: "900" },
      ],
      "tablet-tp1": [
        "48px",
        { lineHeight: "110%", letterSpacing: "0px", fontWeight: "900" },
      ],
      "tablet-tp2": [
        "36px",
        { lineHeight: "110%", letterSpacing: "0px", fontWeight: "900" },
      ],
      "tablet-tp3": [
        "14px",
        { lineHeight: "110%", letterSpacing: "4px", fontWeight: "900" },
      ],
      "tablet-tp4": [
        "16px",
        {
          lineHeight: "150%",
          letterSpacing: "0px",
          fontWeight: "500",
        },
      ],
      "desktop-tp1": [
        "64px",
        { lineHeight: "110%", letterSpacing: "0px", fontWeight: "900" },
      ],
      "desktop-tp2": [
        "40px",
        { lineHeight: "110%", letterSpacing: "0px", fontWeight: "900" },
      ],
      "desktop-tp3": [
        "16px",
        { lineHeight: "110%", letterSpacing: "4px", fontWeight: "900" },
      ],
      "desktop-tp4": [
        "18px",
        { lineHeight: "150%", letterSpacing: "0px", fontWeight: "500" },
      ],
      "desktop-tp5": [
        "16px",
        { lineHeight: "150%", letterSpacing: "0px", fontWeight: "900" },
      ],
    },
    screens: {
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
