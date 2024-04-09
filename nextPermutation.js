/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;
    if (n == 1) {return nums;}
    for (let i=n-1; i>0; i--){
        if (nums[i] > nums[i-1]){
            let x = nums[i];
            nums[i] = nums[i-1];
            nums[i-1] = x;
            return nums;
        }
    }
    const ans = [];
    for (let i=n-1; i>=0; i--){
        ans.push(nums[i]);
    }
    return ans;
};

let nums = [3,2,1];
console.log(nextPermutation(nums));