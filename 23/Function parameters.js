const truncate = (text, length) => {
  const result = `${text.slice(0, length[-4])}...`;
  return result;
 }
export default truncate;