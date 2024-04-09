// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

// ---> sliding window

const longestOnes = function(nums, k) {
    const f = [0, 0];
    let left = 0, right = 0, ans = 0;
    for (right=0; right<nums.length; right++){
        f[nums[right]]++;
        if (f[0] > k){
            f[nums[left]]--;
            left ++;
        }
        else{
            ans = Math.max(ans, right - left + 1);
        }
    }
    return ans;
};

const nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1];
const k = 3
console.log(longestOnes(nums, k));