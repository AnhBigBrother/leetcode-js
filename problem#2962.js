/*
2962. Count Subarrays Where Max Element Appears at Least K Times
Solved
Medium
Topics
Companies
You are given an integer array nums and a positive integer k.

Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.

A subarray is a contiguous sequence of elements within an array.

 

Example 1:

Input: nums = [1,3,2,3,3], k = 2
Output: 6
Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
Example 2:

Input: nums = [1,4,2,1], k = 3
Output: 0
Explanation: No subarray contains the element 4 at least 3 times.
 

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
1 <= k <= 105
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const n = nums.length;
  const posOfMax = [];
  let max = nums[0];

  for (let x of nums) {
    if (x > max) max = x;
  }
  for (let i = 0; i < n; i++) {
    if (nums[i] === max) posOfMax.push(i);
  }

  console.log("max", max);

  let ans = 0;
  console.log("posOfMax", posOfMax);
  for (let i = 0; i < posOfMax.length; i++) {
    let l = posOfMax[i];
    if (i + k - 1 >= posOfMax.length) {
      return ans;
    }
    let r = posOfMax[i + k - 1];
    let rr = posOfMax[i + k] || n;
    ans += (l + 1) * (rr - r);
    console.log(l, r, rr, ans);
  }
  return ans;
};

(nums = [
  37, 20, 38, 66, 34, 38, 9, 41, 1, 14, 25, 63, 8, 12, 66, 66, 60, 12, 35, 27,
  16, 38, 12, 66, 38, 36, 59, 54, 66, 54, 66, 48, 59, 66, 34, 11, 50, 66, 42,
  51, 53, 66, 31, 24, 66, 44, 66, 1, 66, 66, 29, 54,
]),
  (k = 5);
console.log("my ans", countSubarrays(nums, k));
