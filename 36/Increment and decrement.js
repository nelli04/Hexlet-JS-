const makeItFunny = (str, n) => {
  let i = 0;
  let result = '';
  while (i < str.length) {
    const current = str[i];
    if ((i + 1) % n === 0) {
      result += current.toUpperCase();
    } else {
      result += current;
    }
    i += 1;
  }

  return result;
};
export default makeItFunny;