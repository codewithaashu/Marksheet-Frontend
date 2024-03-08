import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ sideBar, setSideBar }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userType = localStorage.getItem("userType");
  const handleLogout = () => {
    navigate("/");
    localStorage.clear();
  };
  return (
    <div className="navbar bg-white shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setSideBar(!sideBar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="navbar-center">
        <p className=" text-xl font-semibold">Control Panel</p>
      </div>
    </div>
  );
};

export default Header;
