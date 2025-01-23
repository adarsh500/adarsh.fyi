/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  // important: "#app",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { max: "1024px" },
      desktop: "1024px",
    },
    backgroundSize: {
      "400%": "400%",
    },
    extend: {
      textUnderlineOffset: {
        3: "3px",
        5: "5px",
        6: "6px",
      },
      margin: {
        22: "88px",
      },
      colors: {
        link: "#52a9ff",
        "light-primary": "#000000",
        "light-secondary": "#4d4d4d",
        "dark-primary": "#ffffff",
        "dark-secondary": "#d6d3d1",
        "bg-dark": "#11111180",
        "bg-light": "#f0f0f081",
        "border-light": "#dedede",
        "border-dark": "#333",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
      },
      backgroundImage: {
        foo: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        // dark: "linear-gradient(rgba(45, 52, 64, 0.5) 0px, transparent 0),linear-gradient(90deg, rgba(45, 52, 64, 0.5) 0px, #0b0d0f 0)",
      },
      scale: {
        101: "1.01",
      },
      backdropBlur: {
        m: "10px",
      },
      borderRadius: {
        sm: "4px",
        md: "6px",
        lg: "8px",
      },
      keyframes: {
        fadeInDown: {
          from: {
            opacity: 0,
            transform: "translate3d(0, -20px, 0)",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
        fadeInUp: {
          from: {
            opacity: 0,
            transform: "translate3d(0, 20px, 0)",
          },
          to: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
          },
        },
        gradient: {
          "0%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "0% 50%",
          },
        },
        blur: {
          "0%": {
            opacity: "0",
            filter: "brightness(1) blur(20px)",
          },
          "100%": {
            opacity: "1",
            filter: "brightness(1) blur(0px)",
          },
        },
        gradientBlur: {
          "0%": {
            opacity: "0",
            filter: "brightness(1) blur(20px)",
            "background-position": "0% 50%",
          },
          "33%": {
            opacity: "1",
            filter: "brightness(1) blur(13px)",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "66%": {
            opacity: "1",
            filter: "brightness(1) blur(6px)",
          },
          "100%": {
            opacity: "1",
            filter: "brightness(1) blur(0px)",
            "background-position": "0% 50%",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease",
        gradient: "gradient 7s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease",
        blur: "blur 1.6s ease",
        gradientBlur: "gradient 7s ease-in-out infinite, blur 1.6s ease",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
