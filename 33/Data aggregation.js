const joinNumbersFromRange = (start, finish) => {
  let i = start;
  let sum = "";
  while (i <= finish) {
    sum = sum + i;
    i = i + 1;
  }
  return sum;
}
export default joinNumbersFromRange;
