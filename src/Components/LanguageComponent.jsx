import React, { useState } from "react";
import { Languages } from "../DB/SubjectsDB";
import Select from "react-select";
import InputComponent from "./InputComponent";
const LanguageComponent = ({ formData, setFormData, isMarks }) => {
  const [options1, setOption1] = useState(Languages);
  const [options2, setOption2] = useState(Languages);
  return (
    <>
      <h1 className="text-[16px] font-semibold -mt-1">Choose Subject : </h1>
      <div className="grid grid-cols-3 items-center gap-5 mb-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-medium text-gray-500">
            First Language
          </h1>
          <Select
            options={options1}
            defaultInputValue={formData?.firstLanguage}
            menuPlacement="top"
            onChange={(v1) => {
              setFormData({
                ...formData,
                firstLanguage: v1.value,
              });
              setOption2(Languages.filter((o2) => o2.value !== v1.value));
            }}
            className="w-full max-w-xs bg-white  text-[14px]  border-gray-400 outline-none rounded-sm text-gray-700 "
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: "black",
                borderWidth: "1px",
                color: "black",
                padding: "4px 2px",
              }),
            }}
          />
        </div>
        {formData?.result && (
          <>
            {" "}
            <InputComponent
              label="Theory Marks"
              inputType="text"
              placeholder="Enter Theory Marks"
              field={"lang1TheoryMarks"}
              formData={formData}
              setFormData={setFormData}
              isMarks={isMarks}
            />
            <InputComponent
              label="Oral Marks"
              inputType="text"
              placeholder="Enter Oral Marks"
              field={"lang1OralMarks"}
              formData={formData}
              setFormData={setFormData}
              isMarks={isMarks}
            />
          </>
        )}
      </div>
      <div className="grid grid-cols-3 items-center gap-3 w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-medium text-gray-500">
            Second Language
          </h1>
          <Select
            menuPlacement="top"
            defaultInputValue={formData?.secondLanguage}
            options={options2}
            onChange={(v2) => {
              setFormData({
                ...formData,
                secondLanguage: v2.value,
              });
              setOption1(Languages.filter((o1) => o1.value !== v2.value));
            }}
            className="w-full max-w-xs bg-white  text-[14px]  border-gray-400 outline-none rounded-sm text-gray-700 "
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                borderColor: "black",
                borderWidth: "1px",
                color: "black",
                padding: "4px 2px",
              }),
            }}
          />
        </div>
        {formData?.result && (
          <>
            <InputComponent
              label="Theory Marks"
              inputType="text"
              placeholder="Enter Theory Marks"
              field={"lang2TheoryMarks"}
              formData={formData}
              setFormData={setFormData}
              isMarks={isMarks}
            />
            <InputComponent
              label="Oral Marks"
              inputType="text"
              placeholder="Enter Oral Marks"
              field={"lang2OralMarks"}
              formData={formData}
              setFormData={setFormData}
              isMarks={isMarks}
            />
          </>
        )}
      </div>
    </>
  );
};

export default LanguageComponent;
