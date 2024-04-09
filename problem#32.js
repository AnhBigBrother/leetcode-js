/*
32. Longest Valid Parentheses
Solved
Hard
Topics
Companies
Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
substring.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const stack = [];
  stack.push(-1);
  for (let i = 0; i < s.length; i++) {
    let n = stack.length;
    if (n === 0) {
      stack.push(i);
    } else {
      if (s[stack[n - 1]] === "(" && s[i] === ")") {
        stack.pop();
      } else {
        stack.push(i);
      }
    }
  }
  stack.push(s.length);
  console.log(stack);
  let ans = 0;
  for (let i = 1; i < stack.length; i++) {
    ans = Math.max(ans, stack[i] - stack[i - 1] - 1);
  }
  return ans;
};

const s = ")()()";
console.log(longestValidParentheses(s));
