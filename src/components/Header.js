import downArrow from "../images/icon-down-rrow.png";
import search from "../images/search.png";
import addTOcart from "../images/cart.png";
import profile from "../images/user-circle-profile.png";
import global from "../images/globe-02globe.png";

function Header() {
  return (
    <div>
      <div className=" text-main flex justify-center items-center text-base my-6">
        <div className=" mr-12">
          <ul className="flex items-center justify-center">
            <li className="pr-5 ">
              <a href="/">Home</a>
            </li>
            <li className="pr-5 ">
              <div className="flex items-center justify-center">
                <p>
                  <a href="/"> Product & Services</a>
                </p>
                <img src={downArrow} alt="down arrow" />
              </div>
            </li>
            <li className="pr-5 ">
              <div className="flex justify-center items-center">
                <p>
                  <a href="/"> About Us</a>
                </p>
                <img src={downArrow} alt="down arrow" />
              </div>
            </li>
          </ul>
        </div>
        <div className="ml-12">
          <ul className=" flex justify-center items-center">
            <li className="pr-5 w-60">
              <div className="flex border-2 p-1 rounded-3xl border-main justify-between">
                <input
                  className=" w-40 ml-1 border-collapse outline-none px-1"
                  type="text"
                />
                <img
                  className="w-8 cursor-pointer"
                  src={search}
                  alt="search icon"
                />
              </div>
            </li>
            <li className="pr-5 ">
              <div className="relative flex">
                <div className=" absolute -top-3 right-11">
                  <span className=" text-xs rounded-full bg-main text-white px-1 w-fit">
                    1
                  </span>
                </div>
                <img
                  className=" mr-5 ml-1 w-7"
                  src={addTOcart}
                  alt="addtocart icon"
                />{" "}
                <img className=" w-7" src={profile} alt="user profile icon" />
              </div>
            </li>
            <li className="pr-5 ">
              <div className="flex relative border-2 p-2 border-main rounded-full">
                <img
                  className="w-6 mr-4"
                  src={global}
                  alt="country or globe icon"
                />
                <span className=" absolute w-0.5 h-6 bg-main top-1/2 -translate-y-1/2 left-1/3"></span>
                <span className=" text-base ml-3">CAN-EN</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
