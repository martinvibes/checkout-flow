import rightArrow from "../images/icon-right-arrow.png";

function Navigation() {
  return (
    <div className="">
      <div className="">
        <ul className="flex justify-start text-base text-white items-center bg-main py-3 pl-leftSpace">
          <li className=" text-light mr-3">HOME</li>
          <li className=" mr-3">
            <img className=" w-2" src={rightArrow} alt="right arrow icon" />
          </li>
          <li className=" text-light mr-3">Product lists</li>
          <li className=" mr-3">
            <img className=" w-2" src={rightArrow} alt="right arrow icon" />
          </li>
          <li className=" mr-3">Product details</li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
