/* Your task is to implement function that accepts two strings (s1 and s2) and returns number of common characters between them.

For example:
getCommonCharacterCount('aabcc', 'adcaa') => 3 */

import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let arrS1 = s1.split('');
  console.log(arrS1);
  let arrS2 = s2.split('');
  console.log(arrS2);
  let count = 0;
  console.log(arrS1);
  for (let i = 0; i < arrS1.length; i++) {
    let j = 0;
    while (j < arrS2.length) {
      if (arrS1[i] === arrS2[j]) {
        count++;
        console.log(arrS1);
        arrS2.splice(j, 1);
        console.log(arrS1);
        j = arrS2.length;
      } else {
        j++;
      }
    }
  }
  return count;
}

getCommonCharacterCount('a', 'b')