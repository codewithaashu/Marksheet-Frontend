import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-300 w-100 py-10 flex flex-col items-center mt-5 gap-[6px]">
        <div className=" flex flex-row">
          <Link
            to="/"
            className="text-[13px] font-medium px-2 border-r-[1px] border-gray-600"
          >
            Home
          </Link>
          <Link
            to="/departments"
            className="text-[13px] font-medium px-2 border-r-[1px] border-gray-600"
          >
            Departments
          </Link>
          <Link
            to="/examination"
            className="text-[13px] font-medium px-2 border-r-[1px] border-gray-600"
          >
            Examination
          </Link>
          <Link to="/contactus" className="text-[13px] font-medium px-2 ">
            Contact Us
          </Link>
        </div>
        <div className="text-sm font-medium">
          Copyright ? Rural Institute of Open Schooling. All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
