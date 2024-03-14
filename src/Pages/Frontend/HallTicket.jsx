import React, { useEffect, useRef, useState } from "react";
import CheckEmptyField from "../../utility/CheckEmptyField";
import WarningToast from "../../utility/WarningToast";
import AdmitCard from "../../Certificates/AdmitCard";
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import ErrorToast from "../../utility/ErrorToast";
import Logo from "../../assests/csseLogo.png";
import courses from "../../DB/CoursesDB";

const HallTicket = () => {
  const [formData, setFormData] = useState({ course: "", regNo: "" });
  const [printData, setPrintData] = useState(null);
  const componentRef = useRef();

  const handlePrintDocument = useReactToPrint({
    content: () => componentRef.current,
    onAfterPrint: () => {
      setFormData({ course: "", regNo: "" });
      window.location.reload();
    },
  });
  useEffect(() => {
    document.getElementById("title").innerText = "Admit Card | CSSE";
  }, []);
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
        <img src={Logo} alt="Logo" className="p-5 w-[544px]" />
        <div className="my-5 text-white flex-1 justify-self-center">
          <div className="bg-cyan-700 rounded-md shadow-md px-16 py-8">
            <div className="p-10 border-2 border-white rounded-sm flex flex-col gap-5">
              <h1 className="text-[30px] font-semibold text-center">
                Download Admit Card
              </h1>
              <div className="flex flex-col pt-5">
                <div className="flex flex-col gap-4 ">
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
          <AdmitCard ref={componentRef} data={printData} />
        </div>
      )}
    </>
  );
};

export default HallTicket;
