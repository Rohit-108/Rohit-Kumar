/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      ContainerSmall: "1024px",
      containerxs: "768px",
    },
    extend: {
      screen: {
        xs: "320px",
        sml: "500px",
        mdl: "768px",
        lgl: "1024px",
        xl: "1280px",
        sm: "480px",
        md: "768px",
        lg: "1080px",
      },
      fontFamily: {
        bodyFont: ["Monotserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
        fontHeading: "Poppins, sans-serif",
        fontParagraph: "Mulish, sans-serif",
      },
      fontSize: {
        textSize: "1.7rem",
        heroSize: "5.5rem",
        heroTextSize: "1.8rem",
        headingsSize: "2.5rem",
        smallSize: "clamp(18px, 4vw, 22px)",
        clamp1: "clamp(14px, 5vw,16px)",
        clamp2: "clamp(25px, 5vw, 50px)",
        sectionHeading: "clamp(24px, 5vw, 32px)",
        clamp3: "clamp(35px, 5vw, 50px)",
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
        buttonShadow: "3px 3px 0 0 #64FFDA",
        aboutShadow: "0 10px 30px -15px rgba(2,12,27,0.7)",
        bigShadow: "0 20px 30px -15px rgba(2,12,27,0.7);",
      },
      colors: {
        mainBg: "#0A192F",
        primaryText: "#CCD6F6",
        secondaryText: "#8892B0",
        themeBlue: "#64FFDA",
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
      },
      dropShadow: {
        buttonShadow: "3px 3px 0 #64FFDA",
      },
      animation: {
        custom: "scale .2s linear 2.5s",
        morph: "morph 4s ease-in-out infinite both alternate",
      },
      keyframes: {
        scale: {
          "0%": { transform: "scale(1)", display: "block" },
          "100%": { transform: "scale(0)", display: "none" },
        },
        morph: {
          "0%": {
            borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%",
          },
          "100%": {
            borderRadius: "40% 60%",
          },
        },
      },
      borderRadius: {
        custom: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
      gridTemplateColumns: {
        custom: "repeat(2, minmax(140px, 200px))",
        otherProjects: "repeat(auto-fill, minmax(300px, 1fr))",
        otherProjectsSmaller: "repeat(auto-fill, minmax(250px, 1fr))",
      },
      gridColumn: {
        mdScreen: "1 / 9",
        mdScreenRev: "5 / -1",
        lgScreen: "7 / -1",
        lgScreenRev: "1 / 8",
        full: "1 / -1",
        lgContent: "1 / 7",
        lgImage: "6 / -1",
      },
    },
  },
  plugins: [],
};


