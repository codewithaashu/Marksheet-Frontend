import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import ChangePasswordBox from "../Components/ChangePasswordBox";
import { useLocation } from "react-router-dom";

const ChangePassword = () => {
  const [sideBar, setSideBar] = useState(true);
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex flex-row">
        <div className={`${sideBar ? "w-fit md:w-1/6" : "hidden"}`}>
          <SideBar
            sideBar={sideBar}
            setSideBar={setSideBar}
            pathname={pathname}
          />
        </div>
        <div className="flex-1">
          <Header sideBar={sideBar} setSideBar={setSideBar} />
          <ChangePasswordBox />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
