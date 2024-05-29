import Header from "./components/Header";
import Navigation from "./components/Navigation";
import addBtn from "./images/add.png";
import subBtn from "./images/minus.png";
import BillingShippingInfo from "./components/BillingShippingInfo";
import x from "./images/x.svg";
import Modal from "./components/Modal";
// import cancel from "./images/.png";

function App() {
  return (
    <div className="">
      <div className="">
        <Header />
        <Navigation />
        {/* <Modal /> */}
        <StepsLoader />
        <ShoppingCart />
      </div>
    </div>
  );
}

function StepsLoader() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex my-10 w-10/12 relative justify-around items-center">
        <div>
          <div className="flex justify-center items-center">
            <div className="  font-medium text-center rounded-full text-white w-10 p-2 bg-green-700">
              01
            </div>
          </div>
          <p className="mt-4">Shopping cart</p>
        </div>
        <span className=" -z-10 absolute right-1/2 w-1/3 top-1/4  bg-green-700 h-1"></span>
        <div>
          <div className="flex justify-center items-center">
            <div
              className={
                "text-center font-medium shadow text-green-700 rounded-full bg-white w-10 p-2"
              }
            >
              02
            </div>
          </div>
          <p className="mt-4">Checkout</p>
        </div>
        <span className="  -z-10 absolute left-1/2 w-1/3 top-1/4 bg-slate-200 h-1"></span>
        <div>
          <div className="flex justify-center items-center">
            <div className=" font-medium shadow text-center rounded-full text-green-700 w-10 p-2 bg-white">
              03
            </div>
          </div>
          <p className="mt-4">Order Confirmation</p>
        </div>
      </div>
    </div>
  );
}

function ShoppingCart() {
  return (
    <>
      <div className="flex justify-between ml-2 items-start">
        {/* <BillingShippingInfo /> */}
        <SummaryTable />
        <OrderSummary />
      </div>
    </>
  );
}

function SummaryTable() {
  return (
    <div className=" ml-leftSpace border w-shoppingCart h-scartandorder p-5 mr-3 rounded-xl">
      <div className=" mb-font20 flex justify-between items-center">
        <h2 className="  font-semibold text-2xl">Shopping cart</h2>
        <h4 className=" text-main font-medium">Proceed to checkout</h4>
      </div>
      <div className=" w-full">
        <table className="w-full">
          <thead className="">
            <tr className=" text-main bg-light">
              <th className=" p-font20 text-left">item</th>
              <th className=" p-font20 text-left">Price</th>
              <th className=" p-font20 text-left ">Quantity</th>
              <th className=" p-font20 text-left ">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className=" text-darkColor t w-full">
              <td className=" pt-font20 pl-font20">
                <div>
                  <span>#4363</span> <br />
                  <span>Quinn's Fertilizer</span>
                </div>
              </td>
              <td className=" pt-font20 pl-font20">$2030.40</td>
              <td className=" pt-font20 pl-font20">
                <div className=" w-fit flex items-center border rounded-full">
                  <img
                    className=" pr-3 cursor-pointer"
                    src={subBtn}
                    alt="minus icon"
                  />
                  <span>1</span>
                  <img
                    className=" pl-3 cursor-pointer"
                    src={addBtn}
                    alt="add icon"
                  />
                </div>
              </td>
              <td className=" pt-font20 pl-font20">$2060.80</td>
              <td className=" pt-font20 pl-font20">
                <img src={x} alt="minus icon" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function OrderSummary() {
  return (
    <div className="border mr-rightSpace w-orderSummary h-scartandorder p-5 rounded-xl">
      <h2 className=" mb-5 text-2xl font-medium">Order Summary</h2>
      <div>
        <div className=" text-gray-400 my-4 flex justify-between items-center">
          <p>Quantity of items in cart:</p>
          <p>2</p>
        </div>
        <div className=" text-gray-400 flex justify-between items-center my-5">
          <p>Cost of items in cart:</p>
          <p>$2060.80</p>
        </div>
        <div className="flex justify-between items-center my-5 font-bold">
          <p>Sub Total:</p>
          <p>$2060.80</p>
        </div>
      </div>
      <button className=" text-white bg-green-700 w-full text-center p-3 rounded-full mt-3 mb-4">
        Proceed to Checkout
      </button>
      <p className=" mb-2 text-center font-medium ">
        Plus freight and applicable taxes
      </p>
    </div>
  );
}

export default App;
