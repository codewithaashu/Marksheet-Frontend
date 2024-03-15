import React, { useEffect, useRef, useState } from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import years from "../DB/Years";
import LanguageComponent from "./LanguageComponent";
import OptionalSubjectComponent from "./OptionalSubjectComponent";
import {
  artsSubjects,
  commerceSubjects,
  scienceSubjects,
  secondoryOptionalSubjects,
} from "../DB/SubjectsDB";
import axios from "axios";
import ErrorToast from "../utility/ErrorToast";
import WarningToast from "../utility/WarningToast";
import SuccessToast from "../utility/SuccesToast";
import CheckEmptyField from "../utility/CheckEmptyField";
import StreamComponent from "./StreamComponent";
import streams from "../DB/StreamDB";
const StudentModalContainer = ({ formData, setFormData, setData }) => {
  const genderInputRef = useRef();
  const modeOfResultInputRef = useRef();
  const yearInputRef = useRef();
  const dobInputRef = useRef();
  const fileInputRef = useRef();
  const streamInputRef = useRef();
  const [userType, setUserType] = useState(null);
  const [stream, setStream] = useState(null);
  useEffect(() => {
    genderInputRef.current.value = formData.gender;
    yearInputRef.current.value = formData.year;
    dobInputRef.current.value = formData.dob;
    modeOfResultInputRef.current.value = formData.modeOfResult;
    setUserType(localStorage.getItem("userType"));
  }, [formData]);
  const seniorSecondary = () => {
    if (formData.stream === "Science") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={scienceSubjects}
          seniorSecondary={true}
          stream={formData.stream}
          isMarks={true}
        />
      );
    } else if (formData.stream === "Commerce") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={commerceSubjects}
          seniorSecondary={true}
          stream={formData.stream}
          isMarks={true}
        />
      );
    }
    return (
      <OptionalSubjectComponent
        formData={formData}
        setFormData={setFormData}
        secondoryOptionalSubjects={artsSubjects}
        seniorSecondary={true}
        stream={formData.stream}
        isMarks={true}
      />
    );
  };
  const updateDetails = async () => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/student/${formData._id}${
          userType === "Admin"
            ? `?username=${localStorage.getItem("username")}`
            : ""
        }`,
        formData
      );
      setData(data.data);
      return data;
    } catch (err) {
      ErrorToast("Server Error. Try Again");
    }
  };
  const handleModalBtn = async () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField({
      imgSrc: formData.imgSrc,
      name: formData.name,
      dob: formData.dob,
      gender: formData.gender,
      fatherName: formData.fatherName,
      motherName: formData.motherName,
      year: formData.year,
      modeOfResult: formData.modeOfResult,
    });
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field.`);
      return;
    }
    const { success, message } = await updateDetails();
    if (success) {
      fileInputRef.current.value = "";
      SuccessToast(message ?? "Successfull");
      window.location.reload();
    } else {
      ErrorToast(message);
    }
  };

  const handleFileInput = async (file) => {
    try {
      if (!file) return;
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "shreyasingh");
      const resp = await axios.post(
        `${process.env.REACT_APP_CLOUDINARY_BASE_URL}/image/upload`,
        data,
        {
          reportProgress: true,
        }
      );

      setFormData({ ...formData, imgSrc: resp.data.url });
    } catch (err) {
      ErrorToast("File is not upload. Try again later.");
    }
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal ">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                window.location.reload();
              }}
            >
              ✕
            </button>
          </form>
          <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-7 ">
            <div className="flex flex-col gap-1 ">
              <h1 className="text-base font-medium text-gray-500">
                Mode of Result
              </h1>
              <select
                className="select  w-full  h-fit p-2 bg-white text-base border-[1px] border-gray-400 outline-none rounded-sm text-gray-700 focus:outline-none"
                defaultValue=""
                onChange={(e) =>
                  setFormData({ ...formData, modeOfResult: e.target.value })
                }
                ref={modeOfResultInputRef}
              >
                <option disabled value={""}>
                  Select Mode of Result
                </option>
                {["Online", "Offline"].map((curr, index) => {
                  return (
                    <option value={curr} key={index}>
                      {curr}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[15px] font-medium text-gray-600">
                Student Photo
              </h1>
              <input
                type="file"
                className={`file-input w-full h-fit p-2 bg-white text-sm border-[1px] border-gray-400 text-gray-700 focus:outline-none placeholder:text-sm`}
                onChange={(e) => handleFileInput(e.target.files[0])}
                ref={fileInputRef}
              />
            </div>
            <InputComponent
              label="Student Name"
              inputType="text"
              placeholder="Enter Student Name"
              field={"name"}
              formData={formData}
              setFormData={setFormData}
            />
            <div className="flex flex-col gap-1 ">
              <h1 className="text-[15px] font-medium text-gray-600">
                Date of Birth
              </h1>
              <input
                type={"date"}
                className={`file-input w-full  h-fit p-2 bg-white text-sm border-[1px] border-gray-400 text-gray-700 focus:outline-none placeholder:text-sm`}
                placeholder="Enter Date of Birth"
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
                ref={dobInputRef}
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <h1 className="text-base font-medium text-gray-500">Gender</h1>
              <select
                className="select  w-full  h-fit p-2 bg-white text-base border-[1px] border-gray-400 outline-none rounded-sm text-gray-700 focus:outline-none"
                defaultValue=""
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                ref={genderInputRef}
              >
                <option disabled value={""}>
                  Select Gender
                </option>
                {["Male", "Female"].map((curr, index) => {
                  return (
                    <option value={curr} key={index}>
                      {curr}
                    </option>
                  );
                })}
              </select>
            </div>
            <InputComponent
              label="Father Name"
              inputType="text"
              placeholder="Enter Student's Father Name"
              field={"fatherName"}
              formData={formData}
              setFormData={setFormData}
            />
            <InputComponent
              label="Mother Name"
              inputType="text"
              placeholder="Enter Student's Mother Name"
              field={"motherName"}
              formData={formData}
              setFormData={setFormData}
            />

            <SelectComponent
              label="Year"
              data={years}
              defaultValue="Select Registration Year"
              field={"year"}
              setFormData={setFormData}
              formData={formData}
              yearInputRef={yearInputRef}
            />
            {formData.course === "SR. Secondary Examination(12th Class)" && (
              <>
                <StreamComponent
                  label="Stream"
                  data={streams}
                  defaultValue="Select Stream"
                  setStream={setStream}
                  stream={stream}
                  field={"stream"}
                  setFormData={setFormData}
                  formData={formData}
                  streamInputRef={streamInputRef}
                />
                {stream && (
                  <>
                    <LanguageComponent
                      formData={formData}
                      setFormData={setFormData}
                      isMarks={true}
                    />
                    <OptionalSubjectComponent
                      formData={formData}
                      setFormData={setFormData}
                      seniorSecondary={true}
                      stream={stream}
                      isMarks={true}
                    />
                  </>
                )}
              </>
            )}
            {userType === "Super Admin" &&
              (formData.course === "SR. Secondary Examination(12th Class)"
                ? formData?.result &&
                  !stream && (
                    <>
                      <LanguageComponent
                        formData={formData}
                        setFormData={setFormData}
                        isMarks={true}
                      />
                      {seniorSecondary()}
                    </>
                  )
                : formData?.result && (
                    <>
                      <LanguageComponent
                        formData={formData}
                        setFormData={setFormData}
                        isMarks={true}
                      />
                      <OptionalSubjectComponent
                        formData={formData}
                        setFormData={setFormData}
                        secondoryOptionalSubjects={secondoryOptionalSubjects}
                        seniorSecondary={false}
                        isMarks={true}
                      />
                    </>
                  ))}
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button
                className=" bg-black text-white px-7 text-base py-2"
                onClick={handleModalBtn}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default StudentModalContainer;
