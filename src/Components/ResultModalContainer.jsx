import React from "react";
import InputComponent from "./InputComponent";
import SentenceCase from "../utility/SentenceCase";
import axios from "axios";
import ErrorToast from "../utility/ErrorToast";
import SuccessToast from "../utility/SuccesToast";
import CheckEmptyField from "../utility/CheckEmptyField";
import WarningToast from "../utility/WarningToast";

const ResultModalContainer = ({ formData, setFormData, setData, rowData }) => {
  const updateResult = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/result/${rowData._id}`,
        formData
      );
      return data;
    } catch (err) {
      ErrorToast("Server Error. Try Again");
    }
  };
  const handleModalBtn = async () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField(formData);
    if (!isAllFieldFilled) {
      WarningToast(`Please enter ${SentenceCase(emptyField)} subject marks.`);
      return;
    }
    const { success, message, data } = await updateResult();
    if (success) {
      SuccessToast(message ?? "Successfull");
      setData(data);
    } else {
      ErrorToast(message);
    }
  };
  return (
    <dialog id="my_modal_4" className="modal ">
      <div className="modal-box w-11/12 max-w-5xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        {rowData && (
          <>
            <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-4 shadow-md mb-3 mt-7 ">
              <div className="grid grid-cols-4 justify-between w-full">
                <h1 className="col-span-1 text-base font-semibold text-gray-700">
                  Reg. No. :
                  <span className="px-2 font-medium text-gray-600">
                    {rowData.regNo}
                  </span>
                </h1>
                <h1 className="col-span-1 text-base font-semibold text-gray-700">
                  Name :
                  <span className="px-2 font-medium text-gray-600">
                    {rowData.name}
                  </span>
                </h1>
                <h1 className="col-span-1 text-base font-semibold text-gray-700">
                  Father Name :
                  <span className="px-2 font-medium text-gray-600">
                    {rowData.fatherName}
                  </span>
                </h1>
                <h1 className="col-span-1 text-base font-semibold text-gray-700">
                  Roll No. :
                  <span className="px-2 font-medium text-gray-600">
                    {rowData.rollNo}
                  </span>
                </h1>
              </div>
              <hr />
              <div className="w-full grid grid-cols-2 gap-5 ">
                {formData &&
                  Object.keys(formData).map((elem, index) => {
                    const curr = SentenceCase(elem);
                    return (
                      <InputComponent
                        label={`${curr} Marks`}
                        key={index}
                        placeholder={`Enter ${curr} Marks`}
                        inputType={"text"}
                        isResult={true}
                        field={elem}
                        formData={formData}
                        setFormData={setFormData}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className=" bg-black text-white px-7 text-base py-2"
                  onClick={handleModalBtn}
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
};

export default ResultModalContainer;
