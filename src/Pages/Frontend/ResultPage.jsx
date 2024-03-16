import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dateFormat from "dateformat";
import PercentageGrade from "../../DB/Frontend/PercentageGrade";
const ResultPage = () => {
  const location = useLocation();
  const [studentResult, setStudentResult] = useState([]);
  const {
    course,
    imgSrc,
    dob,
    fatherName,
    name,
    regNo,
    rollNo,
    year,
    result,
    firstLanguage,
    secondLanguage,
    option1,
    option2,
    option3,
    option4,
    option5,
  } = location.state;
  const calculateMarks = () => {
    const totalMarks = studentResult.reduce((accum, curr) => {
      return parseInt(curr.theory) + parseInt(curr.oral) + accum;
    }, 0);
    return totalMarks;
  };
  useEffect(() => {
    const studentResult = [
      { theory: result.lang1TheoryMarks, oral: result.lang1OralMarks },
      { theory: result.lang2TheoryMarks, oral: result.lang2OralMarks },
      { theory: result.opt1TheoryMarks, oral: result.opt1OralMarks },
      { theory: result.opt2TheoryMarks, oral: result.opt2OralMarks },
      { theory: result.opt3TheoryMarks, oral: result.opt3OralMarks },
      { theory: result.opt4TheoryMarks, oral: result.opt4OralMarks },
    ];
    if (result.opt5TheoryMarks) {
      studentResult.push({
        theory: result.opt5TheoryMarks,
        oral: result.opt5OralMarks,
      });
    }
    setStudentResult(studentResult);
  }, []);
  return (
    <>
      <div className="backgroundLogo">
        <div className="w-full min-h-screen flex flex-row justify-center my-5">
          <div className="flex flex-col w-2/3 gap-2">
            <div className="border-[1px] border-gray-400 p-3 grid grid-cols-3  px-10 items-center">
              <div className="flex flex-col gap-2 justify-self-end col-span-2 items-center">
                <h1 className="text-2xl font-semibold">Online Marksheet</h1>
                <h1 className="text-lg font-medium uppercase">{course}</h1>
                <h1>June {year}</h1>
              </div>
              <img
                src={imgSrc}
                alt="Passport"
                className="w-[120px] h-[140px] justify-self-end"
              />
            </div>
            <div className="border-[1px] border-gray-400 p-3 grid grid-cols-3 px-10">
              <div className="flex flex-row justify-between col-span-2">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[13px] uppercase font-semibold">Name</h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    Father's Name
                  </h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    Date of Birth
                  </h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    School/Centre Name
                  </h1>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-[13px] uppercase font-semibold">
                    {name}
                  </h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    {fatherName}
                  </h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    {dateFormat(dob, "dd mmm yyyy")}
                  </h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    Navin Bharati Senior Secondary School
                  </h1>
                </div>
              </div>
              <div className="flex flex-row justify-self-end gap-10 col-span-1">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[13px]  font-semibold">Regd. No.</h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    Roll No.
                  </h1>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-[13px] uppercase font-semibold">
                    {regNo}
                  </h1>
                  <h1 className="text-[13px] uppercase font-semibold">
                    {rollNo}
                  </h1>
                </div>
              </div>
            </div>
            <div className="border-[1px] border-gray-400 p-3 grid grid-cols-5 px-10">
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-semibold uppercase py-1">
                  Subject
                </h1>
                <h1 className="text-sm font-medium uppercase">
                  {firstLanguage}
                </h1>
                <h1 className="text-sm font-medium uppercase">
                  {secondLanguage}
                </h1>
                <h1 className="text-sm font-medium uppercase">{option1}</h1>
                <h1 className="text-sm font-medium uppercase">{option2}</h1>
                <h1 className="text-sm font-medium uppercase">{option3}</h1>
                <h1 className="text-sm font-medium uppercase">{option4}</h1>
                {option5 && (
                  <h1 className="text-sm font-medium uppercase">{option5}</h1>
                )}
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-base font-semibold uppercase py-1">
                  Full Marks
                </h1>
                {studentResult.map((curr, index) => {
                  return (
                    <h1 className="text-sm font-medium uppercase" key={index}>
                      100
                    </h1>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-base font-semibold uppercase py-1">
                  Theory
                </h1>
                {studentResult.map((curr, index) => {
                  return (
                    <h1 className="text-sm font-medium uppercase" key={index}>
                      {curr.theory}
                    </h1>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-base font-semibold uppercase py-1">Oral</h1>
                {studentResult.map((curr, index) => {
                  return (
                    <h1 className="text-sm font-medium uppercase" key={index}>
                      {curr.oral === 0 ? "-" : curr.oral}
                    </h1>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-base font-semibold uppercase py-1">
                  Total
                </h1>
                {studentResult.map((curr, index) => {
                  return (
                    <h1 className="text-sm font-medium uppercase" key={index}>
                      {parseInt(curr.theory) + parseInt(curr.oral)}
                    </h1>
                  );
                })}
              </div>
            </div>
            <div className="border-[1px] border-gray-400 p-3  px-10">
              <div className="border-[1px] border-gray-400 p-2 flex flex-row justify-around w-1/3 ">
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-medium">Grand Total</h1>
                  <h1 className="text-sm font-medium">Grade</h1>
                  <h1 className="text-sm font-medium">Percentage(%)</h1>
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="text-sm font-medium">{calculateMarks()}</h1>
                  <h1 className="text-sm font-medium">
                    {
                      PercentageGrade(
                        parseInt(calculateMarks() / studentResult?.length)
                      ).scale
                    }{" "}
                    [
                    {
                      PercentageGrade(
                        parseInt(calculateMarks() / studentResult?.length)
                      ).description
                    }
                    ]
                  </h1>
                  <h1 className="text-sm font-medium">
                    {(calculateMarks() / studentResult?.length).toFixed(2)}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultPage;
