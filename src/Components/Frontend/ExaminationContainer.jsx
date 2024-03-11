import React from "react";

const ExaminationContainer = () => {
  return (
    <>
      <div className="flex flex-col gap-5 w-[694px] px-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-[28px] font-semibold border-b-[1px] border-gray-400">
            On Demand Schedule
          </h1>
          <p className="text-[15px] font-medium">
            <h1 className="text-[17px] font-semibold text-amber-700 pb-2">
              Features of the Scheme of On-Demand Exam
            </h1>
            Registration Branch of the RIOS has done the registration of the
            students at class X and XII and issue Registration Number. All type
            of corrections of the Registration certificate is dealt with by this
            branch.
            <ul className="list-disc px-10 flex flex-col gap-1 py-1">
              <li>No need to wait for the six-monthly term end examination.</li>
              <li>Choice of deciding the date of exam lies with students.</li>
              <li>
                Multilayer security system to maintain confidentiality and
                secrecy of the entire process.
              </li>
              <li>
                Students can register online for On-Demand Exam anytime from
                anywhere.
              </li>
              <li>
                Online issue of Hall Ticket mentioning the date, venue and time
                of examination.
              </li>
              <li>
                Multi-mode registration-fee payment system including online
                payment through Credit Card or payment through bank draft.
              </li>
              <li>
                Automated online clarification of doubts and information to the
                students.
              </li>
              <li>
                Individualized question papers for different students generated
                on the day of examination.
              </li>
              <li>
                Encryption of the Question papers immediately after their
                generation.
              </li>
              <li>
                Exam conducted under web-based closed circuit camera
                surveillance.
              </li>
              <li>Online submission of attendance on the day of exam.</li>
              <li>
                Online submission of the awards and marks by the examination
                superintendent.
              </li>
            </ul>
            <h1 className="text-[17px] font-semibold text-amber-700 py-2">
              Eligibility to Appear in On-Demand Exam
            </h1>
            Already registered student of RIOS for a programmer being offered by
            the Board, has the option to appear in the On-Demand Exam provided
            the student has completed the minimum eligibility time and has valid
            registration period. The eligible students can appear in the
            examination through ODES as per their wish and preparation as and
            when they feel ready for the examination, subject to availability of
            the seats on the day of his/her choice at the On-Demand Exam centre
            and also the availability of the question bank in that particular
            course.
            <h1 className="text-[17px] font-semibold text-amber-700 py-2">
              Process of Registration for On-Demand Exam
            </h1>
            The registration for the On-Demand Exam can be done only online
            through RIOS website. If an exam fee is paid by Credit Card, the
            Hall Ticket is generated instantaneously and the student can take
            its printout. Registration fee can also be paid through bank draft
            in favour of RIOS. In that case an acknowledgement receipt is
            generated immediately and the student is required to submit the
            original bank draft along with a copy of the acknowledgement receipt
            at the concerned Regional Centre. After receiving the bank draft at
            the Regional Centre, his/her registration for On-Demand Exam is
            confirmed and information to that effect is automatically sent to
            the student's account which can be accessed by him/her using his/her
            registration number allotted at the time of online registration
          </p>
        </div>
      </div>
    </>
  );
};

export default ExaminationContainer;
