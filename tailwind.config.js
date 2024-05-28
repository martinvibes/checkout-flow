/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#008349",
        light: "#E6F3ED",
        darkColor: "#747474",
      },
      width: {
        shoppingCart: "770px",
        orderSummary: "370px",
        scartandorder: "333px",
        billingWidth: "351px",
      },
      height: {
        scartandorder: "332px",
        billingHeight: "404px",
      },
      padding: {
        leftSpace: "135px",
        shopcart: "12px",
        font20: "20px",
        font24: "24px",
      },
      margin: {
        leftSpace: "135px",
        rightSpace: "190px",
        font20: "20px",
      },
      fontSize: {
        font20: "20px",
      },
    },
  },
  plugins: [],
};
