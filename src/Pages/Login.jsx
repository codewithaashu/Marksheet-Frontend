import React, { useState } from "react";
import SelectComponent from "../Components/SelectComponent";
import { useNavigate } from "react-router-dom";
import CheckEmptyField from "../utility/CheckEmptyField";
import WarningToast from "../utility/WarningToast";
import axios from "axios";
import SuccessToast from "../utility/SuccesToast";
import ErrorToast from "../utility/ErrorToast";

const Login = () => {
  const [formData, setFormData] = useState({
    userType: "",
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const loginUser = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/login`,
        formData
      );
      return data;
    } catch (err) {
      const { data } = err.response;
      return data;
    }
  };
  const handleLogin = async () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField(formData);
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field.`);
      return;
    }
    const resp = await loginUser();
    if (resp.success) {
      SuccessToast(resp.message ?? "Successfull");
      setFormData({
        userType: "",
        username: "",
        password: "",
      });
      localStorage.setItem("username", resp.data.username);
      localStorage.setItem("id", resp.data._id);
      localStorage.setItem("userType", resp.data.userType);
      if (resp.data.userType === "Admin") {
        navigate("/admin/users/10th Class");
      } else {
        navigate("/admin/admins");
      }
    } else {
      ErrorToast(resp.message ?? "Server Error. Try Again");
    }
  };
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="bg-white w-11/12 md:w-1/4 px-7 py-10 rounded-md shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-black text-center mb-3">
          Login
        </h1>
        <SelectComponent
          label={"User Type"}
          data={["Admin", "Super Admin"]}
          defaultValue={"Select User Type"}
          field={"userType"}
          formData={formData}
          setFormData={setFormData}
        />
        <div className="flex flex-col gap-1">
          <h1 className="text-[15px] font-medium text-gray-600">Username</h1>
          <input
            type="text"
            value={formData.username}
            className={`file-input w-full  h-fit p-2 bg-white text-sm border-[1px] border-gray-800 text-gray-700 focus:outline-none placeholder:text-sm py-3`}
            placeholder="Enter Username Here..."
            onChange={(e) => {
              setFormData({ ...formData, username: e.target.value });
            }}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[15px] font-medium text-gray-600">Password</h1>
          <input
            type="password"
            value={formData.password}
            className={`file-input w-full  h-fit p-2 bg-white text-sm border-[1px] border-gray-800 text-gray-700 focus:outline-none placeholder:text-sm py-3`}
            placeholder="Enter Password Here..."
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
        </div>
        <button
          className="bg-blue py-2 text-white text-lg font-bold mt-5"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
