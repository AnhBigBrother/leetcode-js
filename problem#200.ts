/*
200. Number of Islands
Solved
Medium
Topics
Companies
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
*/

function numIslands(grid: string[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  const markZero = (i: number, j: number) => {
    grid[i][j] = '0';
    if (i - 1 >= 0 && grid[i - 1][j] === '1') markZero(i - 1, j);
    if (j - 1 >= 0 && grid[i][j - 1] === '1') markZero(i, j - 1);
    if (i + 1 < m && grid[i + 1][j] === '1') markZero(i + 1, j);
    if (j + 1 < n && grid[i][j + 1] === '1') markZero(i, j + 1);
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        ans++;
        markZero(i, j);
      }
    }
  }
  return ans;
}

const grid = [
  ['1', '1', '1'],
  ['0', '1', '0'],
  ['1', '1', '1'],
];
console.log(numIslands(grid));
