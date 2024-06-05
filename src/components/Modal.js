import React, { useState } from "react";
import cancel from "../images/times-modal-red.svg";
import BillingShippingInfo from "./BillingShippingInfo";
import OrderConfirmation from "./OrderConfirmation";
import { OrderSummary, ShoppingCart } from "../App";

function Modal({ setModal, setSubmit }) {
  function handleSubmit() {
    setSubmit(true);
    setModal(false);
  }
  return (
    <div className="fixed top-0 z-40 flex h-screen w-full flex-col items-center justify-center">
      <div className="absolute left-0 top-0 -ml-2.5 h-full w-full bg-black opacity-50 backdrop-blur-lg backdrop-filter"></div>
      <div className="absolute top-12 z-30 h-modalHeight w-modalWidth rounded-xl border bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h1 className="text-font24 font-medium">Locations</h1>

          <img
            className="cursor-pointer"
            src={cancel}
            alt="times icon"
            onClick={() => setModal(false)}
          />
        </div>
        <table className="w-full rounded border">
          <thead className="bg-light text-main">
            <tr>
              <th className="p-4 text-left">Select</th>
              <th className="p-3 text-left">Address Code</th>
              <th className="p-3 text-left">Ship To Name</th>
              <th className="p-3 text-left">Ship'Apt</th>
              <th className="p-3 text-left">Street</th>
              <th className="p-3 text-left">City/Town</th>
              <th className="p-3 text-left">Provinces sale</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Postal Code Zip</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-4">
                <input className="" type="radio" />
              </td>
              <td className="p-4">1</td>
              <td className="p-4"></td>
              <td className="p-4"></td>
              <td className="p-4">12938 Erie</td>
              <td className="p-4">Wheatly</td>
              <td className="p-4">ON</td>
              <td className="p-4">CA</td>
              <td className="p-4">NOP 2P0</td>
            </tr>
            <tr>
              <td className="p-4">
                <input type="radio" />
              </td>
              <td className="p-4">2</td>
              <td className="p-4"></td>
              <td className="p-4"></td>
              <td className="p-4">40 Richarde</td>
              <td className="p-4">Wheatly</td>
              <td className="p-4">ON</td>
              <td className="p-4">CA</td>
              <td className="p-4">NOP 2P0</td>
            </tr>
          </tbody>
        </table>
        <button
          className="float-right mt-7 h-modalBtnHeight w-modalButton rounded-full bg-main text-font16 text-white"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Modal;
