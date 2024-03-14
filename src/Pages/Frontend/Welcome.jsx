import React, { useEffect } from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import Footer from "../../Components/Frontend/Footer";
import WelcomeContainer from "../../Components/Frontend/WelcomeContainer";

const Welcome = () => {
  useEffect(() => {
    document.getElementById("title").innerText = "Welcome | CSSE";
  }, []);
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <WelcomeContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Welcome;
