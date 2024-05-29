import addTransparentBtn from "../images/add-transparent.png";
import calender from "../images/calendar.png";
import subBtn from "../images/minus.png";
import x from "../images/x.svg";
// import cancel from "./images/.png";

function BillingShippingInfo() {
  return (
    <div>
      <Billing />
      <DatesAndOrder />
      <PaymentInfo />
      <PurchaseDetails />
    </div>
  );
}

function Billing() {
  return (
    <div className=" border rounded-xl ml-leftSpace p-font24 w-shoppingCart">
      <h1 className=" font-semibold text-2xl">
        Billing & Shipping Information
      </h1>
      <div className=" my-4 flex justify-start items-center">
        <h3 className=" font-bold">Shiping Method:</h3>
        <div className="flex justify-center items-center">
          <div className=" font-medium mx-4 flex justify-center items-center">
            <input className=" mx-2" type="radio" />

            <p>Delivery</p>
          </div>
          <div className=" font-medium flex justify-center items-center">
            <input className=" mx-2" type="radio" />
            <p>Pick Up</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <BillingSoldTo />
        <BillingShippingTo />
      </div>
    </div>
  );
}

function BillingSoldTo() {
  return (
    <div className="  h-billingHeight w-billingWidth p-5  rounded-lg bg-light">
      <h3 className=" font-semibold py-2">Send To: </h3>
      <div className="flex justify-between items-center">
        <p>Customer Number:</p>
        <p>71426</p>
      </div>
      <div className="flex py-3 justify-between items-center">
        <p>Customer Name:</p>
        <p>Quinn's Flowers</p>
      </div>
      <div className="flex py-2 justify-between items-center">
        <p>Contact Name:</p>
        <p></p>
      </div>
      <div className="flex py-2 justify-between items-center">
        <p>Address: </p>
        <p>
          40 Boulevard Richarde <br /> Wheatley ON, N0P 2P
        </p>
      </div>
      <div className="flex pt-5 mb-20 justify-between items-center">
        <p>Ship From: </p>
        <p>1</p>
      </div>
    </div>
  );
}

function BillingShippingTo() {
  return (
    <div className=" h-billingHeight  rounded-lg w-billingWidth p-5 bg-light">
      <div className="flex text-main font-medium justify-between items-center py-2">
        <h3>Ship to: </h3>
        <div className="flex justify-between items-center">
          <img src={addTransparentBtn} alt="add transparent btn" />
          <p>Add shipping Address</p>
        </div>
      </div>
      <div className="flex py-0 justify-between items-center">
        <p>Address Code: </p>
        <p>2</p>
      </div>
      <div className="flex py-3 justify-between items-center">
        <p>Ship to Name:</p>
        <p></p>
      </div>
      <div className="flex py-2 justify-between items-center">
        <p>Suite/Apt:</p>
        <p></p>
      </div>
      <div className="flex py-3 justify-between items-center">
        <p>Street: </p>
        <p>40 Boulevard Richarde</p>
      </div>
      <div className="flex py-3 justify-between items-center">
        <p>City/Town: </p>
        <p>Wheatley</p>
      </div>
      <div className="flex py-2.5 justify-between items-center">
        <p>Province/State: </p>
        <p>ON</p>
      </div>
      <div className="flex py-2.5 justify-between items-center">
        <p>Country: </p>
        <p>CA</p>
      </div>
      <div className="flex py-2.5 justify-between items-center">
        <p>Postal Code/Zip: </p>
        <p>N0P 2P0</p>
      </div>
    </div>
  );
}

function DatesAndOrder() {
  return (
    <div className="flex justify-start items-center my-6 ml-leftSpace">
      <GeneralProductShip />
      <BioProductShip />
    </div>
  );
}

function GeneralProductShip() {
  return (
    <div>
      <div className="border p-3 w-orderSummary h-dates rounded-xl mr-4">
        <h2 className=" mt-3 text-2xl font-semibold">Dates & Order Notes</h2>
        <span className=" my-1 font-medium">(General Products Ship)</span>
        <form className=" mt-4">
          <div>
            <label className="">Requested Delivery Date:</label>
            <div className="flex border rounded my-4 justify-between items-center bg-white p-2">
              <input
                className="w-full outline-none p-0.5"
                type="text"
                placeholder="2024/04/04"
              />
              <img src={calender} alt="calender icon" />
            </div>
          </div>
          <div className="">
            <label className=" block mb-2 font-medium">Order Notes: </label>
            <input
              className="border p-2 outline-none rounded w-full"
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
      <div className="border ml-2 p-3 w-orderSummary h-dates rounded-xl">
        <h2 className=" mt-3 text-2xl font-semibold">Dates & Order Notes</h2>
        <span className=" my-1 font-medium">(Bio Products Ship)</span>
        <form className="mt-4">
          <div>
            <label>Requested Delivery Date:</label>
            <div className="flex border rounded my-4 justify-between items-center bg-white p-2">
              <input
                className="w-full outline-none p-0.5"
                type="text"
                placeholder="Choose a date"
              />
              <img src={calender} alt="calender icon" />
            </div>
          </div>
          <div>
            <label className=" block mb-2 font-medium">Order Notes: </label>
            <input
              className="border p-2 outline-none rounded w-full"
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
      <div className=" w-shoppingCart h-48 ml-leftSpace rounded-lg border p-5">
        <h2 className=" font-medium text-2xl mb-2">Payment Information</h2>
        <table className="">
          <tr>
            <th className=" py-3 whitespace-nowrap pr-6">Payment Method: </th>
            <td className=" py-3 text-darkColor">On Account</td>
          </tr>
          <tr className=" w-full">
            <th className=" py-3 text-left">Customer PO: </th>
            <td className=" py-3 w-full">
              <input className=" p-2 rounded-md border w-full" type="text" />
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
      <div className=" p-5 ml-leftSpace my-6 mb-11 rounded-lg border w-shoppingCart h-purchaseHeight ">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-medium text-2xl mb-4">Purchase Details</h2>
          <h4 className=" text-font16 text-main font-medium">
            Back to Shopping Cart
          </h4>
        </div>
        <table className=" w-full">
          <thead className=" font-medium w-full text-main bg-light rounded">
            <tr>
              <td className=" p-font20">Item</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td></td>
            </tr>
          </thead>
          <tr className=" text-darkColor">
            <td className=" pt-4">
              <div>
                <span className="block">#4363</span>
                <span>Quinn's Fertilizer (950 kg)</span>
              </div>
            </td>
            <td className=" pt-4">$2030.40</td>
            <td className=" pt-4">
              <select>
                {Array.from({ length: 5 }, (_, i) => (
                  <option>{i + 1}</option>
                ))}
              </select>
            </td>
            <td className=" pt-4">$2060.80</td>
            <td className=" pt-4">
              <img src={x} alt="minus icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default BillingShippingInfo;
