import React, { useEffect } from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import WorkPlanContainer from "../../Components/Frontend/WorkPlanContainer";
import Footer from "../../Components/Frontend/Footer";

const WorkPlan = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "Work Plan | CSSE";
  }, []);
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <WorkPlanContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkPlan;
