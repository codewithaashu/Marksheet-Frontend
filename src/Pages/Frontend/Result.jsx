import React, { useRef, useState } from "react";
import CheckEmptyField from "../../utility/CheckEmptyField";
import WarningToast from "../../utility/WarningToast";
import ErrorToast from "../../utility/ErrorToast";
import axios from "axios";
import SuccessToast from "../../utility/SuccesToast";
import { useReactToPrint } from "react-to-print";
import Marksheet from "../../Certificates/Marksheet";
import Logo from "../../assests/csseLogo.png";

const Result = () => {
  const [formData, setFormData] = useState({ regNo: "", dob: "" });
  const [printData, setPrintData] = useState(null);
  const componentRef = useRef();
  const handlePrintDocument = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => {
      setFormData({ regNo: "", dob: "" });
    },
  });
  const fetchResult = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/result`,
        formData
      );
      if (!data.success) {
        ErrorToast(data.message);
        return;
      }
      setPrintData(data.data);
      handlePrintDocument();
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
    fetchResult();
  };
  return (
    <>
      <div className="flex flex-col gap-10  items-center min-h-screen">
        <img src={Logo} alt="Logo" className="p-8 w-[544px]" />
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
                      value={formData.regNo}
                      onChange={(e) =>
                        setFormData({ ...formData, regNo: e.target.value })
                      }
                    />
                    <input
                      type="date"
                      value={formData.dob}
                      className="text-gray-800 placeholder:text-gray-300 p-1 rounded-sm w-64 outline-none"
                      onChange={(e) =>
                        setFormData({ ...formData, dob: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-5 items-center justify-center w-full">
                  <button
                    className="text-lg font-semibold border-2 border-white text-white px-5 py-2 rounded-md mt-8 w-fit"
                    onClick={handleClick}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {printData && (
        <div style={{ display: "none" }}>
          <Marksheet ref={componentRef} data={printData} />
        </div>
      )}
    </>
  );
};

export default Result;
