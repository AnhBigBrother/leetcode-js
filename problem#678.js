/*
678. Valid Parenthesis String
Solved
Medium
Topics
Companies
Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "(*)"
Output: true
Example 3:

Input: s = "(*))"
Output: true
 

Constraints:

1 <= s.length <= 100
s[i] is '(', ')' or '*'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  return checkValid(s, 0, 0);
};

const checkValid = (s, count, i) => {
  const n = s.length;
  const stackOpen = [];
  const stackStar = [];
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") stackOpen.push(i);
    if (s[i] === "*") stackStar.push(i);
    if (s[i] === ")") {
      if (stackOpen.length === 0 && stackStar.length === 0) return false;
      if (stackOpen.length !== 0) stackOpen.pop();
      else stackStar.pop();
    }
  }
  if (stackOpen.length > stackStar.length) return false;
  while (stackOpen.length > 0) {
    if (stackOpen[stackOpen.length - 1] > stackStar[stackStar.length - 1])
      return false;
    stackOpen.pop();
    stackStar.pop();
  }
  return true;
};

console.log(
  checkValidString(
    "************************************************************"
  )
);
