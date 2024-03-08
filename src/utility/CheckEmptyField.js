const CheckEmptyField = (formData) => {
  let emptyField = "";
  const isAllFieldFilled = Object.keys(formData).every((curr) => {
    emptyField = curr;
    return formData[curr];
  });
  return { emptyField, isAllFieldFilled };
};
export default CheckEmptyField;
