/*
765. Couples Holding Hands
Solved
Hard
Topics
Companies
Hint
There are n couples sitting in 2n seats arranged in a row and want to hold hands.

The people and seats are represented by an integer array row where row[i] is the ID of the person sitting in the ith seat. The couples are numbered in order, the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2n - 2, 2n - 1).

Return the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two people, then they stand up and switch seats.

 

Example 1:

Input: row = [0,2,1,3]
Output: 1
Explanation: We only need to swap the second (row[1]) and third (row[2]) person.
Example 2:

Input: row = [3,2,0,1]
Output: 0
Explanation: All couples are already seated side by side.
 

Constraints:

2n == row.length
2 <= n <= 30
n is even.
0 <= row[i] < 2n
All the elements of row are unique.
*/

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function (row) {
  const n = row.length;
  const pos = new Array(n);
  for (let i = 0; i < n; i++) {
    pos[row[i]] = i;
  }
  console.log(pos);
  const clusters = [];
  const visited = new Array(n);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const cluster = [];
      recursion(cluster, pos, row, visited, i);
      clusters.push(cluster);
    }
  }
  console.log(clusters);
  let ans = 0;
  for (let x of clusters) {
    ans += x.length / 2 - 1;
  }
  return ans;
};
const recursion = (cluster, pos, row, visited, i) => {
  if (!visited[i]) {
    visited[i] = true;
    cluster.push(row[i]);
    if (row[i] % 2 === 1) {
      recursion(cluster, pos, row, visited, pos[row[i] - 1]);
    } else {
      recursion(cluster, pos, row, visited, pos[row[i] + 1]);
    }
    if (i % 2 === 0) {
      recursion(cluster, pos, row, visited, i + 1);
    } else {
      recursion(cluster, pos, row, visited, i - 1);
    }
  }
};

const row = [10, 7, 4, 2, 3, 0, 9, 11, 1, 5, 6, 8];
console.log(minSwapsCouples(row));