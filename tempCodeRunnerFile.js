/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperationsToMakeMedianK = function (nums, k) {
  let sum = 0;
  for (let x of nums) {
    sum = (sum % k) + (x % k);
  }
  // console.log(sum);
  return Math.max(k - sum, sum);
};