import React from "react";
import GuideLines from "../../DB/Frontend/Guidelines";
import { Link } from "react-router-dom";
import HighSchoolSyllabus from "../../assests/Syllabus 10th- 10thSyllabus - CSSE.pdf";
import IntermediateSyllabus from "../../assests/Syllabus for High School & Intermediate Examination - CSSE.pdf";
import DuplicationMigrationForm from "../../assests/Duplication Migration Form.pdf";
import AdmissionForm from "../../assests/CSSE NEW APPLICATION FORM.pdf";
const SideBar = (index) => {
  return (
    <>
      <div className="bg-base-200 h-fit">
        <h1 className="bg-black text-white text-[17px] font-semibold px-3 py-[6px]">
          Guidelines
        </h1>
        <div className="shadow-lg border-[1px] border-gray-400">
          {GuideLines.map((curr, index) => {
            return (
              <div
                className="flex flex-row gap-2 items-center p-2 bg-base-200 border-b-[1px] border-gray-400 cursor-pointer hover:bg-base-300 w-[260px]"
                key={index}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-2 h-2 text-zinc-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
                {index === 0 ? (
                  <Link to="/hallTicket" className="text-[13px] font-medium ">
                    {curr}{" "}
                    <div className="badge bg-red-600 text-white text-sm font-medium">
                      New
                    </div>
                  </Link>
                ) : index === 5 ? (
                  <Link className="text-[13px] font-medium " to="/verify">
                    {curr}
                  </Link>
                ) : index === 1 ? (
                  <a
                    href={AdmissionForm}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium "
                  >
                    {curr}
                  </a>
                ) : index === 2 ? (
                  <a
                    href={HighSchoolSyllabus}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium "
                  >
                    {curr}
                  </a>
                ) : index === 3 ? (
                  <a
                    href={IntermediateSyllabus}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium "
                  >
                    {curr}
                  </a>
                ) : (
                  <a
                    href={DuplicationMigrationForm}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium "
                  >
                    {curr}
                  </a>
                )}
              </div>
            );
          })}
        </div>
        <h1 className="bg-black text-white text-[17px] font-semibold px-3 py-[6px]">
          Latest Updates
        </h1>
        <Link
          to="/result"
          className="flex flex-row gap-2 items-center p-2 bg-base-200 border-b-[1px] border-gray-400 cursor-pointer hover:bg-base-300 w-[260px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-2 h-2 text-zinc-400"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-[13px] font-medium ">
            Check Result{" "}
            <div className="badge bg-red-600 text-white text-sm font-medium">
              New
            </div>
          </h1>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
