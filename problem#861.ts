/*
861. Score After Flipping Matrix
Solved
Medium
Topics
Companies
You are given an m x n binary matrix grid.

A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

Return the highest possible score after making any number of moves (including zero moves).

 

Example 1:


Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39
Example 2:

Input: grid = [[0]]
Output: 1
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 20
grid[i][j] is either 0 or 1.
*/

function matrixScore(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;

  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      for (let j = 0; j < n; j++) {
        grid[i][j] = Number(!grid[i][j]);
      }
    }
  }
  // console.log(grid);

  const count: number[][] = [];
  for (let j = 0; j < n; j++) {
    count.push([0, 0]);
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 1) count[j][1]++;
      else count[j][0]++;
    }
  }
  // console.log(count);

  for (let j = 0; j < n; j++) {
    if (count[j][0] > count[j][1]) {
      for (let i = 0; i < m; i++) {
        grid[i][j] = Number(!grid[i][j]);
      }
    }
  }
  // console.log(grid);

  let ans = 0;
  for (let i = 0; i < m; i++) {
    ans += parseInt(grid[i].join(''), 2);
  }

  return ans;
}

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);
