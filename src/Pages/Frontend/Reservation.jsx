import React from "react";
import Header from "../../Components/Frontend/Header";
import SideBar from "../../Components/Frontend/SideBar";
import ReservationContainer from "../../Components/Frontend/ReservationContainer";
import Footer from "../../Components/Frontend/Footer";

const Reservation = () => {
  return (
    <>
      <div className="flex flex-col gap-1 bg-base-100">
        <Header />
        <div className="flex flex-row gap-8 p-8 justify-center">
          <SideBar />
          <ReservationContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Reservation;
