/*
42. Trapping Rain Water
Solved
Hard
Topics
Companies
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let pos = 0;
  let S = height[pos];
  for (let i = 1; i < n; i++) {
    if (height[i] >= height[pos]) {
      S += height[i];
      S += height[pos] * (i - pos - 1);
      pos = i;
    }
  }
  if (pos < n - 1) {
    const Highest = pos;
    pos = n - 1;
    S += height[pos];
    for (let i = n - 2; i >= Highest; i--) {
      if (height[i] >= height[pos]) {
        S += height[i];
        S += height[pos] * (pos - i - 1);
        pos = i;
      }
    }
    S -= height[pos];
  }
  for (let x of height) {
    S -= x;
  }
  return S;
};

const height = [5, 5, 1, 7, 1, 1, 5, 2, 7, 6];
console.log(trap(height));
