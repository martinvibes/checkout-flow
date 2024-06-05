import Header from "./components/Header";
import Navigation from "./components/Navigation";
import addBtn from "./images/add.png";
import subBtn from "./images/minus.png";
import x from "./images/x.svg";
import checkGood from "./images/check-good.png";
import MyCart from "./components/MyCart";
import BillingShippingInfo from "./components/BillingShippingInfo";
import OrderConfirmation from "./components/OrderConfirmation";
import React, { useState } from "react";

function App() {
  const [proceed, setProceed] = useState(false);
  const [step, setStep] = useState(1);
  const [submit, setSubmit] = useState(false);

  return (
    <div className="">
      <div className="">
        <Header />
        <Navigation setSubmit={setSubmit} />
        <StepsLoader
          step={step}
          set
          proceed={proceed}
          setProceed={setProceed}
        />
        {submit ? (
          <OrderConfirmation />
        ) : (
          <ShoppingCart
            setSubmit={setSubmit}
            proceed={proceed}
            setProceed={setProceed}
          />
        )}
      </div>
    </div>
  );
}

function StepsLoader({ proceed, step }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="relative my-10 flex w-11/12 items-center justify-around">
        <div>
          <div className="flex items-center justify-center">
            <div className="w-10 rounded-full bg-green-700 p-2 text-center font-medium text-white">
              {step > 1 ? (
                <img className="w-6" src={checkGood} alt="check good icon" />
              ) : (
                "01"
              )}
            </div>
          </div>
          <p className="mt-4">Shopping cart</p>
        </div>
        <span className="absolute right-1/2 top-1/4 -z-10 h-1 w-1/3 bg-green-700"></span>
        <div>
          <div className="flex items-center justify-center">
            <div
              className={`rounded-full text-center font-medium shadow ${
                step >= 2 ? "active-steps" : "in-active"
              } w-10 p-2`}
            >
              {step >= 2 ? (
                <img className="w-6" src={checkGood} alt="check good icon" />
              ) : (
                "02"
              )}
            </div>
          </div>
          <p className="mt-4">Checkout</p>
        </div>
        <span
          className={`absolute left-1/2 top-1/4 -z-10 w-1/3 ${
            step >= 2 ? "bg-main" : "bg-gray-300"
          } h-1`}
        ></span>
        <div>
          <div className="flex items-center justify-center">
            <div
              className={`w-10 rounded-full p-2 text-center font-medium shadow ${
                step >= 3 ? "active-steps" : "in-active"
              }`}
            >
              {step >= 3 ? (
                <img className="w-6" src={checkGood} alt="check good icon" />
              ) : (
                "03"
              )}
            </div>
          </div>
          <p className="mt-4">Order Confirmation</p>
        </div>
      </div>
    </div>
  );
}

export function ShoppingCart({ setSubmit, proceed, setProceed }) {
  return (
    <>
      <div className="ml-2 flex items-start justify-between">
        {proceed ? (
          <BillingShippingInfo setSubmit={setSubmit} />
        ) : (
          <SummaryTable proceed={proceed} setProceed={setProceed} />
        )}

        <OrderSummary proceed={proceed} setProceed={setProceed} />
      </div>
    </>
  );
}

function SummaryTable({ proceed, setProceed }) {
  return (
    <div className="ml-leftSpace mr-3 h-scartandorder w-shoppingCart rounded-xl border p-5">
      <div className="mb-font20 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Shopping cart</h2>
        <h4
          className="cursor-pointer font-medium text-main"
          onClick={() => {
            setProceed(true);
          }}
        >
          Proceed to checkout
        </h4>
      </div>

      <div className="w-full">
        <table className="w-full">
          <thead className="">
            <tr className="bg-light text-main">
              <th className="p-font20 text-left">item</th>
              <th className="p-font20 text-left">Price</th>
              <th className="p-font20 text-left">Quantity</th>
              <th className="p-font20 text-left">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="t w-full text-darkColor">
              <td className="pl-font20 pt-font20">
                <div>
                  <span>#4363</span> <br />
                  <span>Quinn's Fertilizer</span>
                </div>
              </td>
              <td className="pl-font20 pt-font20">$2030.40</td>
              <td className="pl-font20 pt-font20">
                <div className="flex w-fit items-center rounded-full border">
                  <img
                    className="cursor-pointer pr-3"
                    src={subBtn}
                    alt="minus icon"
                  />
                  <span>1</span>
                  <img
                    className="cursor-pointer pl-3"
                    src={addBtn}
                    alt="add icon"
                  />
                </div>
              </td>
              <td className="pl-font20 pt-font20">$2060.80</td>
              <td className="pl-font20 pt-font20">
                <img className="cursor-pointer" src={x} alt="minus icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function OrderSummary({ proceed, setProceed }) {
  return (
    <div className="mr-rightSpace h-scartandorder w-orderSummary rounded-xl border p-5">
      <h2 className="mb-5 text-2xl font-medium">Order Summary</h2>
      <div>
        <div className="my-4 flex items-center justify-between text-gray-400">
          <p>Quantity of items in cart:</p>
          <p>2</p>
        </div>
        <div className="my-5 flex items-center justify-between text-gray-400">
          <p>Cost of items in cart:</p>
          <p>$2060.80</p>
        </div>
        <div className="my-5 flex items-center justify-between font-bold">
          <p>Sub Total:</p>
          <p>$2060.80</p>
        </div>
      </div>
      <button
        className="mb-4 mt-3 w-full rounded-full bg-green-700 p-3 text-center text-white"
        onClick={() => setProceed(true)}
      >
        {proceed ? "Submit Order" : "Proceed to Checkout"}
      </button>
      <p className="mb-2 text-center font-medium">
        Plus freight and applicable taxes
      </p>
    </div>
  );
}

export default App;
