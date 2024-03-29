import React, { useEffect } from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import HighSchoolContainer from "../../Components/Frontend/HighSchoolContainer";
import Footer from "../../Components/Frontend/Footer";

const HighSchool = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "High School | CSSE";
  }, []);
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <HighSchoolContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HighSchool;
