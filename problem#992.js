/*
992. Subarrays with K Different Integers
Solved
Hard
Topics
Companies
Given an integer array nums and an integer k, return the number of good subarrays of nums.

A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].
 

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i], k <= nums.length
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  return (
    subArrWithAtmostKDistinct(nums, k) - subArrWithAtmostKDistinct(nums, k - 1)
  );
};

const subArrWithAtmostKDistinct = (nums, k) => {
  const n = nums.length;
  let ans = 0;
  let i = 0,
    j = 0;
  let distinct = 0;
  let freq = {};
  while (j < n) {
    if (freq[nums[j]] === undefined) {
      freq[nums[j]] = 0;
    }
    if (freq[nums[j]] === 0) {
      distinct++;
    }
    freq[nums[j]]++;
    while (distinct > k) {
      freq[nums[i]]--;
      if (freq[nums[i]] === 0) {
        distinct--;
      }
      i++;
    }
    ans += j - i + 1;
    j++;
  }
  return ans;
};

const nums = [1, 2, 1, 2, 3],
  k = 2;
console.log(subarraysWithKDistinct(nums, k));
