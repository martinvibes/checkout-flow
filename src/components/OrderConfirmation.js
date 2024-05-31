import React from "react";

const OrderConfirmation = () => {
  return (
    <div className="flex flex-col my-4 justify-center items-center w-full">
      <div className=" p-5 h-orderConfirm w-orderConfirm rounded-xl border">
        <div className="flex mt-2 mb-4 justify-between items-center">
          <h1 className=" text-font24">Order Confirmation</h1>
          <p className=" text-main">Your order has been submitted</p>
        </div>
        <table className=" border-separate border-spacing-y-5 text-font16 w-full">
          <tr className="">
            <td>W1036D </td>
            <td>Web ID: </td>
            <td>Order Date: </td>
            <td className="">2024-04-03 </td>
          </tr>
          <tr className="">
            <td className="">Qty of items: </td>
            <td>2 </td>
            <td>Order Total: </td>
            <td>$2060.80 </td>
          </tr>
          <tr>
            <td>Sold To: </td>
            <td> </td>
            <td>Ship To: </td>
            <td> </td>
          </tr>
          <tr>
            <td>Customer: </td>
            <td>Quinn's Flowers</td>
            <td>Customer: </td>
            <td>Quinn's Flowers</td>
          </tr>
          <tr>
            <td>Contact: </td>
            <td></td>
            <td>Contact</td>
            <td></td>
          </tr>
          <tr className=" w-full">
            <td>Address: </td>
            <td>
              40 Boulevard Richarde Wheatley <br /> ON, N0P 2P0
            </td>
            <td>Address</td>
            <td>
              40 Boulevard Richarde Wheatley <br /> ON, N0P 2P0
            </td>
          </tr>
          <tr>
            <td>Warehouse: </td>
            <td>1</td>
            <td>Warehouse: </td>
            <td>2</td>
          </tr>
          <tr>
            <td>Requested Delivery Date: </td>
            <td>2024/04/04</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Order Notes: </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Payment Method: </td>
            <td>On Acccount</td>
            <td>Shipping Method:</td>
            <td>Delivery</td>
          </tr>
          <tr>
            <td>Customer PO: </td>
            <td>123</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      <OrderDetails />
    </div>
  );
};

function OrderDetails() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className=" p-5 w-orderConfirm my-6 mb-11 rounded-lg border h-purchaseHeight ">
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
            <td className=" pl-font20 pt-4">
              <div>
                <span className="block">#4363</span>
                <span>Quinn's Fertilizer (950 kg)</span>
              </div>
            </td>
            <td className=" pt-4">$2030.40</td>
            <td className="pt-4">
              <select className=" border w-fit p-1 rounded-3xl outline-none border-mainBod">
                {Array.from({ length: 5 }, (_, i) => (
                  <option>{i + 1}</option>
                ))}
              </select>
            </td>
            <td className=" pt-4">$2060.80</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default OrderConfirmation;
