import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  const arr = n.split('');
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const letter = ['A', 'B', 'C', 'D', 'E', 'F'];
  if (arr.length !== 17) return false;
  for (let i = 0; i < arr.length; i++) {
    if (number.includes(arr[i]) || letter.includes(arr[i]) || arr[i % 3] === '-') {
      true;
    } else {
      return false;
    }
  }
  return true;
}
