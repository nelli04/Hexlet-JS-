const getNumberExplanation = (get1) => {
  let result;
  switch (get1) {
    case 666:
      return 'devil number';
    case 42:
      return 'answer for everything';
      case 7:
      return 'prime number'
    default:
      return null;
  }
};
export default getNumberExplanation;
