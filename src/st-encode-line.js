import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  let resultStr = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count +=1;
    } else {
      count === 1 ? resultStr += str[i] : resultStr += count + str[i]; count = 1;
    }
  }
  return resultStr;
}