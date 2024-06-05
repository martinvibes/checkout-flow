import { useState } from "react";
import addTransparentBtn from "../images/add-transparent.png";
import calender from "../images/calendar.png";
import subBtn from "../images/minus.png";
import x from "../images/x.svg";
import Modal from "./Modal";
// import cancel from "./images/.png";

export function BillingShippingInfo({ setSubmit }) {
  const [modal, setModal] = useState(false);

  const handleSubmit = () => {
    setModal(false);
  };

  return (
    <div>
      {modal ? <Modal setSubmit={setSubmit} setModal={setModal} /> : ""}
      <Billing modal={modal} handleSubmit={handleSubmit} setModal={setModal} />
      <DatesAndOrder />
      <PaymentInfo />
      <PurchaseDetails />
    </div>
  );
}

function Billing({ modal, setModal }) {
  return (
    <div className="ml-leftSpace w-shoppingCart rounded-xl border p-font24">
      <h1 className="text-2xl font-semibold">Billing & Shipping Information</h1>
      <div className="my-4 flex items-center justify-start">
        <h3 className="font-bold">Shiping Method:</h3>
        <div className="flex items-center justify-center">
          <div className="mx-4 flex items-center justify-center font-medium">
            <input className="mx-2" type="radio" />

            <p>Delivery</p>
          </div>
          <div className="flex items-center justify-center font-medium">
            <input className="mx-2" type="radio" />
            <p>Pick Up</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <BillingSoldTo />
        <BillingShippingTo modal={modal} setModal={setModal} />
      </div>
    </div>
  );
}

function BillingSoldTo() {
  return (
    <div className="h-billingHeight w-billingWidth rounded-lg bg-light p-5">
      <h3 className="py-2 font-semibold">Send To: </h3>
      <div className="flex items-center justify-between">
        <p>Customer Number:</p>
        <p>71426</p>
      </div>
      <div className="flex items-center justify-between py-3">
        <p>Customer Name:</p>
        <p>Quinn's Flowers</p>
      </div>
      <div className="flex items-center justify-between py-2">
        <p>Contact Name:</p>
        <p></p>
      </div>
      <div className="flex items-center justify-between py-2">
        <p>Address: </p>
        <p>
          40 Boulevard Richarde <br /> Wheatley ON, N0P 2P
        </p>
      </div>
      <div className="mb-20 flex items-center justify-between pt-5">
        <p>Ship From: </p>
        <p>1</p>
      </div>
    </div>
  );
}

function BillingShippingTo({ modal, setModal }) {
  return (
    <>
      <div className="h-billingHeight w-billingWidth rounded-lg bg-light p-5">
        <div className="flex items-center justify-between py-2 font-medium text-main">
          <h3>Ship to: </h3>
          <div
            className="flex cursor-pointer items-center justify-between"
            onClick={() => setModal(true)}
          >
            <img src={addTransparentBtn} alt="add transparent btn" />
            <p>Add shipping Address</p>
          </div>
        </div>
        <div className="flex items-center justify-between py-0">
          <p>Address Code: </p>
          <p>2</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <p>Ship to Name:</p>
          <p></p>
        </div>
        <div className="flex items-center justify-between py-2">
          <p>Suite/Apt:</p>
          <p></p>
        </div>
        <div className="flex items-center justify-between py-3">
          <p>Street: </p>
          <p>40 Boulevard Richarde</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <p>City/Town: </p>
          <p>Wheatley</p>
        </div>
        <div className="flex items-center justify-between py-2.5">
          <p>Province/State: </p>
          <p>ON</p>
        </div>
        <div className="flex items-center justify-between py-2.5">
          <p>Country: </p>
          <p>CA</p>
        </div>
        <div className="flex items-center justify-between py-2.5">
          <p>Postal Code/Zip: </p>
          <p>N0P 2P0</p>
        </div>
      </div>
    </>
  );
}

function DatesAndOrder() {
  return (
    <div className="my-6 ml-leftSpace flex items-center justify-start">
      <GeneralProductShip />
      <BioProductShip />
    </div>
  );
}

function GeneralProductShip() {
  return (
    <div>
      <div className="mr-4 h-dates w-orderSummary rounded-xl border p-3">
        <h2 className="mt-3 text-2xl font-semibold">Dates & Order Notes</h2>
        <span className="my-1 font-medium">(General Products Ship)</span>
        <form className="mt-4">
          <div>
            <label className="">Requested Delivery Date:</label>
            <div className="my-4 flex items-center justify-between rounded border bg-white p-2">
              <input
                className="w-full p-0.5 outline-none"
                type="text"
                placeholder="2024/04/04"
              />
              <img src={calender} alt="calender icon" />
            </div>
          </div>
          <div className="">
            <label className="mb-2 block font-medium">Order Notes: </label>
            <input
              className="w-full rounded border p-2 outline-none"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function BioProductShip() {
  return (
    <div>
      <div className="ml-2 h-dates w-orderSummary rounded-xl border p-3">
        <h2 className="mt-3 text-2xl font-semibold">Dates & Order Notes</h2>
        <span className="my-1 font-medium">(Bio Products Ship)</span>
        <form className="mt-4">
          <div>
            <label>Requested Delivery Date:</label>
            <div className="my-4 flex items-center justify-between rounded border bg-white p-2">
              <input
                className="w-full p-0.5 outline-none"
                type="text"
                placeholder="Choose a date"
              />
              <img src={calender} alt="calender icon" />
            </div>
          </div>
          <div>
            <label className="mb-2 block font-medium">Order Notes: </label>
            <input
              className="w-full rounded border p-2 outline-none"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function PaymentInfo() {
  return (
    <div className="">
      <div className="ml-leftSpace h-48 w-shoppingCart rounded-lg border p-5">
        <h2 className="mb-2 text-2xl font-medium">Payment Information</h2>
        <table className="">
          <tr>
            <th className="whitespace-nowrap py-3 pr-6">Payment Method: </th>
            <td className="py-3 text-darkColor">On Account</td>
          </tr>
          <tr className="w-full">
            <th className="py-3 text-left">Customer PO: </th>
            <td className="w-full py-3">
              <input className="w-full rounded-md border p-2" type="text" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function PurchaseDetails() {
  return (
    <div>
      <div className="my-6 mb-11 ml-leftSpace h-purchaseHeight w-shoppingCart rounded-lg border p-5">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="mb-4 text-2xl font-medium">Purchase Details</h2>
          <h4 className="text-font16 font-medium text-main">
            Back to Shopping Cart
          </h4>
        </div>
        <table className="w-full">
          <thead className="w-full rounded bg-light font-medium text-main">
            <tr>
              <td className="p-font20">Item</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <tr className="text-darkColor">
            <td className="pt-4">
              <div>
                <span className="block">#4363</span>
                <span>Quinn's Fertilizer (950 kg)</span>
              </div>
            </td>
            <td className="pt-4">$2030.40</td>
            <td className="pt-4">
              <select>
                {Array.from({ length: 5 }, (_, i) => (
                  <option>{i + 1}</option>
                ))}
              </select>
            </td>
            <td className="pt-4">$2060.80</td>
            <td className="pt-4">
              <img src={x} alt="minus icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default BillingShippingInfo;
