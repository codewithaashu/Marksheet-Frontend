import React, { useState } from "react";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import ResultsContainer from "../Components/ResultsContainer";
import { useLocation } from "react-router-dom";

const Results = () => {
  const [sideBar, setSideBar] = useState(true);
  const { pathname } = useLocation();
  return (
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
        <ResultsContainer />
      </div>
    </div>
  );
};

export default Results;
