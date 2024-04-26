/*
1289. Minimum Falling Path Sum II
Solved
Hard
Topics
Companies
Hint
Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts.

A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column.

Example 1:

Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: 13
Explanation: 
The possible falling paths are:
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
The falling path with the smallest sum is [1,5,7], so the answer is 13.
Example 2:

Input: grid = [[7]]
Output: 7
 

Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
-99 <= grid[i][j] <= 99
*/

function minFallingPathSum(grid: number[][]): number {
  const n = grid.length;
  const dp: number[][] = [];
  for (let i = 0; i < n; i++) {
    dp.push(new Array(n).fill(0));
  }
  let firstIndex = 0,
    secondIndex = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) dp[i][j] = grid[i][j];
      else {
        if (j !== firstIndex) {
          dp[i][j] = grid[i][j] + dp[i - 1][firstIndex];
        } else {
          dp[i][j] = grid[i][j] + dp[i - 1][secondIndex];
        }
      }
    }
    firstIndex = 0;
    for (let j = 0; j < n; j++) {
      if (dp[i][firstIndex] > dp[i][j]) firstIndex = j;
    }
    secondIndex = 0;
    if (firstIndex === secondIndex) secondIndex = 1;
    for (let j = 0; j < n; j++) {
      if (dp[i][secondIndex] > dp[i][j] && firstIndex !== j) secondIndex = j;
    }
  }
  // console.log(dp);
  let ans = dp[n - 1][0];
  for (let j = 1; j < n; j++) {
    if (ans > dp[n - 1][j]) ans = dp[n - 1][j];
  }
  return ans;
}

console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
