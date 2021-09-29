/* Your task is to implement function that accepts email address (email) and returns it's domain.

For example:
getEmailDomain('prettyandsimple@example.com') => 'example.com'*/

import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  // throw new NotImplementedError('Not implemented');
  return email.slice(email.lastIndexOf('@') + 1);
}
