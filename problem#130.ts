/*
130. Surrounded Regions
Solved
Medium
Topics
Companies
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

 

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Explanation:


In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded.

Example 2:

Input: board = [["X"]]

Output: [["X"]]

 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
*/

/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  const m = board.length,
    n = board[0].length;
  let queue: number[][] = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (board[i][j] === 'O') {
          board[i][j] = 'S';
          queue.push([i, j]);
        }
      }
    }
  }
  while (queue.length > 0) {
    let newQueue: number[][] = [];
    for (let pos of queue) {
      let x = pos[0],
        y = pos[1];
      if (x - 1 >= 0 && board[x - 1][y] === 'O') {
        board[x - 1][y] = 'S';
        newQueue.push([x - 1, y]);
      }
      if (x + 1 < m && board[x + 1][y] === 'O') {
        board[x + 1][y] = 'S';
        newQueue.push([x + 1, y]);
      }
      if (y - 1 >= 0 && board[x][y - 1] === 'O') {
        board[x][y - 1] = 'S';
        newQueue.push([x, y - 1]);
      }
      if (y + 1 < n && board[x][y + 1] === 'O') {
        board[x][y + 1] = 'S';
        newQueue.push([x, y + 1]);
      }
    }
    queue = newQueue;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'S') {
        board[i][j] = 'O';
      }
    }
  }
  console.log(board);
}

solve([
  ['O', 'O', 'O', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'X', 'O'],
  ['O', 'X', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O', 'O'],
]);
