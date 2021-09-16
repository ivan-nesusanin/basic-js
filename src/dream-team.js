/* Imagine you and your friends decide to create a dream team. This team should have a cool secret name that contains encrypted information about it. For example, these may be the first letters of the names of its members in upper case sorted alphabetically. Your task is to implement the createDreamTeam(members) function that returns name of a newly made team (string) based on the names of its members (Array). Good luck!

Names of the members should be strings. Values with other type should be ignored. In case of wrong members type function must return false.

NB! Team member name may contain whitespaces.

For example:
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'

Write your code in src/dream-team.js. */

import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  if (!Array.isArray(members)) return false;
  let arrName = [];
  members.forEach(item => typeof item == 'string' ? arrName.push(item.trim().toUpperCase()) : false);
  arrName.sort();
  let dreamTeamName = '';
  for (let i = 0; i < arrName.length; i++) {
    if (typeof arrName[i] === 'string') dreamTeamName += arrName[i][0];
  }
  return dreamTeamName;
}
