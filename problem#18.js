/*
18. 4Sum
Solved
Medium
Topics
Companies
Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order. 

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]] 

Constraints:
1 <= nums.length <= 200
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    const sett = new Set;
    let ans = [];
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let l = j + 1;
            let r = n - 1;
            while (l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum === target) {
                    let subArr = [nums[i], nums[j], nums[l], nums[r]];
                    if (!sett.has(JSON.stringify(subArr))){
                        ans.push(subArr);
                        sett.add(JSON.stringify(subArr));
                    }
                    l++;
                    r--;
                }
                else if (sum < target) {
                    l++;
                }
                else {
                    r--;
                }
            }
        }
    }
    return ans;
};

let nums = [2,2,2,2,2];
let target = 8;

console.log(fourSum(nums, target));