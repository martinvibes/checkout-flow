import cancel from "../images/times-modal-red.svg";

function Modal() {
  return (
    <div className=" backdrop-filter backdrop-blur-lg z-40 relative w-full flex justify-center items-center">
      <div className=" w-screen h-backdropH opacity-50 absolute bg-black -z-10"></div>
      <div className=" fixed -top-28 p-5 z-30 bg-white border h-modalHeight w-modalWidth rounded-xl">
        <div className="flex justify-between items-center mb-3">
          <h1 className=" text-font24 font-medium">Locations</h1>
          <img className=" cursor-pointer" src={cancel} alt="times icon" />
        </div>
        <table className=" w-full border rounded">
          <thead className=" text-main bg-light">
            <tr>
              <th className=" text-left p-4">Select</th>
              <th className=" text-left p-3">Address Code</th>
              <th className=" text-left p-3">Ship To Name</th>
              <th className=" text-left p-3">Ship'Apt</th>
              <th className=" text-left p-3">Street</th>
              <th className=" text-left p-3">City/Town</th>
              <th className=" text-left p-3">Provinces sale</th>
              <th className=" text-left p-3">Country</th>
              <th className=" text-left p-3">Postal Code Zip</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border">
              <td className=" p-4">
                <input className="" type="radio" />
              </td>
              <td className=" p-4">1</td>
              <td className=" p-4"></td>
              <td className=" p-4"></td>
              <td className=" p-4">12938 Erie</td>
              <td className=" p-4">Wheatly</td>
              <td className=" p-4">ON</td>
              <td className=" p-4">CA</td>
              <td className=" p-4">NOP 2P0</td>
            </tr>
            <tr>
              <td className=" p-4">
                <input type="radio" />
              </td>
              <td className=" p-4">2</td>
              <td className=" p-4"></td>
              <td className=" p-4"></td>
              <td className=" p-4">40 Richarde</td>
              <td className=" p-4">Wheatly</td>
              <td className=" p-4">ON</td>
              <td className=" p-4">CA</td>
              <td className=" p-4">NOP 2P0</td>
            </tr>
          </tbody>
        </table>
        <button className=" float-right rounded-full mt-7 text-font16 text-white w-modalButton h-modalBtnHeight bg-main">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Modal;
