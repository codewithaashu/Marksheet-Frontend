import React from "react";

const Migration = React.forwardRef(({ data }, ref) => {
  const { name, fatherName, regNo, rollNo, year } = data;
  return (
    <div ref={ref} className="w-full h-full pt-[60px] px-32">
      <style type="text/css" media="print">
        {
          "\
 @page { size: landscape; }\
"
        }
      </style>
      <h1 className="text-[16px] font-extrabold text-end px-6">7168</h1>
      <div className="pt-80 ">
        <div className="text-sm font-semibold">
          This is certify that
          <span className="text-base font-bold uppercase px-[5px]">{name}</span>
          Registration No.
          <span className="text-base font-bold uppercase px-[5px]">
            {regNo}
          </span>
          Roll No.
          <span className="text-base font-bold uppercase px-[5px]">
            {rollNo}
          </span>
          Son/Daughter of Shri.
          <span className="text-base font-bold uppercase px-[5px]">
            {fatherName}
          </span>
          Student of
          <span className="text-base font-bold px-[5px]">
            Navin Bharti Senior Secondary School
          </span>
          an institute affliated with the board has been registered in the
          <span className="text-base font-bold uppercase px-[5px]">{year}</span>
          Secondary Examination of the board.
          <h1 className="py-3">
            The board has no objection in his/her joining any recognised
            College/Institute or taking examination of any University or Board
            established by law.{" "}
          </h1>
        </div>
      </div>
      <h1 className="text-[17px] font-extrabold pt-[120px] px-16">
        15 Jun 2013
      </h1>
    </div>
  );
});

export default Migration;
