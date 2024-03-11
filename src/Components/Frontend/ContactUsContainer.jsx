import React from "react";

const ContactUsContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-[694px] px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] font-semibold border-b-[1px] border-gray-400">
            Contact Us
          </h1>
          <p className="text-xs font-semibold">
            <h1 className="text-[17px] font-semibold text-amber-700 pb-2">
              Board Office
            </h1>
            C-12, Ground Floor, Aruna Park, Near Vikas Marg Laxmi Nagar,
            Delhi-110092
          </p>
          <div className="flex flex-row w-3/4 justify-between my-5 text-base">
            <div className="flex flex-col gap-2 font-semibold">
              <h1>For General Enquiry</h1>
              <h1>FAX</h1>
              <h1>Department of Recognition</h1>
              <h1>Department of Academics</h1>
              <h1>Department of Verification</h1>
              <h1>Department of C.S & I.T</h1>
              <h1>Department of Equivalency</h1>
              <h1>Department of Publication</h1>
              <h1>Charity Cell </h1>
              <h1>Department of Inspection</h1>
            </div>
            <div className="flex flex-col gap-2 ">
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
              <h1> 011- 42123456</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsContainer;
