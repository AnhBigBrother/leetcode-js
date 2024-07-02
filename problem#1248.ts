/*
1248. Count Number of Nice Subarrays
Solved
Medium
Topics
Companies
Hint
Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.

 

Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].
Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.
Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16
 

Constraints:

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length
*/

function numberOfSubarrays(nums: number[], k: number): number {
  const n = nums.length;
  let ans = 0,
    l = -1,
    odd = 0;
  const prev = new Map<number, number>();
  const afte = new Map<number, number>();

  let p = -1,
    a = n;
  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 1) {
      prev.set(i, i - p);
      p = i;
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    if (nums[i] % 2 === 1) {
      afte.set(i, a - i);
      a = i;
    }
  }
  prev.set(n, n - p);
  afte.set(l, a - l);

  for (let i = 0; i < n; i++) {
    if (nums[i] % 2 === 1) {
      odd++;
      if (odd > k) {
        ans += afte.get(l)! * prev.get(i)!;
        l += afte.get(l)!;
        odd--;
      }
    }
  }
  if (odd < k) return 0;
  ans += afte.get(l)! * prev.get(n)!;

  return ans;
}

console.log(numberOfSubarrays([91473, 45388, 24720, 35841, 29648, 77363, 86290, 58032, 53752, 87188, 34428, 85343, 19801, 73201], 4));
