import React from "react";
import dateFormat from "dateformat";
const AdmitCard = React.forwardRef(({ data }, ref) => {
  const {
    imgSrc,
    name,
    fatherName,
    dob,
    regNo,
    rollNo,
    firstLanguage,
    secondLanguage,
    option1,
    option2,
    option3,
    option4,
    option5,
    gender,
  } = data;
  return (
    <div ref={ref} className="w-full h-full pt-[66px] px-[90px]">
      <style type="text/css" media="print">
        {
          "\
 @page { size:A5; }\
"
        }
      </style>
      <h1 className="text-[16px] font-extrabold text-end">7168</h1>
      <div className="pt-16">
        <div className="flex flex-row justify-end px-2">
          <img src={imgSrc} alt="Student" className="w-[95px] h-[110px]" />
        </div>
        <div className="flex flex-col pt-12  text-base font-semibold font-[roboto-medium]">
          <div className="grid grid-cols-2 w-full gap-40">
            <div className="flex flex-row items-center gap-5">
              <h1 className="text-sm font-normal">
                Registration <br /> No.
              </h1>
              <h1 className="text-base font-semibold font-[roboto-medium]">
                {regNo}
              </h1>
            </div>
            <div className="flex flex-row items-center gap-5">
              <h1 className="text-sm font-normal">Roll No.</h1>
              <h1 className="text-base font-semibold font-[roboto-medium]">
                {rollNo}
              </h1>
            </div>
          </div>
          <div className="flex flex-row pt-6 w-full gap-5">
            <div className="flex flex-col gap-2 min-w-fit">
              <h1 className="text-sm font-normal ">CANDIDATE NAME</h1>
              <h1 className="text-sm font-normal">DATE OF BIRTH</h1>
              <h1 className="text-sm font-normal">SEX</h1>
              <h1 className="text-sm font-normal">FATHER'S NAME</h1>
              <h1 className="text-sm font-normal">CENTRE NAME</h1>
            </div>
            <div className="flex flex-col gap-2 min-w-fit">
              <h1 className="text-sm font-[roboto-medium] uppercase">{name}</h1>
              <h1 className="text-sm  font-[roboto-medium] uppercase">
                {dateFormat(dob, "dd mmm yyyy")}
              </h1>
              <h1 className="text-sm font-[roboto-medium] uppercase">
                {gender}
              </h1>
              <h1 className="text-sm font-semibold font-[roboto-medium] uppercase">
                {fatherName}
              </h1>
              <h1 className="text-sm font-semibold font-[roboto-medium] ">
                Navin Bharti Senior Secondary School
              </h1>
            </div>
          </div>
          <div className="mt-3 border-2 border-gray-500 flex flex-col  w-full p-[2px]">
            <h1 className="border-2 border-gray-700 text-center text-sm font-semibold font-[roboto-medium] mb-[2px]">
              SUBJECTS
            </h1>
            <div
              className="grid gap-[2px]"
              style={{ gridTemplateColumns: "50% 20% 29.3%" }}
            >
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium] border-2 border-gray-700 text-center">
                {firstLanguage}
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                {secondLanguage}
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                {option1}
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                {option2}
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center ">
                {option3}
              </h1>
              <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                {option4}
              </h1>
              {option5 && (
                <>
                  <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center">
                    {option5}
                  </h1>
                  <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center border-r-0">
                    &nbsp;
                  </h1>
                  <h1 className="uppercase text-sm font-semibold font-[roboto-medium]  border-2 border-gray-700 text-center border-l-0">
                    &nbsp;
                  </h1>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default AdmitCard;
