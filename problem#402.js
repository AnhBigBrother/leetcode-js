/*
402. Remove K Digits
Solved
Medium
Topics
Companies
Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.


Example 1:

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
Example 2:

Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
Example 3:

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
 

Constraints:

1 <= k <= num.length <= 105
num consists of only digits.
num does not have any leading zeros except for the zero itself.
*/

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  const n = num.length;
  const stack = [num[0]];
  // remove the digit that is greater than the digit right after it when k > 0
  for (let i = 1; i < n; i++) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  // if k still > 0, the stack now is in increasing order, so we pop the last digit in the stack until k == 0
  while (k > 0) {
    stack.pop();
    k--;
  }
  // remove the leading zero
  for (let i = 0; i < n; i++) {
    if (stack[i] === "0") stack[i] = "";
    else break;
  }
  const ans = stack.join("");
  if (ans === "") return "0";
  return ans;
};
