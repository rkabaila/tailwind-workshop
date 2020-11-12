const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./public/index.html", "./src/**/*.tsx"],
  theme: {
    fontFamily: {
      proxima: ["Proxima Nova"],
    },
    extend: {
      width: {
        "1/7": "14.2857%",
      },
      colors: {
        silver: "#c0c0c0",
      },
    },
  },
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        h3: { color: config("theme.colors.white") },
      });
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".btn-blue": {
          backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd",
          },
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
      };

      addComponents(buttons);
    }),
  ],
};
