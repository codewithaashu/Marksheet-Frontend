import axios from "axios";
import React, { useRef, useState } from "react";
import ErrorToast from "../utility/ErrorToast";
import courses from "../DB/CoursesDB";
import Select from "react-select";
import Certificate from "../DB/Certificates";
import SelectComponent from "./SelectComponent";
import Certificates from "../DB/Certificates";
import ReactPrintDoc from "../utility/ReactPrintDoc";
const PrintDocumentsContainer = () => {
  const resultInputRef = useRef();
  const certificateInputRef = useRef();
  const [studentsList, setStudentsList] = useState(null);
  const [formData, setFormData] = useState({
    course: "",
    studentID: "",
    certificateType: "",
    issueDate: `${new Date().getFullYear()}-06-15`,
  });

  const handleSelectCourse = async (val) => {
    try {
      setFormData({ ...formData, course: val });
      const course =
        val === "Secondary Examination(10th Class)"
          ? "Secondary"
          : "HigherSecondary";
      const {
        data: { data },
      } = await axios.get(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/courseStudent/${course}`
      );
      const newArr = data.map((curr, index) => {
        return {
          value: curr,
          label: `${curr.regNo}, ${curr.name}`.toString(),
        };
      });
      setStudentsList(newArr);
    } catch (err) {
      ErrorToast("Server Error. Try again later.");
    }
  };
  const handleSelectStudent = (v) => {
    setFormData({ ...formData, studentID: v._id });
  };
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-600">Print Documents</h1>
      <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-5  shadow-md mb-3 mt-3 ">
        <div className="flex flex-row items-center justify-between px-3">
          <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
            Course
          </h1>
          <select
            className="select select-bordered w-10/12  bg-white text-gray-800 font-normal focus:outline-none"
            defaultValue={""}
            onChange={(e) => handleSelectCourse(e.target.value)}
            ref={resultInputRef}
          >
            <option disabled value={""}>
              Select Your Course
            </option>
            {courses.map((curr, index) => {
              return (
                <option value={curr} key={index}>
                  {curr}
                </option>
              );
            })}
          </select>
        </div>
        {formData.course &&
          (!studentsList ? (
            <div className="self-center ">
              <span className="loading loading-spinner loading-lg bg-red-500"></span>
            </div>
          ) : (
            <>
              <div className="flex flex-row items-center justify-between px-3">
                <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
                  Student Name
                </h1>
                <Select
                  options={studentsList}
                  placeholder="Select Student"
                  menuPlacement="top"
                  onChange={(v) => handleSelectStudent(v.value)}
                  className="w-10/12  bg-white  text-[14px]  border-gray-400 outline-none rounded-sm text-gray-700 "
                  styles={{
                    control: (baseStyles) => ({
                      ...baseStyles,
                      borderColor: "black",
                      borderWidth: "1px",
                      color: "black",
                      padding: "4px 2px",
                    }),
                  }}
                />
              </div>
              <div className="flex flex-row items-center justify-between px-3 ">
                <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
                  Certificate Type
                </h1>
                <select
                  className="select  w-10/12  h-fit p-2 bg-white text-base border-[1px] border-gray-400 outline-none rounded-sm text-gray-700 focus:outline-none"
                  defaultValue={""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificateType: e.target.value,
                    })
                  }
                  ref={certificateInputRef}
                >
                  <option disabled value={""}>
                    Select Certificate type
                  </option>
                  {Certificates.map((curr, index) => {
                    return (
                      <option value={curr} key={index}>
                        {curr}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-row items-center justify-between px-3 ">
                <h1 className="text-base font-medium text-gray-600 px-5 w-fit">
                  Issue Date
                </h1>
                <input
                  type="date"
                  value={formData.issueDate}
                  className={`file-input w-10/12  h-fit p-2 bg-white text-sm border-[1px] border-gray-400 text-gray-700 focus:outline-none placeholder:text-sm`}
                  placeholder="Enter issue date"
                  onChange={(e) => {
                    setFormData({ ...formData, issueDate: e.target.value });
                  }}
                />
              </div>
            </>
          ))}
        <div className="self-center">
          <ReactPrintDoc
            formData={formData}
            setFormData={setFormData}
            resultInputRef={resultInputRef}
          />
        </div>
      </div>
    </div>
  );
};

export default PrintDocumentsContainer;
