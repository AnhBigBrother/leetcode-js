/*
2812. Find the Safest Path in a Grid
Solved
Medium
Topics
Companies
Hint
You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:

A cell containing a thief if grid[r][c] = 1
An empty cell if grid[r][c] = 0
You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).

An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.

The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

 

Example 1:


Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 0
Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).
Example 2:


Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.
Example 3:


Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
- The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
It can be shown that there are no other paths with a higher safeness factor.
 

Constraints:

1 <= grid.length == n <= 400
grid[i].length == n
grid[i][j] is either 0 or 1.
There is at least one thief in the grid.
*/

function maximumSafenessFactor(grid: number[][]): number {
  const n = grid.length;
  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return 0;

  // <----------find safetyScore of each position---------->
  const safetyScore: number[][] = [];
  for (let i = 0; i < n; i++) {
    safetyScore.push(new Array(n).fill(0));
  }
  const stack: number[][][] = [[]];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        stack[0].push([i, j]);
      }
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let arr: number[][] = [];
    for (let j = 0; j < stack[i].length; j++) {
      let x = stack[i][j][0],
        y = stack[i][j][1];
      if (x - 1 >= 0 && grid[x - 1][y] === 0) {
        if (safetyScore[x - 1][y] === 0 || safetyScore[x - 1][y] > safetyScore[x][y] + 1) {
          safetyScore[x - 1][y] = safetyScore[x][y] + 1;
          arr.push([x - 1, y]);
        }
      }
      if (y - 1 >= 0 && grid[x][y - 1] === 0) {
        if (safetyScore[x][y - 1] === 0 || safetyScore[x][y - 1] > safetyScore[x][y] + 1) {
          safetyScore[x][y - 1] = safetyScore[x][y] + 1;
          arr.push([x, y - 1]);
        }
      }
      if (x + 1 < n && grid[x + 1][y] === 0) {
        if (safetyScore[x + 1][y] === 0 || safetyScore[x + 1][y] > safetyScore[x][y] + 1) {
          safetyScore[x + 1][y] = safetyScore[x][y] + 1;
          arr.push([x + 1, y]);
        }
      }
      if (y + 1 < n && grid[x][y + 1] === 0) {
        if (safetyScore[x][y + 1] === 0 || safetyScore[x][y + 1] > safetyScore[x][y] + 1) {
          safetyScore[x][y + 1] = safetyScore[x][y] + 1;
          arr.push([x, y + 1]);
        }
      }
    }
    if (arr.length !== 0) stack.push(arr);
  }

  // <----------find the maximum safeness factor of the path from [0, 0] to each position (pathScore)---------->
  const pathStack: number[][][] = [[[0, 0]]];
  const pathScore: number[][] = [];
  for (let i = 0; i < n; i++) pathScore.push(new Array(n).fill(-1));
  pathScore[0][0] = safetyScore[0][0];
  for (let i = 0; i < pathStack.length; i++) {
    const arr: number[][] = [];
    for (let j = 0; j < pathStack[i].length; j++) {
      let x = pathStack[i][j][0],
        y = pathStack[i][j][1];

      if (x - 1 >= 0) {
        let score = pathScore[x][y];
        if (x - 2 >= 0) score = Math.max(pathScore[x - 2][y], score);
        if (y - 1 >= 0) score = Math.max(pathScore[x - 1][y - 1], score);
        if (y + 1 < n) score = Math.max(pathScore[x - 1][y + 1], score);
        if (pathScore[x - 1][y] === -1 || pathScore[x - 1][y] < Math.min(score, safetyScore[x - 1][y])) {
          pathScore[x - 1][y] = Math.min(score, safetyScore[x - 1][y]);
          arr.push([x - 1, y]);
        }
      }
      if (y - 1 >= 0) {
        let score = pathScore[x][y];
        if (y - 2 >= 0) score = Math.max(pathScore[x][y - 2], score);
        if (x - 1 >= 0) score = Math.max(pathScore[x - 1][y - 1], score);
        if (x + 1 < n) score = Math.max(pathScore[x + 1][y - 1], score);
        if (pathScore[x][y - 1] === -1 || pathScore[x][y - 1] < Math.min(score, safetyScore[x][y - 1])) {
          pathScore[x][y - 1] = Math.min(score, safetyScore[x][y - 1]);
          arr.push([x, y - 1]);
        }
      }
      if (x + 1 < n) {
        let score = pathScore[x][y];
        if (x + 2 < n) score = Math.max(score, pathScore[x + 2][y]);
        if (y - 1 >= 0) score = Math.max(score, pathScore[x + 1][y - 1]);
        if (y + 1 < n) score = Math.max(score, pathScore[x + 1][y + 1]);
        if (pathScore[x + 1][y] === -1 || pathScore[x + 1][y] < Math.min(score, safetyScore[x + 1][y])) {
          pathScore[x + 1][y] = Math.min(score, safetyScore[x + 1][y]);
          arr.push([x + 1, y]);
        }
      }
      if (y + 1 < n) {
        let score = pathScore[x][y];
        if (y + 2 < n) score = Math.max(score, pathScore[x][y + 2]);
        if (x - 1 >= 0) score = Math.max(score, pathScore[x - 1][y + 1]);
        if (x + 1 < n) score = Math.max(score, pathScore[x + 1][y + 1]);
        if (pathScore[x][y + 1] === -1 || pathScore[x][y + 1] < Math.min(score, safetyScore[x][y + 1])) {
          pathScore[x][y + 1] = Math.min(score, safetyScore[x][y + 1]);
          arr.push([x, y + 1]);
        }
      }
    }
    if (arr.length > 0) pathStack.push(arr);
  }

  return pathScore[n - 1][n - 1];
}

const abcxyz = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
];

console.log(maximumSafenessFactor(abcxyz));
