import React from "react";
import InputComponent from "./InputComponent";
import WarningToast from "../utility/WarningToast";
import SuccessToast from "../utility/SuccesToast";
import ErrorToast from "../utility/ErrorToast";
import axios from "axios";

const AdminModalContainer = ({ formData, setFormData, setData }) => {
  const updateDetails = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/admin/${formData._id}`,
        formData
      );
      setData(data.data);
      return data;
    } catch (err) {
      ErrorToast("Server Error. Try Again");
    }
  };
  const handleModalBtn = async () => {
    if (!formData.userType || !formData.email) {
      WarningToast("Please fill all required fields.");
      return;
    }
    const { success, message } = await updateDetails();
    if (success) {
      SuccessToast(message ?? "Successfull");
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
        <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-4 shadow-md mb-3 mt-7 ">
          <div className="flex flex-row justify-between w-full">
            <h1 className="col-span-1 text-base font-semibold text-gray-700">
              Username :
              <span className="px-2 font-medium text-gray-600">
                {formData.username}
              </span>
            </h1>
            <h1 className="col-span-1 text-base font-semibold text-gray-700">
              Name:
              <span className="px-2 font-medium text-gray-600">
                {formData.name}
              </span>
            </h1>
          </div>
          <hr />
          <div className="w-full flex flex-col gap-5 ">
            <InputComponent
              label={"Name"}
              inputType={"text"}
              field={"name"}
              formData={formData}
              setFormData={setFormData}
              placeholder={"Enter Name Here..."}
            />
            <InputComponent
              label={"Email"}
              inputType={"email"}
              field={"email"}
              formData={formData}
              setFormData={setFormData}
              placeholder={"Enter Email Here..."}
            />
            <InputComponent
              label={"Change Password"}
              inputType={"password"}
              field={"password"}
              formData={formData}
              setFormData={setFormData}
              placeholder={"Enter Password Here..."}
            />
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
      </div>
    </dialog>
  );
};

export default AdminModalContainer;
