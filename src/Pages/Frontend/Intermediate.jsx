import React, { useEffect } from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import IntermediateContainer from "../../Components/Frontend/IntermediateContainer";
import Footer from "../../Components/Frontend/Footer";

const Intermediate = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "Intermediate | CSSE";
  }, []);
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <IntermediateContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Intermediate;
