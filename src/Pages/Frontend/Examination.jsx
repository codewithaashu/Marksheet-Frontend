import React, { useEffect } from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import Footer from "../../Components/Frontend/Footer";
import ExaminationContainer from "../../Components/Frontend/ExaminationContainer";

const Examination = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "Examination | CSSE";
  }, []);
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <ExaminationContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Examination;
