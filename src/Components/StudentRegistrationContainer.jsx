import React, { useRef, useState } from "react";
import years from "../DB/Years";
import {
  artsSubjects,
  commerceSubjects,
  scienceSubjects,
  secondoryOptionalSubjects,
} from "../DB/SubjectsDB";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import SelectCourse from "./SelectCourse";
import courses from "../DB/CoursesDB";
import StreamComponent from "./StreamComponent";
import streams from "../DB/StreamDB";
import LanguageComponent from "./LanguageComponent";
import OptionalSubjectComponent from "./OptionalSubjectComponent";
import ErrorToast from "../utility/ErrorToast";
import axios from "axios";
import CheckEmptyField from "../utility/CheckEmptyField";
import WarningToast from "../utility/WarningToast";
import SuccessToast from "../utility/SuccesToast";

const StudentRegistrationContainer = () => {
  const [course, setCourse] = useState(null);
  const [stream, setStream] = useState(null);
  const [formData, setFormData] = useState({
    imgSrc: "",
    name: "",
    dob: "",
    fatherName: "",
    motherName: "",
    year: "",
    course: "",
    stream: "",
    firstLanguage: "",
    secondLanguage: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    option5: "",
    result: {},
  });
  const fileInputRef = useRef();
  const yearInputRef = useRef();
  const courseInputRef = useRef();
  const streamInputRef = useRef();
  const seniorSecondary = () => {
    if (stream === "Science") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={scienceSubjects}
          seniorSecondary={true}
          stream={stream}
          isMarks={true}
        />
      );
    } else if (stream === "Commerce") {
      return (
        <OptionalSubjectComponent
          formData={formData}
          setFormData={setFormData}
          secondoryOptionalSubjects={commerceSubjects}
          seniorSecondary={true}
          stream={stream}
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
        stream={stream}
        isMarks={true}
      />
    );
  };
  const registerStudent = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_SERVER_BASE_URL}/api/student`,
        { ...formData, adminUsername: localStorage.getItem("username") }
      );
      return data;
    } catch (err) {
      ErrorToast("Server error. Try again later.");
    }
  };
  const handleSubmit = async () => {
    const { emptyField, isAllFieldFilled } = CheckEmptyField({
      ...formData,
      option5: "optional",
      stream: "optional",
    });
    if (!isAllFieldFilled) {
      WarningToast(`${emptyField} is required field.`);
      return;
    }
    const { message, success } = await registerStudent();
    if (success) {
      SuccessToast(message ?? "Successfull");
      setFormData({
        imgSrc: "",
        name: "",
        dob: "",
        fatherName: "",
        motherName: "",
        year: "",
        course: "",
        stream: "",
        firstLanguage: "",
        secondLanguage: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        option5: "",
      });
      fileInputRef.current.value = "";
      yearInputRef.current.value = "";
      courseInputRef.current.value = "";
      if (course === "SR. Secondary Examination(12th Class)") {
        streamInputRef.current.value = "";
      }
      setCourse(null);
      setStream(null);
    } else {
      ErrorToast(message ?? "Server Error. Try Again");
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
      <div className="p-5 flex flex-col gap-5 ">
        <h1 className="text-lg font-semibold text-gray-600">
          Registration Form
        </h1>
        <div className=" bg-white p-5 md:p-7 rounded-md flex flex-col gap-4  shadow-md mb-3 mt-3 ">
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
            isMarks={false}
          />
          <InputComponent
            label="Date of Birth"
            inputType="date"
            placeholder="Enter Date of Birth"
            field={"dob"}
            formData={formData}
            setFormData={setFormData}
            isMarks={false}
          />
          <InputComponent
            label="Father Name"
            inputType="text"
            placeholder="Enter Student's Father Name"
            field={"fatherName"}
            formData={formData}
            setFormData={setFormData}
            isMarks={false}
          />
          <InputComponent
            label="Mother Name"
            inputType="text"
            placeholder="Enter Student's Mother Name"
            field={"motherName"}
            formData={formData}
            setFormData={setFormData}
            isMarks={false}
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
          <SelectCourse
            label="Courses"
            data={courses}
            defaultValue="Select Course"
            setCourse={setCourse}
            field={"course"}
            setFormData={setFormData}
            formData={formData}
            courseInputRef={courseInputRef}
          />

          {course ? (
            course === "SR. Secondary Examination(12th Class)" ? (
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
                    {seniorSecondary()}
                  </>
                )}
              </>
            ) : (
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
            )
          ) : null}
          <button
            className="btn btn-outline btn-primary px-7 py-1 w-fit self-center mt-3 "
            onClick={handleSubmit}
          >
            Register Student
          </button>
        </div>
      </div>
    </>
  );
};

export default StudentRegistrationContainer;
