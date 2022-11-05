import square from './square.js';
import { getTriangleArea } from './myMathModule.js';

const solution = (n) => getTriangleArea(n, square(n) / 2);

export default solution;