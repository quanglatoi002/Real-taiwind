/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        dm: ['"DM Sans"'],
        roboto: ['"Roboto"'],
    },
    colors: {
      orangeff: "#FF9900",
      orangef8: "#F85A47",
      gray31: "#31353B",
      gray33: "#333",
      grayda: "#DADADA",
    },
    gridTemplateColumns: {
      work: "1fr auto 1fr auto 1fr",
    },
  },
},
  plugins: [],
}
