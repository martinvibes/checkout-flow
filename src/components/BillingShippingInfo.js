import addTransparentBtn from "../images/add-transparent.png";
import calender from "../images/calendar.png";
import subBtn from "../images/minus.png";
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
    <div className=" border rounded-xl ml-leftSpace p-font24 my-3 w-shoppingCart">
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
    <div className="flex justify-center items-center">
      <GeneralProductShip />
      <BioProductShip />
    </div>
  );
}

function GeneralProductShip() {
  return (
    <div>
      <div className="border ">
        <h2>Dates & Order Notes</h2>
        <span>(General Products Ship)</span>
        <form>
          <div>
            <label>Requested Delivery Date:</label>
            <div className="flex justify-between items-center bg-gray-200 p-2">
              <input type="date" placeholder="2024/04/04" />
              <img src={calender} alt="calender icon" />
            </div>
          </div>
          <div>
            <label>Order Notes: </label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

function BioProductShip() {
  return (
    <div>
      <div>
        <h2>Dates & Order Notes</h2>
        <span>(Bio Products Ship)</span>
        <form>
          <div>
            <label>Requested Delivery Date:</label>
            <div>
              <input type="date" />
              <img src={calender} alt="calender icon" />
            </div>
          </div>
          <div>
            <label>Order Notes: </label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}

function PaymentInfo() {
  return (
    <div>
      <div>
        <h2>Payment Information</h2>
        <div>
          <h3>Payment Method: </h3>
          <span>On Account</span>
        </div>
        <div>
          <h3>Customer PO: </h3>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

function PurchaseDetails() {
  return (
    <div>
      <div>
        <div>
          <h2>Purchase Details</h2>
          <h4>Back to Shopping Cart</h4>
        </div>
        <table>
          <tr>
            <td>Item</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Total</td>
            <td></td>
          </tr>
          <tr>
            <td>
              <div>
                <span>#4363</span>
                <span>Quinn's Fertilizer (950 kg)</span>
              </div>
            </td>
            <td>$2030.40</td>
            <td>
              <select>
                {Array.from({ length: 5 }, (_, i) => (
                  <option>{i + 1}</option>
                ))}
              </select>
            </td>
            <td>$2060.80</td>
            <td>
              <img src={subBtn} alt="minus icon" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default BillingShippingInfo;
