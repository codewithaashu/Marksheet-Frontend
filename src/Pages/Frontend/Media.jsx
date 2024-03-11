import React from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import Footer from "../../Components/Frontend/Footer";
import MediaContainer from "../../Components/Frontend/MediaContainer";

const Media = () => {
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <MediaContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Media;
