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
      fontSize: {
        display: [
          "2.75rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "800",
          },
        ],
        headline: [
          "2rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        subhead: [
          "1.25rem",
          { lineHeight: "1.5", letterSpacing: "-0.005em", fontWeight: "600" },
        ],
        body: ["1rem", { lineHeight: "1.65" }],
        fine: ["0.875rem", { lineHeight: "1.5" }],
      },
      textDecorationThickness: {
        1: "1px",
        1.5: "1.5px",
        2: "2px",
      },
      textUnderlineOffset: {
        3: "3px",
        5: "5px",
        6: "6px",
        8: "8px",
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
        // Surfaces
        "bg-dark": "#0b0b0b", // solid dark to avoid semi-transparent artifacts
        "bg-light": "#f0f0f081",
        "border-light": "#dedede",
        "border-dark": "#333",
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        // Accent colors
        accent: {
          orange: "#ff6b35",
          "orange-light": "#ff8c5a",
          "orange-dark": "#e55a2b",
          white: "#ffffff",
        },
      },
      backgroundImage: {
        foo: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        // Elevated hero beams & soft radial glow
        "hero-beam":
          "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0) 60%)",
        "hero-glow":
          "radial-gradient(35% 35% at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)",
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
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-6px)",
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
        float: "float 6s ease-in-out infinite",
      },
      boxShadow: {
        "glow-brand":
          "0 0 0 1px rgba(124,58,237,0.24), 0 8px 24px rgba(124,58,237,0.18), 0 16px 48px rgba(124,58,237,0.12)",
        "soft-elev": "0 1px 2px rgba(0,0,0,0.24), 0 12px 40px rgba(0,0,0,0.24)",
      },
      ringColor: ({ theme }) => ({
        ...theme("colors"),
        brand: "#7c3aed",
        accent: "#ff6b35",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
