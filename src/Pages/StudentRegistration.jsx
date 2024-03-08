import React, { useState } from "react";
import SideBar from "../Components/SideBar";
import Header from "../Components/Header";
import StudentRegistrationContainer from "../Components/StudentRegistrationContainer";
import { useLocation } from "react-router-dom";

const StudentRegistration = () => {
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
          <StudentRegistrationContainer />
        </div>
      </div>
    </>
  );
};

export default StudentRegistration;
