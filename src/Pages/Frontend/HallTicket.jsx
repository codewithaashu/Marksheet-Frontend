import React, { useState } from "react";
import CheckEmptyField from "../../utility/CheckEmptyField";
import WarningToast from "../../utility/WarningToast";

const HallTicket = () => {
  const [formData, setFormData] = useState({ regNo: "", dob: "" });
  const handleClick = () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField(formData);
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field . Plese fill it`);
      return;
    }
    console.log(formData);
  };
  return (
    <>
      <div className="flex flex-col gap-10  items-center min-h-screen">
        <img
          src="http://www.riosresult.in/Images/logo.png"
          alt="Logo"
          className="p-8 w-[544px] h-[125px]"
        />
        <div className="my-5 text-white flex-1 justify-self-center">
          <div className="bg-cyan-700 rounded-md shadow-md p-20 py-16">
            <div className="p-10 border-2 border-white rounded-sm flex flex-col gap-5">
              <h1 className="text-[30px] font-semibold text-center">
                Download Result
              </h1>
              <div className="flex flex-col gap-3 pt-5">
                <div className="flex flex-row gap-5 items-center justify-center">
                  <div className="flex flex-col gap-3">
                    <h1 className="text-lg font-medium">
                      Registration Number :
                    </h1>
                    <h1 className="text-lg font-medium">Date of Birth :</h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      className="text-black placeholder:text-gray-300 p-1 rounded-sm w-64 outline-none px-2"
                      placeholder="Enter your Registration Number"
                      onChange={(e) =>
                        setFormData({ ...formData, regNo: e.target.value })
                      }
                    />
                    <input
                      type="date"
                      className="text-gray-800 placeholder:text-gray-300 p-1 rounded-sm w-64 outline-none"
                      onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-5 items-center justify-center"></div>
                <button
                  className="bg-yellow-500 text-white rounded-md shadow-md  w-fit px-3 py-1 text-lg font-semibold self-center mt-4"
                  onClick={handleClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HallTicket;
