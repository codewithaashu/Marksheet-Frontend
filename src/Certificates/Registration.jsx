import React from "react";
import dateFormat from "dateformat";
const Registration = React.forwardRef(({ data }, ref) => {
  const {
    name,
    fatherName,
    regNo,
    firstLanguage,
    secondLanguage,
    option1,
    option2,
    option3,
    option4,
    option5,
    year,
  } = data;
  const issueDate = () => {
    const date = new Date(`${year}-06-15`);
    const day = date.getDay();
    if (day === 0) {
      return `${year}-04-16`;
    }
    return `${year}-04-15`;
  };
  return (
    <div ref={ref} className="w-full h-full pt-[33px] px-8">
      <style type="text/css" media="print">
        {
          "\
         @page { size: 210mm 297mm; }\
      "
        }
      </style>
      ;<h1 className="text-[16px] font-bold text-end px-[70px]">7168</h1>
      <div className="pt-[204px] px-[34px]">
        <div className="text-sm font-semibold">
          Certify that
          <span className="text-base font-bold uppercase px-[5px]">{name}</span>
          S/D/W of Shri
          <span className="text-base font-bold uppercase px-[5px]">
            {fatherName}
          </span>
          has been Registered in Secondary CSSE under The Provision of Relevent
          Regulations,His/Her Registration No. is
          <span className="text-base font-bold uppercase px-[5px]">
            {regNo}
          </span>
          <h1 className="py-1 text-base font-bold uppercase text-center">
            Subjects
          </h1>
          <div className="border-2 border-gray-500  w-full p-[2px] pb-0">
            <div className="uppercase text-sm font-semibold  border-2 border-gray-700 text-center">
              {`${firstLanguage}, ${secondLanguage}, ${option1}, ${option2}, ${option3}, ${option4},
              ${option5 ? option5 : ""}`}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[17px] font-bold pt-[72px] px-[134px]">
        {dateFormat(issueDate(), "dd mmm yyyy")}
      </h1>
    </div>
  );
});

export default Registration;
