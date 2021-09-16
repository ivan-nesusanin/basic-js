/* Your task is to implement the function getSeason(date) that accepts Date object and returns the time of the year that matches it. Time of the year must be string.

Seasons in English
The names of the seasons in English are: spring, summer, autumn (fall), winter.

If the date argument was not passed, the function must return the string 'Unable to determine the time of year!'. If the date argument is invalid, the function must throw an Error with message Invalid date!.

Shh! An enemy scout has lurked among the arguments that come into this function.

Disguised
He is guided by the famous proverb: “If it looks like a duck, swims like a duck and quacks like a duck, then it probably is a duck (who cares what it really is)”. He is expertly disguised as a real date, but a clever javascript developer can catch him and throw an Error with message Invalid date! just in time!

For example:
const springDate = new Date(2020, 02, 31)
getSeason(springDate) => 'spring'

Write your code in src/what-season.js. */

import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  // throw new NotImplementedError('Not implemented');

}
