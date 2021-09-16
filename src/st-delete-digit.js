/* Your task is to implement function that accepts integer number (n) and returns maximal number you can obtain by deleting exactly one digit of the given number.

For example:

deleteDigit(152) => 52 */

import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  let nArr = String(n).split('');
  let min = nArr[0];
  for (let i = 1; i < nArr.length; i++) {
    if (nArr[i] < min) min = nArr[i];
  }
  const index = nArr.indexOf(min);
  nArr.splice(index, 1);
  const resultNumber = Number(nArr.join(''));
  return resultNumber;
}
