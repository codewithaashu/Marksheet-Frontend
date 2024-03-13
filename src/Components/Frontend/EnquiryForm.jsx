import React, { useState } from "react";
import InputComponent from "../InputComponent";
import CheckEmptyField from "../../utility/CheckEmptyField";
import WarningToast from "../../utility/WarningToast";
import axios from "axios";
import ErrorToast from "../../utility/ErrorToast";
import SuccessToast from "../../utility/SuccesToast";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const handleClick = async () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField({
      ...formData,
      email: "optional",
      phoneNumber: "optional",
    });
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field . Plese fill it`);
      return;
    }
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_BASE_URL}/api/message`,
      formData
    );
    console.log(data);
    if (!data.success) {
      ErrorToast(data.message);
      return;
    }
    SuccessToast(data.message);
    setFormData({ name: "", email: "", phoneNumber: "", message: "" });
  };
  return (
    <>
      <div className="w-full p-5 rounded-md border-2 border-gray-500 shadow-md flex flex-col gap-3 mt-4">
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
          label={"Phone Number"}
          inputType={"text"}
          field={"phoneNumber"}
          formData={formData}
          setFormData={setFormData}
          placeholder={"Enter Phone Number Here..."}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-[15px] font-medium text-gray-600">Message</h1>
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder="Enter Message Here ..."
            className=" w-full h-fit p-2 bg-white text-sm border-[1px] border-gray-800 text-gray-700 focus:outline-none placeholder:text-sm py-3 resize-none"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
          ></textarea>
          <button
            className="p-3 rounded-md text-base font-semibold bg-cyan-800 text-white w-fit  self-center my-3"
            onClick={handleClick}
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;
