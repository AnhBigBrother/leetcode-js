/*
85. Maximal Rectangle
Solved
Hard
Topics
Companies
Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.
Example 2:

Input: matrix = [["0"]]
Output: 0
Example 3:

Input: matrix = [["1"]]
Output: 1
 

Constraints:

rows == matrix.length
cols == matrix[i].length
1 <= row, cols <= 200
matrix[i][j] is '0' or '1'.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const height = [];
  for (let i = 0; i < m; i++) height.push(new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        if (i - 1 >= 0 && matrix[i - 1][j] === "1") {
          height[i][j] = height[i - 1][j] + 1;
        } else {
          height[i][j] = 1;
        }
      }
    }
  }
  console.log(height);
  let maxSquare = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === "1") {
        let currentMax = height[i][j];
        let minH = height[i][j];
        for (let k = j + 1; k < n; k++) {
          if (matrix[i][k] === "1") {
            minH = Math.min(height[i][k], minH);
            currentMax = Math.max(minH * (k - j + 1), currentMax);
          } else break;
        }
        maxSquare = Math.max(maxSquare, currentMax);
      }
    }
  }
  return maxSquare;
};

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
console.log(maximalRectangle(matrix));
