import React, { useState } from "react";
import Select from "react-select";
import InputComponent from "./InputComponent";
const OptionalSubjectComponent = ({
  formData,
  setFormData,
  secondoryOptionalSubjects,
  seniorSecondary,
  stream,
  isMarks,
}) => {
  const [options, setOptions] = useState(secondoryOptionalSubjects);
  return (
    <>
      <div className="grid grid-cols-3 gap-5 w-full justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-medium text-gray-500">
            Option1 Subject
          </h1>
          <Select
            options={options}
            menuPlacement="top"
            defaultInputValue={formData?.option1}
            onChange={(v) => {
              setFormData({
                ...formData,
                option1: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
            }}
            className="w-full max-w-xs bg-white text-[14px] border-gray-400 outline-none rounded-sm text-gray-700 "
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
        <InputComponent
          label="Theory Marks"
          inputType="text"
          placeholder="Enter Theory Marks"
          field={"opt1TheoryMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
        <InputComponent
          label="Oral Marks"
          inputType="text"
          placeholder="Enter Oral Marks"
          field={"opt1OralMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 w-full justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-medium text-gray-500">
            Option2 Subject
          </h1>
          <Select
            options={options}
            defaultInputValue={formData?.option2}
            menuPlacement="top"
            onChange={(v) => {
              setFormData({
                ...formData,
                option2: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
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
        <InputComponent
          label="Theory Marks"
          inputType="text"
          placeholder="Enter Theory Marks"
          field={"opt2TheoryMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
        <InputComponent
          label="Oral Marks"
          inputType="text"
          placeholder="Enter Oral Marks"
          field={"opt2OralMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
      </div>

      <div className="grid grid-cols-3 gap-5 w-full justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-medium text-gray-500">
            Option3 Subject
          </h1>
          <Select
            options={options}
            defaultInputValue={formData?.option3}
            menuPlacement="top"
            onChange={(v) => {
              setFormData({
                ...formData,
                option3: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
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
        <InputComponent
          label="Theory Marks"
          inputType="text"
          placeholder="Enter Theory Marks"
          field={"opt3TheoryMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
        <InputComponent
          label="Oral Marks"
          inputType="text"
          placeholder="Enter Oral Marks"
          field={"opt3OralMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
      </div>
      <div className="grid grid-cols-3 gap-5 w-full justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-base font-medium text-gray-500">
            Option4 Subject
          </h1>
          <Select
            options={options}
            defaultInputValue={formData?.option4}
            menuPlacement="top"
            onChange={(v) => {
              setFormData({
                ...formData,
                option4: v.value,
              });
              setOptions(options.filter((o1) => o1.value !== v.value));
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
        <InputComponent
          label="Theory Marks"
          inputType="text"
          placeholder="Enter Theory Marks"
          field={"opt4TheoryMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
        <InputComponent
          label="Oral Marks"
          inputType="text"
          placeholder="Enter Oral Marks"
          field={"opt4OralMarks"}
          formData={formData}
          setFormData={setFormData}
          isMarks={true}
        />
      </div>
      {!seniorSecondary && (
        <div className="grid grid-cols-3 gap-5 w-full justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-base font-medium text-gray-500">
              Option5[Optional] Subject
            </h1>
            <Select
              options={options}
              defaultInputValue={formData?.option5}
              menuPlacement="top"
              onChange={(v) => {
                setFormData({
                  ...formData,
                  option5: v.value,
                });
                setOptions(options.filter((o1) => o1.value !== v.value));
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
          <InputComponent
            label="Theory Marks"
            inputType="text"
            placeholder="Enter Theory Marks"
            field={"opt5TheoryMarks"}
            formData={formData}
            setFormData={setFormData}
            isMarks={true}
          />
          <InputComponent
            label="Oral Marks"
            inputType="text"
            placeholder="Enter Oral Marks"
            field={"opt5OralMarks"}
            formData={formData}
            setFormData={setFormData}
            isMarks={true}
          />
        </div>
      )}
    </>
  );
};

export default OptionalSubjectComponent;
