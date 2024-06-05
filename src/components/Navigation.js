import React from "react";
import rightArrow from "../images/icon-right-arrow.png";

function Navigation({ setSubmit }) {
  return (
    <div className="">
      <div className="">
        <ul className="flex items-center justify-start bg-main py-3 pl-leftSpace text-base text-white">
          <li className="mr-3 text-light">HOME</li>
          <li className="mr-3">
            <img className="w-2" src={rightArrow} alt="right arrow icon" />
          </li>
          <li
            className="mr-3 text-light"
            onClick={() => {
              setSubmit(true);
              console.log("nothing");
            }}
          >
            Product lists
          </li>
          <li className="mr-3">
            <img className="w-2" src={rightArrow} alt="right arrow icon" />
          </li>
          <li className="mr-3">Product details</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
