/*
713. Subarray Product Less Than K
Solved
Medium
Topics
Companies
Hint
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

 

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
Example 2:

Input: nums = [1,2,3], k = 0
Output: 0
 

Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  const n = nums.length;
  let ans = 0;

  // const sub = [];
  // const dup = [];

  let i = 0,
    j = 0;
  while (j < n) {
    if (nums[i] >= k) {
      i++;
      j = i;
    } else {
      let prod = nums[i];
      j = i + 1;
      while (j < n) {
        prod *= nums[j];
        if (prod >= k) {
          // sub.push([i, j - 1]);
          ans += ((j - i + 1) * (j - i)) / 2;
          if (nums[j] >= k) {
            j++;
            i = j;
            break;
          }
          while (prod >= k && i <= j) {
            prod /= nums[i];
            i++;
          }
          if (i < j) {
            // dup.push([i, j - 1]);
            ans -= ((j - i) * (j - i + 1)) / 2;
          }
        }
        j++;
      }
    }
    if (j === n) {
      // sub.push([i, j - 1]);
      ans += ((j - i + 1) * (j - i)) / 2;
    }
  }
  // console.log('sub', sub);
  // console.log('dup', dup);
  return ans;
};

const nums = [10, 9, 10, 4, 3, 8, 3, 3, 6, 2, 10, 10, 9, 3],
  k = 19;

console.log(numSubarrayProductLessThanK(nums, k));
