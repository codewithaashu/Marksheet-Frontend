import React from "react";
import Icons from "../../DB/Frontend/Icons";
import { Link } from "react-router-dom";
import Logo from "../../assests/csseLogo.png";
const Header = () => {
  return (
    <>
      <div className="p-5 pb-1 bg-white  flex flex-col gap-3">
        <div className=" flex flex-row justify-around">
          <img src={Logo} alt="CSSE" className="w-[420px]" />
          <div className=" flex flex-row gap-2">
            {Icons.map((curr, index) => {
              return (
                <img src={curr} alt="Google" key={index} className="h-5" />
              );
            })}
          </div>
        </div>
        <div className="navbar  flex flex-row justify-center  text-black min-h-fit">
          <div className="navbar-center hidden lg:flex p-0">
            <ul className="menu menu-horizontal px-1 p-0 text-sm font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <details>
                  <summary>About Us</summary>
                  <ul className="p-2 bg-white text-black border-none">
                    <li>
                      <Link to="/history">History</Link>
                    </li>
                    <li>
                      <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                      <Link to="/chairmanMessage">Chairman Message</Link>
                    </li>
                    <li>
                      <Link to="/workplan">Work Plan</Link>
                    </li>
                    <li>
                      <Link to="/aims&Objective">Aims and Objectives</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/recognition">Recognition</Link>
              </li>
              <li>
                <details>
                  <summary>Programme</summary>
                  <ul className="p-2 bg-white text-black border-none">
                    <li>
                      <Link to="/highSchool">10th Class(High School)</Link>
                    </li>
                    <li>
                      <Link to="/intermediate">12th Class(Intermediate)</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/examination">Examination</Link>
              </li>
              <li>
                <details>
                  <summary>Informations</summary>
                  <ul className="p-2 bg-white text-black border-none">
                    <li>
                      <Link to="/reservation">Reservation</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="/admin">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
