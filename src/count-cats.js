/* Your task is to count the cats hidden in the backyard (presented by two-dimensional Array). Cats hide well, but their ears ("^^") are clearly visible. Your task is to implement the countCats(backyard) function that will count cats. Good luck!

Number of cats found should be number. If no cats found, function should return 0.

For example:
countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ]) => 3

Write your code in src/count-cats.js. */

import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
        count +=1
      }
    }
  }
  return count;
}
