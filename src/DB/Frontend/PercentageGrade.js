const PercentageGrade = (percent) => {
  const grade = { scale: "C", description: "Fail" };
  if (percent >= 90) {
    grade.scale = "A++";
    grade.description = "Outstanding";
  } else if (percent >= 80) {
    grade.scale = "A+";
    grade.description = "Excellent";
  } else if (percent >= 60) {
    grade.scale = "A";
    grade.description = "Very Good";
  } else if (percent >= 45) {
    grade.scale = "B+";
    grade.description = "Average";
  } else if (percent >= 34) {
    grade.scale = "B";
    grade.description = "Fair";
  }
  return grade;
};
export default PercentageGrade;
