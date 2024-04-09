/*
2444. Count Subarrays With Fixed Bounds
Solved
Hard
Topics
Companies
Hint
You are given an integer array nums and two integers minK and maxK.

A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

The minimum value in the subarray is equal to minK.
The maximum value in the subarray is equal to maxK.
Return the number of fixed-bound subarrays.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
Example 2:

Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.
 

Constraints:

2 <= nums.length <= 105
1 <= nums[i], minK, maxK <= 106
*/

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function (nums, minK, maxK) {
  if (minK === maxK) {
    return ge_min_le_max(nums, minK, maxK);
  }
  return (
    ge_min_le_max(nums, minK, maxK) -
    has_max_gt_min(nums, minK, maxK) -
    has_min_lt_max(nums, minK, maxK) -
    gt_min_lt_max(nums, minK, maxK)
  );
};

// greater than or equal to minK and less than or equal to maxK
const ge_min_le_max = (nums, minK, maxK) => {
  const n = nums.length;
  let i = 0;
  let ans = 0;
  for (let j = 0; j < n; j++) {
    if (nums[j] >= minK && nums[j] <= maxK) {
      ans += j - i + 1;
    } else {
      i = j + 1;
    }
  }
  return ans;
};

// has minK and less than maxK
const has_min_lt_max = (nums, minK, maxK) => {
  const n = nums.length;
  let ans = 0;
  let i = 0,
    j = 0;
  let l = 0;
  while (j < n) {
    if (nums[j] < minK || nums[j] >= maxK) {
      i = j + 1;
      l = 0;
    } else if (nums[j] > minK) {
      ans += l;
    } else if (nums[j] === minK) {
      l = j - i + 1;
      ans += l;
    }
    j++;
  }
  return ans;
};

// has max and greater than minK
const has_max_gt_min = (nums, minK, maxK) => {
  const n = nums.length;
  let ans = 0;
  let i = 0,
    j = 0;
  let l = 0;
  while (j < n) {
    if (nums[j] > maxK || nums[j] <= minK) {
      i = j + 1;
      l = 0;
    } else if (nums[j] < maxK) {
      ans += l;
    } else if (nums[j] === maxK) {
      l = j - i + 1;
      ans += l;
    }
    j++;
  }
  return ans;
};

// greater than minK and less than maxK
const gt_min_lt_max = (nums, minK, maxK) => {
  const n = nums.length;
  let i = 0;
  let ans = 0;
  for (let j = 0; j < n; j++) {
    if (nums[j] > minK && nums[j] < maxK) {
      ans += j - i + 1;
    } else {
      i = j + 1;
    }
  }
  return ans;
};

const nums = [
    35054, 398719, 945315, 945315, 820417, 945315, 35054, 945315, 171832,
    945315, 35054, 109750, 790964, 441974, 552913,
  ],
  minK = 35054,
  maxK = 945315;
console.log("ge_min_le_max", ge_min_le_max(nums, minK, maxK));
console.log("has_max_gt_min", has_max_gt_min(nums, minK, maxK));
console.log("has_min_lt_max", has_min_lt_max(nums, minK, maxK));
console.log("gt_min_lt_max", gt_min_lt_max(nums, minK, maxK));
console.log(countSubarrays(nums, minK, maxK));
