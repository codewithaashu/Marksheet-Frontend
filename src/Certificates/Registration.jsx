import React from "react";

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
  } = data;
  return (
    <div ref={ref} className="w-full h-full pt-[60px] px-32">
      <style type="text/css" media="print">
        {
          "\
         @page { size: landscape; }\
      "
        }
      </style>
      ;<h1 className="text-[16px] font-extrabold text-end px-6">7168</h1>
      <div className="pt-80 ">
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
          <h1 className="py-3 text-base font-bold uppercase text-center">
            Subjects
          </h1>
          <div className="border-2 border-gray-500  w-full p-[2px]">
            <div className="uppercase text-sm font-semibold  border-2 border-gray-700 text-center">
              {`${firstLanguage}, ${secondLanguage}, ${option1}, ${option2}, ${option3}, ${option4},
              ${option5 ? option5 : ""}`}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[17px] font-extrabold pt-36 px-16">15 Jun 2013</h1>
    </div>
  );
});

export default Registration;
