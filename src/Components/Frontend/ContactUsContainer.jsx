import React from "react";
import EnquiryForm from "./EnquiryForm";

const ContactUsContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-[694px] px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] font-semibold border-b-[1px] border-gray-400">
            Contact Us
          </h1>

          <EnquiryForm />
          <div className="flex flex-row justify-between mt-4 px-2 items-center">
            <p className="text-xs font-semibold">
              <h1 className="text-[17px] font-semibold text-amber-700 pb-2">
                Email
              </h1>
              <a
                href="mailto:info@csse.co.in"
                className="text-cyan-800 text-sm"
              >
                info@csse.co.in
              </a>
            </p>
            <p className="text-xs font-semibold">
              <h1 className="text-[17px] font-semibold text-amber-700 pb-2">
                Board Office
              </h1>
              E Block Preet Vihar, Defence Enclave, Preet Vihar, Delhi, 110092
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsContainer;
