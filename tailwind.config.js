const plugin = require("tailwindcss/plugin");

module.exports = {
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
    plugin(({ addBase }) => {
      addBase({
        h3: { margin: "30px 0", textAlign: "right" },
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
