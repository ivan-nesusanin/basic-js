import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  const length = arr.length;
  const arrIndexOne = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrIndexOne.push(i);
    }
  }
  arr.sort((a, b) => a - b);
  while (arr.includes(-1)) {
    arr.shift();
  }
  let arrResult = [];
  let i = 0;
  let j = 0;
  while (i < length) {
    if (arrIndexOne.includes(i)) {
      arrResult.push(-1);
      i++;
    } else {
      arrResult.push(arr[j]);
      i++;
      j++;
    }
  }
  return arrResult;
}
