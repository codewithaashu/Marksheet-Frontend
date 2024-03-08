const years = [];
const todayYear = new Date().getFullYear();
let i = todayYear;
while (i >= 2000) {
  years.push(i);
  i--;
}
export default years;
