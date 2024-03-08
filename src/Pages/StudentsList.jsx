import React, { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import HomeContainer from "../Components/HomeContainer";
import { useLocation, useParams } from "react-router-dom";

const StudentsList = () => {
  const [sideBar, setSideBar] = useState(true);
  const { pathname } = useLocation();
  const params = useParams();
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
          <HomeContainer course={params.id} />
        </div>
      </div>
    </>
  );
};

export default StudentsList;
