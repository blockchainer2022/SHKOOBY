module.exports = {
  purge: { enabled: true, content: ["./public/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },

      backgroundColor: {
        yellow: "#FEC200",
        lightYellow: "rgba(254,194,0,0.15)",
        darkYellow: "#F3BA00",
      },
      borderColor: {
        yellow: "#FEC200",
      },
      textColor: {
        dark: "#171717",
        yellow: "#FEC200",
        gray: "#878787",
        darkGray: "#1d1c1c",
        green: "#00C041",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Fredoka One", "cursive"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
