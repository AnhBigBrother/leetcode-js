/*
260. Single Number III
Solved
Medium
Topics
Companies
Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

 

Example 1:

Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation:  [5, 3] is also a valid answer.
Example 2:

Input: nums = [-1,0]
Output: [-1,0]
Example 3:

Input: nums = [0,1]
Output: [1,0]
 

Constraints:

2 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each integer in nums will appear twice, only two integers will appear once.
*/

function dec2bin(dec: number) {
  return (dec >>> 0).toString(2);
}

function singleNumber(nums: number[]): number[] {
  if (nums.length == 2) return nums;
  let diff = nums[0];
  for (let i = 1; i < nums.length; i++) {
    diff ^= nums[i];
  }
  const diffBin = dec2bin(diff);
  let str = '';
  for (let i = 0; i < diffBin.length; i++) {
    if (diffBin[i] === '1') {
      str += '1';
      i++;
      while (i < diffBin.length) {
        str += '0';
        i++;
      }
    }
  }
  const x = parseInt(str, 2);
  console.log(x & 4);

  let a, b;
  for (let n of nums) {
    if (n & x) {
      if (a === undefined) a = n;
      else a = a ^ n;
    } else {
      if (b === undefined) b = n;
      else b = b ^ n;
    }
  }

  return [a!, b!];
}

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
