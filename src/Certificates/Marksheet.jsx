import React, { useEffect, useState } from "react";
import dateFormat from "dateformat";
import converter from "number-to-words";
const Marksheet = React.forwardRef(({ data }, ref) => {
  const [totalMarks, setTotalMarks] = useState(null);
  const {
    imgSrc,
    name,
    fatherName,
    dob,
    regNo,
    rollNo,
    course,
    year,
    firstLanguage,
    secondLanguage,
    option1,
    option2,
    option3,
    option4,
    option5,
    result: {
      lang1TheoryMarks,
      lang2TheoryMarks,
      lang1OralMarks,
      lang2OralMarks,
      opt1TheoryMarks,
      opt2TheoryMarks,
      opt3TheoryMarks,
      opt4TheoryMarks,
      opt5TheoryMarks,
      opt1OralMarks,
      opt2OralMarks,
      opt3OralMarks,
      opt4OralMarks,
      opt5OralMarks,
    },
  } = data;
  useEffect(() => {
    const theoryMarks = [
      lang1TheoryMarks,
      lang2TheoryMarks,
      opt1TheoryMarks,
      opt2TheoryMarks,
      opt3TheoryMarks,
      opt4TheoryMarks,
    ];
    const oralMarks = [
      lang1OralMarks,
      lang2OralMarks,
      opt1OralMarks,
      opt2OralMarks,
      opt3OralMarks,
      opt4OralMarks,
    ];
    if (option5) {
      oralMarks.push(opt5OralMarks);
      theoryMarks.push(opt5TheoryMarks);
    }
    const totalMarks = [];
    for (let i = 0; i < theoryMarks.length; i++) {
      let mark = parseInt(theoryMarks[i]) + parseInt(oralMarks[i]);
      totalMarks.push(mark);
    }
    setTotalMarks(totalMarks);
    return () => {
      setTotalMarks(null);
    };
    //eslint-disable-next-line
  }, []);
  const calculateTotalMarks = () => {
    return totalMarks?.reduce((accum, curr) => {
      return accum + curr;
    }, 0);
  };
  return (
    <div ref={ref} className="w-full h-full pt-20 px-[90px]">
      <style type="text/css" media="print">
        {
          "\
 @page { size: portrait; }\
"
        }
      </style>
      <div className="text-[16px] font-extrabold text-end">7168</div>
      <div className="pt-28">
        <div className="flex flex-row justify-end px-2">
          <img src={imgSrc} alt="Student" className="w-[95px] h-[110px]" />
        </div>
        <div className="flex flex-col pt-32 items-center text-lg font-semibold font-[roboto-medium]">
          <div className="flex flex-col gap-0 items-center">
            <div className="text-lg font-semibold font-[roboto-medium] uppercase">
              {course}
            </div>
            <div className="text-base font-semibold font-[roboto-medium]">
              June {year}
            </div>
          </div>
          <div className="pt-10 w-full flex flex-col">
            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row gap-5">
                <div className="flex flex-col text-sm  gap-2">
                  <div>NAME</div>
                  <div>FATHERS NAME</div>
                  <div>D.O.B</div>
                  <div>SCHOOL/CENTRE</div>
                </div>
                <div className="flex flex-col  text-sm  gap-2">
                  <div className="uppercase">{name}</div>
                  <div className="uppercase">{fatherName}</div>
                  <div>{dateFormat(dob, "dd mmm yyyy")}</div>
                  <div>Navin Bharati Senior Secondary School</div>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col  text-sm  gap-2">
                  <div>REG. NO</div>
                  <div>ROLL NO.</div>
                </div>
                <div className="flex flex-col  text-sm  gap-2">
                  <div>{regNo}</div>
                  <div>{rollNo}</div>
                </div>
              </div>
            </div>
            <div className="border-2 border-gray-500 mt-[6px] p-[2px]">
              <div className="flex flex-row text-xs text-center gap-[4px] ">
                <div className="flex flex-col gap-[2px] w-[6%]">
                  <div className="h-[58px] flex flex-col justify-center px-2 border-2 border-gray-700">
                    <div>S.No</div>
                  </div>
                  <div className="border-2 border-gray-700 flex flex-col gap-2 px-4">
                    {totalMarks?.map((curr, index) => {
                      return <div key={index}>{index + 1}</div>;
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] w-[33%]">
                  <div className="h-[58px] flex flex-col justify-center px-2 border-2 border-gray-700">
                    Subject
                  </div>
                  <div className="border-2 border-gray-700 flex flex-col gap-2 px-0">
                    <div>{firstLanguage}</div>
                    <div>{secondLanguage}</div>
                    <div>{option1}</div>
                    <div>{option2}</div>
                    <div>{option3}</div>
                    <div>
                      {course === "Secondary Examination(10th Class)"
                        ? option4
                        : `${option4} [Opt]`}
                    </div>
                    {option5 && <div>{option5}</div>}
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex flex-col gap-[2px]">
                    <div className="border-2 border-gray-700">
                      Marks Obtained
                    </div>
                    <div className="flex flex-row gap-[2px] w-full">
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <div className="border-2 border-gray-700">
                          Full <br />
                          Marks
                        </div>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          {totalMarks?.map((curr, index) => {
                            return <div key={index}>100</div>;
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <div className="h-[36px] flex flex-col justify-center border-2 border-gray-700 ">
                          Theory
                        </div>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          <div>{lang1TheoryMarks}</div>
                          <div>{lang2TheoryMarks}</div>
                          <div>{opt1TheoryMarks}</div>
                          <div>{opt2TheoryMarks}</div>
                          <div>{opt3TheoryMarks}</div>
                          <div>{opt4TheoryMarks}</div>
                          {course === "Secondary Examination(10th Class)" && (
                            <div>{opt5TheoryMarks}</div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <div className="h-[36px] flex flex-col justify-center border-2 border-gray-700">
                          Oral
                        </div>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          <div>
                            {lang1OralMarks === 0 ? "-" : lang1OralMarks}
                          </div>
                          <div>
                            {lang2OralMarks === 0 ? "-" : lang2OralMarks}
                          </div>
                          <div>{opt1OralMarks === 0 ? "-" : opt1OralMarks}</div>
                          <div>{opt2OralMarks === 0 ? "-" : opt2OralMarks}</div>
                          <div>{opt3OralMarks === 0 ? "-" : opt3OralMarks}</div>
                          <div>{opt4OralMarks === 0 ? "-" : opt4OralMarks}</div>
                          {course === "Secondary Examination(10th Class)" && (
                            <div>
                              {opt5OralMarks === 0 ? "-" : opt5OralMarks}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] w-[17%]">
                        <div className="h-[36px] flex flex-col justify-center border-2 border-gray-700">
                          Total
                        </div>
                        <div className="border-2 border-gray-700 flex flex-col gap-2">
                          {totalMarks?.map((curr, index) => {
                            return <div key={index}>{curr}</div>;
                          })}
                        </div>
                      </div>
                      <div className="flex flex-col gap-[2px] flex-1">
                        <div className="h-[36px] flex flex-col justify-center border-2 border-gray-700">
                          Total in Words
                        </div>
                        <div className="border-2 border-gray-700 flex flex-col gap-2 px-2">
                          {totalMarks?.map((curr, index) => {
                            return (
                              <div key={index}>{converter.toWords(curr)}</div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[2px] w-[8%]">
                  <div className="h-[58px] flex flex-col justify-center border-2 border-gray-700">
                    Grade
                  </div>
                  <div
                    className={`border-2 
                   ${
                     course === "Secondary Examination(10th Class)"
                       ? "h-[164px]"
                       : "h-[140px]"
                   } border-gray-700 justify-center flex flex-col`}
                  >
                    <div>A</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row w-full text-xs font-semibold mt-[3px] gap-[3px]">
                <div className="py-1 border-2 border-gray-700 w-[49%] text-center">
                  Grand Total:&nbsp;{calculateTotalMarks()}
                </div>
                <div className="py-1 border-2 border-gray-700 w-[26.5%] text-center">
                  Status: PASS
                </div>
                <div className="py-1 border-2 border-gray-700 flex-1 text-center w-[20%]">
                  Percentage(%):{" "}
                  {(calculateTotalMarks() / totalMarks?.length).toFixed(2)}
                </div>
              </div>
            </div>
            <div
              className="flex flex-col gap-0 text-[6px] font-normal mt-2"
              style={{ lineHeight: "7px" }}
            >
              <div>
                * MARKS IN EXCESS OF THE PASS MARKS ARE ADDED TO THE TOTAL OF A
                SUCCESSFUL CANDIDATE FOR DETERMINE DIVISION
              </div>
              <div>** FULL MARKS: 700 PASS MARKS: 231</div>
              <div>*** AB: ABSENT IN THE SUBJECT</div>
              <div>WWW.CSSE.CO.IN</div>
            </div>
            <div className="text-[16px] font-extrabold pt-24 px-28">
              16 Jun 2014
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Marksheet;
