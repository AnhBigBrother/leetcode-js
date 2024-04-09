/*
31. Next Permutation
Solved
Medium
Topics
Companies
A permutation of an array of integers is an arrangement of its members into a sequence or linear order.

For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container. If such arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).

For example, the next permutation of arr = [1,2,3] is [1,3,2].
Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
Given an array of integers nums, find the next permutation of nums.

The replacement must be in place and use only constant extra memory.

 

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]
Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]
Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]
 

Constraints:

1 <= nums.length <= 100
0 <= nums[i] <= 100
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const n = nums.length;
  const arr = [nums[n - 1]];
  let flag = false;
  for (let i = n - 2; i >= 0; i--) {
    if (!flag) {
      if (arr[0] <= nums[i]) {
        arr.unshift(nums[i]);
      } else {
        flag = true;
        let temp = arr[arr.length - 1];
        if (arr[arr.length - 1] > nums[i]) {
          arr[arr.length - 1] = nums[i];
          reverseArr(arr);
          arr.unshift(temp);
        } else {
          for (let j = 1; j < arr.length; j++) {
            if (arr[j] <= nums[i]) {
              temp = arr[j - 1];
              arr[j - 1] = nums[i];
              break;
            }
          }
          reverseArr(arr);
          arr.unshift(temp);
        }
      }
    } else {
      arr.unshift(nums[i]);
    }
  }
  console.log(flag);
  console.log("input:", nums);
  if (flag) {
    for (let i in nums) {
      nums[i] = arr[i];
    }
  } else {
    reverseArr(nums);
  }
  console.log("output:", nums);
};
const reverseArr = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
  }
};
const nums = [1, 2, 4, 4, 1];
nextPermutation(nums);
