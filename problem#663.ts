/*
633. Sum of Square Numbers
Solved
Medium
Topics
Companies
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
 

Constraints:

0 <= c <= 231 - 1
*/

function judgeSquareSum(c: number): boolean {
  const n = Math.floor(Math.sqrt(c));
  let i = 0,
    j = n;
  while (i <= j) {
    if (i * i + j * j > c) {
      j--;
    } else if (i * i + j * j < c) {
      i++;
    } else return true;
  }
  return false;
}

console.log(judgeSquareSum(10));
