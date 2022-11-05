import reverse from './reverse';
const convertText = (hello) => {
  if (hello[0] === undefined) {
    return '';
  }
  return hello[0].toUpperCase() === hello[0] || hello === '' ? hello : reverse(hello)
};
console.log(convertText);
export default convertText;
