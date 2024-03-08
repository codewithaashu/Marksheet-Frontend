const SentenceCase = (word) => {
  let str = "";
  const wd = word.split(" ");
  for (let i = 0; i < wd.length; i++) {
    str += wd[i].charAt(0).toUpperCase() + wd[i].slice(1).toLowerCase() + " ";
  }
  return str.trim();
};
export default SentenceCase;
