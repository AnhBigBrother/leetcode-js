/* 
930. Binary Subarrays With Sum
Solved
Medium
Topics
Companies
Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
A subarray is a contiguous part of the array. 

Example 1:
Input: nums = [1,0,1,0,1], goal = 2
Output: 4
Explanation: The 4 subarrays are bolded and underlined below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]

Example 2:
Input: nums = [0,0,0,0,0], goal = 0
Output: 15
 
Constraints:
1 <= nums.length <= 3 * 104
nums[i] is either 0 or 1.
0 <= goal <= nums.length
*/

/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
const numSubarraysWithSum = function (nums, goal) {
    if (goal === 0) {
        return subarraysWithSumZero(nums);
    }
    let ans = 0;
    let n = nums.length;
    const left = {};
    const right = {};
    let p = 0;
    let front = -1;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            p++;
        } else {
            left[i] = p;
            if (front !== -1) {
                right[front] = p;
            }
            p = 0;
            front = i;
        }
    }
    right[front] = p;

    // console.log(left);
    // console.log(right);
    front = -1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] === 1) {
            if (front === -1) {
                front = i;
            }
            sum += nums[i];
            if (sum === goal) {
                ans += (left[front] + 1) * (right[i] + 1);
                // console.log(front, ans)
                front += right[front] + 1;
                sum--;
            }
        }
    }
    return ans;
};
const subarraysWithSumZero = (arr) => {
    let ans = 0;
    let front1 = -1;
    const subArrZero = [];
    for (let i in arr) {
        if (arr[i] === 1) {
            if (i - front1 - 1 > 0) {
                subArrZero.push(i - front1 - 1);
            }
            front1 = i;
        }
    }
    if (front1 !== arr.length - 1) {
        subArrZero.push(arr.length - front1 - 1);
    }
    console.log(subArrZero);
    for (let x of subArrZero) {
        ans += ((x + 1) * x) / 2;
    }
    return ans;
};

const nums = [1,0,1,0,1],
    goal = 2;

console.log(numSubarraysWithSum(nums, goal));
