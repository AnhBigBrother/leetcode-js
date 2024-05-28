/*
78. Subsets
Solved
Medium
Topics
Companies
Given an integer array nums of unique elements, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
 

Constraints:

1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/

function subsets(nums: number[]): number[][] {
  const n = nums.length;
  const ans: number[][] = [[]];

  const solve = (idx: number, arr: number[]) => {
    if (idx >= n) return;
    for (let i = idx; i < n; i++) {
      const newArr: number[] = [...arr];
      newArr.push(nums[i]);
      ans.push(newArr);
      solve(i + 1, newArr);
    }
  };

  solve(0, []);

  return ans;
}

console.log(subsets([1, 2, 3]));
