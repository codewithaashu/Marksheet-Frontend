import React, { useEffect, useState } from "react";
import Logo from "../../assests/csseLogo.png";
import courses from "../../DB/CoursesDB";
import axios from "axios";
import ErrorToast from "../../utility/ErrorToast";
import SuccessToast from "../../utility/SuccesToast";
import CheckEmptyField from "../../utility/CheckEmptyField";
import WarningToast from "../../utility/WarningToast";
import Check from "../../assests/check.png";
import { useNavigate } from "react-router-dom";
const VerifyRegistration = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "Result Verification | CSSE";
  }, []);
  const [formData, setFormData] = useState({ course: "", regNo: "", dob: "" });
  const [isVerify, setIsVerified] = useState(false);
  const navigate = useNavigate();
  const verifyDetails = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/result`,
        formData
      );
      if (!data.success) {
        ErrorToast(data.message);
        return;
      }
      SuccessToast(data.message);
      setIsVerified(true);
    } catch (err) {
      ErrorToast("Server Error. Please try again");
    }
  };
  const handleClick = () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField(formData);
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field . Plese fill it`);
      return;
    }
    verifyDetails();
  };
  return (
    <>
      <div className="flex flex-col gap-10  items-center min-h-screen">
        <img src={Logo} alt="Logo" className="p-5 w-[544px]" />
        {!isVerify ? (
          <div className="bg-cyan-700 rounded-md shadow-md text-white">
            <div className="p-10 border-2 border-white rounded-sm flex flex-col gap-5">
              <h1 className="text-[30px] font-semibold text-center text-white">
                Verify Your Registration
              </h1>

              <div className="flex flex-col gap-3 pt-5">
                <div className="flex flex-col gap-3 ">
                  <div className="flex flex-col gap-1 ">
                    <h1 className="text-base font-semibold text-white uppercase">
                      Choose Class
                    </h1>
                    <select
                      className="select  w-full  h-fit p-2 bg-white text-base border-[1px] border-gray-400 outline-none rounded-sm text-gray-700 focus:outline-none"
                      defaultValue=""
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                    >
                      <option disabled value={""}>
                        Select your Class
                      </option>
                      {courses.map((curr, index) => {
                        return (
                          <option value={curr} key={index}>
                            {curr}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[15px] font-semibold text-white uppercase">
                      Registration Number
                    </h1>
                    <input
                      type="text"
                      value={formData.regNo}
                      className={`file-input w-full  h-fit p-2 bg-white text-sm border-[1px] border-gray-800 text-gray-700 focus:outline-none placeholder:text-sm py-3`}
                      placeholder="Enter your Registration Number"
                      onChange={(e) => {
                        setFormData({ ...formData, regNo: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="text-[15px] font-semibold text-white uppercase">
                      Date of Birth
                    </h1>
                    <input
                      type="date"
                      value={formData.dob}
                      className={`file-input w-full h-fit p-2 bg-white text-sm border-[1px] border-gray-800 text-gray-700 focus:outline-none placeholder:text-sm py-3`}
                      placeholder="Enter your Date of Birth"
                      onChange={(e) => {
                        setFormData({ ...formData, dob: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <button
                  className="bg-yellow-500 text-white rounded-md shadow-md  w-fit px-3 py-1 text-lg font-semibold self-center mt-4"
                  onClick={handleClick}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col gap-3 items-center bg-white py-10 px-8 rounded-md shadow-md justify-self-center mt-14">
              <img src={Check} alt="Check Icon" className="w-[64px]" />
              <h1 className="text-lg font-semibold text-center">Verified</h1>
              <p className="text-sm text-gray-500 font-semibold">
                Your Details is successfully verified at CSSE Website.
              </p>
              <button
                className="text-lg font-semibold bg-cyan-700 text-white px-5 py-2 rounded-md mt-8"
                onClick={() => navigate("/")}
              >
                Go to Home Page
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default VerifyRegistration;
