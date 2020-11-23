module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        rail: ["Raleway", "sans-serif"]
      },
      height: {
        banner: "25rem"
      },
      colors: {
        prismui: {
          50: "#FBF6FB",
          100: "#F8ECF8",
          200: "#ECD0EC",
          300: "#E1B4E1",
          400: "#CB7CCB",
          500: "#B444B4",
          600: "#A23DA2",
          700: "#6C296C",
          800: "#511F51",
          900: "#361436"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
