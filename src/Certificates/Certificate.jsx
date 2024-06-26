import React from "react";
import dateFormat from "dateformat";
const Certificate = React.forwardRef(({ data }, ref) => {
  const {
    name,
    fatherName,
    dob,
    regNo,
    rollNo,
    year,
    firstLanguage,
    secondLanguage,
    option1,
    option2,
    option3,
    option4,
    option5,
    sLNoArr,
  } = data;
  const issueDate = () => {
    let date;
    if (year >= 2024) {
      date = new Date(`${year}-05-15`);
      const day = date.getDay();
      if (day === 0) {
        return `${year}-05-16`;
      }
      return `${year}-05-15`;
    }
    date = new Date(`${year}-06-16`);
    const day = date.getDay();
    if (day === 0) {
      return `${year}-06-16`;
    }
    return `${year}-06-15`;
  };
  return (
    <div ref={ref} className="w-full h-full pt-[80px] px-[85px]">
      <style type="text/css" media="print">
        {
          "\
     @page { size: portrait; }\
  "
        }
      </style>
      <h1 className="text-[16px] font-extrabold text-end">
        {sLNoArr?.certificate ?? "7168"}
      </h1>
      <div className="pt-[350px] px-8">
        <div className="flex flex-col w-full gap-1 justify-start text-lg">
          <div className="text-[15px] font-semibold">
            This is to certify that
            <span className="text-[16px] font-bold  uppercase px-2">
              {name}
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Roll No.
            <span className="text-[15px] font-bold uppercase px-[102px]">
              {rollNo}
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Registration No.
            <span className="text-[15px] font-bold uppercase px-10">
              {regNo}
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Son/Daughter of Shri.
            <span className="text-[15px] font-bold uppercase px-2">
              {fatherName}
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            Born on
            <span className="text-[15px] font-bold uppercase px-3">
              {dateFormat(dob, "dd mmm yyyy")}
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            passed the Secondary School Examination of the Board held in
            <span className="text-[15px] font-bold px-3">
              {year >= 2024 ? `May ${year}` : `June ${year} `}
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            from
            <span className="text-[15px] font-bold px-3">
              Navin Bharti Senior Secondary School
            </span>
          </div>
          <div className="text-[15px] font-semibold">
            in the following subjects:
          </div>
        </div>
        <div className="mt-2 border-2 border-gray-500 flex flex-col  w-full pt-[2px] pb-[2px]">
          <div
            className="grid gap-[2px]"
            style={{ gridTemplateColumns: "50% 20% 29%" }}
          >
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              {firstLanguage}
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              {secondLanguage}
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              {option1}
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              {option2}
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              {option3}
            </h1>
            <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
              {option4}
            </h1>
            {option5 && (
              <>
                <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center">
                  Computer Science
                </h1>
                <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center border-r-0">
                  &nbsp;
                </h1>
                <h1 className="uppercase text-[15px] font-bold  border-2 border-gray-700 text-center border-l-0">
                  &nbsp;
                </h1>
              </>
            )}
          </div>
        </div>
      </div>
      <h1 className="text-[17px] font-bold pt-[178px] px-[148px]">
        {dateFormat(issueDate(), "dd mmm yyyy")}
      </h1>
    </div>
  );
});

export default Certificate;
