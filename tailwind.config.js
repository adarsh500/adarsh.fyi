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
    colors: {
      link: "#52a9ff",
      "light-primary": "#000000",
      "light-secondary": "#4d4d4d",
      "dark-primary": "#ffffff",
      "dark-secondary": "#ffffffcc",
      "bg-dark": "#11111180",
      "bg-light": "#f0f0f081",
      "border-light": "#dedede",
      "border-dark": "#333",
      transparent: "transparent",
      black: "#000",
      white: "#fff",
    },
    extend: {
      scale: {
        101: "1.01",
      },
      backdropBlur: {
        m: "10px",
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
        lg: "10px",
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
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        blur: {
          "0%": {
            opacity: "opactiy-0",
          },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1.6s ease",
        gradient: "gradient 7s ease-in-out infinite",
        fadeInUp: "fadeInUp 1.6s ease",
      },
    },
  },
  plugins: [],
};
