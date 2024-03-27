import React, { useState } from "react";
import InputComponent from "./InputComponent";
import axios from "axios";
import SuccessToast from "../utility/SuccesToast";
import ErrorToast from "../utility/ErrorToast";
import WarningToast from "../utility/WarningToast";
import CheckEmptyField from "../utility/CheckEmptyField";

const CreateAdminContainer = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const createAdmin = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/admin`,
        formData
      );
      setLoading(false);
      return data;
    } catch (err) {
      const { data } = err.response;
      return data;
    }
  };
  const handleSubmit = async () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField({
      ...formData,
      email: "optioanl",
    });
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field.`);
      return;
    }
    const { success, message } = await createAdmin();
    if (success) {
      SuccessToast(message ?? "Successfull");
      setFormData({
        username: "",
        name: "",
        email: "",
        password: "",
      });
    } else {
      ErrorToast(message ?? "Server Error. Try Again");
    }
  };
  return (
    <>
      <div className="p-5 flex flex-col gap-5 w-full h-screen">
        <h1 className="text-lg font-semibold text-gray-600">Create Admin</h1>
        {!loading ? (
          <div className="bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-3 self-center w-1/2 ">
            <InputComponent
              label={"Name"}
              placeholder={"Enter Name Here..."}
              inputType={"text"}
              formData={formData}
              setFormData={setFormData}
              field={"name"}
            />
            <InputComponent
              label={"Username"}
              inputType={"text"}
              field={"username"}
              formData={formData}
              setFormData={setFormData}
              placeholder={"Enter Username Here..."}
            />
            <InputComponent
              label={"Email"}
              inputType={"email"}
              field={"email"}
              formData={formData}
              setFormData={setFormData}
              placeholder={"Enter Email Here..."}
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-[15px] font-medium text-gray-600">
                Password
              </h1>
              <input
                type="password"
                value={formData.password}
                className={`file-input w-full h-fit p-2 bg-white text-sm border-[1px] border-gray-800 text-gray-700 focus:outline-none placeholder:text-sm py-3`}
                placeholder="Enter Password Here..."
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>
            <button
              className="bg-blue py-2 text-white text-lg font-bold mt-5"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="self-center py-10">
            <span className="loading loading-spinner loading-lg bg-blue"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateAdminContainer;
