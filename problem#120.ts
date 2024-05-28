/*
120. Triangle
Solved
Medium
Topics
Companies
Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

 

Example 1:

Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explanation: The triangle looks like:
   2
  3 4
 6 5 7
4 1 8 3
The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
Example 2:

Input: triangle = [[-10]]
Output: -10
 

Constraints:

1 <= triangle.length <= 200
triangle[0].length == 1
triangle[i].length == triangle[i - 1].length + 1
-104 <= triangle[i][j] <= 104
 

Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?
*/

function minimumTotal(triangle: number[][]): number {
  const minPathSum: number[][] = [triangle[0]];
  for (let i = 1; i < triangle.length; i++) {
    if (!minPathSum[i]) minPathSum.push(new Array(triangle[i].length));
    for (let j = 0; j < triangle[i].length; j++) {
      let minParent;
      if (j === 0) minParent = minPathSum[i - 1][j];
      else if (j === triangle[i].length - 1) minParent = minPathSum[i - 1][j - 1];
      else minParent = Math.min(minPathSum[i - 1][j], minPathSum[i - 1][j - 1]);
      minPathSum[i][j] = minParent + triangle[i][j];
    }
  }

  // console.log(minPathSum);
  const arr = minPathSum[minPathSum.length - 1];
  let ans = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (ans > arr[i]) ans = arr[i];
  }

  return ans;
}

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
