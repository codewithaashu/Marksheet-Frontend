import React, { useState } from "react";
import InputComponent from "./InputComponent";
import WarningToast from "../utility/WarningToast";
import CheckEmptyField from "../utility/CheckEmptyField";
import ErrorToast from "../utility/ErrorToast";
import axios from "axios";
import SuccessToast from "../utility/SuccesToast";

const ChangePasswordBox = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const changePassword = async () => {
    try {
      const id = localStorage.getItem("id");
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/changePassword/${id}`,
        formData
      );
      return data;
    } catch (err) {
      ErrorToast("Server error. Please try again later.");
    }
  };
  const handleChangePassword = async () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField(formData);
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field . Plese fill it`);
      return;
    }
    const { newPassword, confirmPassword } = formData;
    if (newPassword !== confirmPassword) {
      WarningToast("Password and Confirm Password are not same.");
      return;
    }
    const { message, success } = await changePassword();
    if (success) {
      SuccessToast(message ?? "Successfull");
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      ErrorToast(message);
    }
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">Change Password</h1>
      <div className="bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-3 w-1/2 self-center ">
        <InputComponent
          label={"Current Password"}
          placeholder={"Type Current Password Here ..."}
          inputType={"text"}
          field={"currentPassword"}
          formData={formData}
          setFormData={setFormData}
        />
        <InputComponent
          label={"New Password"}
          placeholder={"Type New Password Here ..."}
          inputType={"text"}
          field={"newPassword"}
          formData={formData}
          setFormData={setFormData}
        />
        <InputComponent
          label={"Confirm New Password"}
          placeholder={"Type Confirm Password Here ..."}
          inputType={"text"}
          field={"confirmPassword"}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          className="px-10 py-2 text-white bg-blue w-fit self-center rounded-sm mt-5 text-base font-medium"
          onClick={handleChangePassword}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordBox;
