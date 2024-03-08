import React from "react";

const InputComponent = ({
  label,
  inputType,
  placeholder,
  isResult = false,
  field,
  formData,
  setFormData,
  isMarks,
}) => {
  return (
    <>
      <div className="flex flex-col gap-1">
        <h1 className="text-[15px] font-medium text-gray-600">{label}</h1>
        <input
          type={inputType}
          value={
            formData && (isMarks ? formData?.result[field] : formData?.[field])
          }
          className={`file-input ${
            isResult ? "w-full" : "w-full"
          }  h-fit p-2 bg-white text-sm border-[1px] border-gray-800 text-gray-700 focus:outline-none placeholder:text-sm py-3`}
          placeholder={placeholder}
          onChange={(e) => {
            if (isMarks) {
              const { result } = formData;
              result[field] = e.target.value;
              setFormData({ ...formData, result });
            } else {
              setFormData({ ...formData, [field]: e.target.value });
            }
          }}
        />
      </div>
    </>
  );
};

export default InputComponent;
