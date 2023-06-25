/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
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
    },
    extend: {
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
            transform: "-translate-y-5",
          },

          to: {
            transform: "translate-y-0",
            opacity: 1,
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
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-in-out",
        gradient: "gradient 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
