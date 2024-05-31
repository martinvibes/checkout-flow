import React from "react";
import cancel from "../images/light-times.svg";
import addBtn from "../images/add.png";
import subBtn from "../images/minus.png";
import trash from "../images/trash.png";

const MyCart = () => {
  return (
    <div className=" w-full flex my-5  justify-center items-center">
      <div className=" p-5 w-mycart h-mycart rounded-xl bg-white border ">
        <div className="flex justify-between items-center">
          <h1 className=" font-medium text-font24 ">My Cart(1)</h1>
          <img
            className=" cursor-pointer"
            src={cancel}
            alt="times ion for delete"
          />
        </div>
        <div className="flex justify-between my-3">
          <div>
            <span className=" text-darkColor block">#4363</span>
            <span className=" text-myCartColor">
              Quinn’s Fertilizer (20kg bag)
            </span>
          </div>
          <span className=" font-medium">$2030.40</span>
        </div>

        <div className=" py-8 border-b-2 border-main flex justify-between items-center">
          <div className=" w-fit flex items-center border rounded-full">
            <img
              className=" pr-2 cursor-pointer"
              src={subBtn}
              alt="minus icon"
            />
            <span>1</span>
            <img className=" pl-2 cursor-pointer" src={addBtn} alt="add icon" />
          </div>
          <img
            className=" cursor-pointer"
            src={trash}
            alt="delete button icon"
          />
        </div>
        <div className=" py-6 border-b-2 flex justify-between items-center">
          <h3 className=" font-medium text-main">Total</h3>
          <span className=" font-medium">$4060.60</span>
        </div>
        <button className=" text-white bg-green-700 w-full text-center p-3 rounded-full mt-7 mb-2">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default MyCart;
