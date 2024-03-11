import React from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import SuccessStoriesContainer from "../../Components/Frontend/SuccessStoriesContainer";
import Footer from "../../Components/Frontend/Footer";

const SuccessStories = () => {
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <SuccessStoriesContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SuccessStories;
