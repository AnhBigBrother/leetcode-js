/*
2392. Build a Matrix With Conditions
Solved
Hard
Topics
Companies
Hint
You are given a positive integer k. You are also given:

a 2D integer array rowConditions of size n where rowConditions[i] = [abovei, belowi], and
a 2D integer array colConditions of size m where colConditions[i] = [lefti, righti].
The two arrays contain integers from 1 to k.

You have to build a k x k matrix that contains each of the numbers from 1 to k exactly once. The remaining cells should have the value 0.

The matrix should also satisfy the following conditions:

The number abovei should appear in a row that is strictly above the row at which the number belowi appears for all i from 0 to n - 1.
The number lefti should appear in a column that is strictly left of the column at which the number righti appears for all i from 0 to m - 1.
Return any matrix that satisfies the conditions. If no answer exists, return an empty matrix.

 

Example 1:


Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
Output: [[3,0,0],[0,0,1],[0,2,0]]
Explanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.
- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.
- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.
Example 2:

Input: k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
Output: []
Explanation: From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.
No matrix can satisfy all the conditions, so we return the empty matrix.
 

Constraints:

2 <= k <= 400
1 <= rowConditions.length, colConditions.length <= 104
rowConditions[i].length == colConditions[i].length == 2
1 <= abovei, belowi, lefti, righti <= k
abovei != belowi
lefti != righti
*/

function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {
  const buildMap = (k: number, conditions: number[][]) => {
    const map: number[][] = [];
    const sets: Set<number>[] = [];

    for (let i = 0; i <= k; i++) {
      sets.push(new Set<number>());
    }
    for (let x of conditions) {
      sets[x[0]].add(x[1]);
    }
    for (let i = 0; i <= k; i++) {
      map.push(Array.from(sets[i]));
    }

    return map;
  };
  const checkCircle = (k: number, map: number[][]) => {
    const stack: number[] = [];
    for (let i = 1; i <= k; i++) stack.push(i);
    const visited: boolean[] = new Array(k + 1).fill(false);
    const checked: boolean[] = new Array(k + 1).fill(false);
    let flag = false;
    const recursion = (x: number) => {
      if (checked[x]) return;
      if (visited[x]) {
        flag = true;
        return;
      }
      visited[x] = true;
      for (let i of map[x]!) {
        recursion(i);
        if (flag) return;
      }
      visited[x] = false;
      checked[x] = true;
    };
    for (let x of stack) {
      recursion(x);
      if (flag) return flag;
    }
    return flag;
  };
  const buildCompareMap = (a: number, map: number[][], compareMap: boolean[][]) => {
    const visited = new Map<number, boolean>();
    let arr = [a];
    visited.set(a, true);
    while (arr.length > 0) {
      let newArr = [];
      for (let x of arr) {
        for (let i of map[x]) {
          if (!visited.get(i)) {
            visited.set(i, true);
            newArr.push(i);
            compareMap[a][i] = true;
          }
        }
      }
      arr = newArr;
    }
  };
  const buildOrder = (map: number[][]) => {
    const ans: number[] = [];
    for (let i = 1; i <= k; i++) ans.push(i);
    const compareMap: boolean[][] = [];
    for (let i = 0; i <= k; i++) {
      compareMap.push(new Array(k + 1).fill(false));
    }

    for (let i = 1; i <= k; i++) {
      buildCompareMap(i, map, compareMap);
    }

    for (let i = 0; i < k; i++) {
      for (let j = i + 1; j < k; j++) {
        if (compareMap[ans[j]][ans[i]]) {
          const temp = ans[i];
          ans[i] = ans[j];
          ans[j] = temp;
        }
      }
    }

    return ans;
  };

  const rowMap = buildMap(k, rowConditions);
  const colMap = buildMap(k, colConditions);

  if (checkCircle(k, rowMap) || checkCircle(k, colMap)) {
    return [];
  }

  const colOrder = buildOrder(colMap);
  const rowOrder = buildOrder(rowMap);

  const ans: number[][] = [];
  const rowPos = new Map<number, number>();
  const colPos = new Map<number, number>();

  for (let i = 0; i < k; i++) {
    rowPos.set(rowOrder[i], i);
    colPos.set(colOrder[i], i);
    ans.push(new Array(k).fill(0));
  }

  for (let i = 1; i <= k; i++) {
    ans[rowPos.get(i)!][colPos.get(i)!] = i;
  }

  return ans;
}

console.log(
  buildMatrix(
    3,
    [
      [1, 2],
      [3, 2],
    ],
    [
      [2, 1],
      [3, 2],
    ]
  )
);
