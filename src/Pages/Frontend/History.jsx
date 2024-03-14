import React, { useEffect } from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import HistoryContainer from "../../Components/Frontend/HistoryContainer";
import Footer from "../../Components/Frontend/Footer";

const History = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "History | CSSE";
  }, []);
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <HistoryContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
