import React from "react";

const GovtCertificateContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-[694px] px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] font-semibold border-b-[1px] border-gray-400">
            Govt. Certificates
          </h1>
          <div className="grid grid-cols-5 gap-x-5 items-center justify-center my-3">
            <a
              href="https://CSSE.ac.in/images-2/govt/CSSE_CERTIFICATE.jpg"
              target="_blank"
            >
              <img
                src="https://CSSE.ac.in/images-2/govt/CSSE_CERTIFICATE.jpg"
                alt="Certicate"
                width="125"
                height="150"
              />
            </a>
            <a
              href="https://CSSE.ac.in/images-2/govt/TradeMark.jpg"
              target="_blank"
            >
              <img
                src="https://CSSE.ac.in/images-2/govt/TradeMark.jpg"
                alt="Certicate"
                width="125"
                height="150"
              />
            </a>
            <a href="https://CSSE.ac.in/images-2/govt/TAN.jpg" target="_blank">
              <img
                src="https://CSSE.ac.in/images-2/govt/TAN.jpg"
                alt="Certicate"
                width="125"
                height="150"
              />
            </a>
            <a
              href="https://CSSE.ac.in/images-2/govt/PlanningCommission.jpg"
              target="_blank"
            >
              <img
                src="https://CSSE.ac.in/images-2/govt/PlanningCommission.jpg"
                alt="Certicate"
                width="125"
                height="150"
              />
            </a>
            <a
              href="https://CSSE.ac.in/images-2/govt/Trade_Mark.jpg"
              target="_blank"
            >
              <img
                src="https://CSSE.ac.in/images-2/govt/Trade_Mark.jpg"
                alt="Certicate"
                width="125"
                height="150"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GovtCertificateContainer;
