/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#008349",
        light: "#E6F3ED",
        darkColor: "#747474",
        modalColor: "#EAEAEA",
        myCartColor: "#2F2F30",
      },
      borderColor: {
        main: "#EAEAEA",
        mainBod: "#008349",
      },
      width: {
        shoppingCart: "770px",
        orderSummary: "370px",
        scartandorder: "333px",
        billingWidth: "351px",
        modalWidth: "1040px",
        orderConfirm: "1170px",
        top1: "1040px",
        modalButton: "181px",
        // backdropW: "150vh",
        mycart: "460px",
      },
      height: {
        scartandorder: "332px",
        billingHeight: "404px",
        dates: "297px",
        purchaseHeight: "213px",
        modalHeight: "352px",
        modalBtnHeight: "52px",
        mycart: "397px",
        backdropH: "100vh",
        orderConfirm: "628px",
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
        font16: "16px",
        font24: "24px",
      },
    },
  },
  plugins: [],
};
