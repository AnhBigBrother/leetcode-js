/*
2045. Second Minimum Time to Reach Destination
Solved
Hard
Topics
Companies
Hint
A city is represented as a bi-directional connected graph with n vertices where each vertex is labeled from 1 to n (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself. The time taken to traverse any edge is time minutes.

Each vertex has a traffic signal which changes its color from green to red and vice versa every change minutes. All signals change at the same time. You can enter a vertex at any time, but can leave a vertex only when the signal is green. You cannot wait at a vertex if the signal is green.

The second minimum value is defined as the smallest value strictly larger than the minimum value.

For example the second minimum value of [2, 3, 4] is 3, and the second minimum value of [2, 2, 4] is 4.
Given n, edges, time, and change, return the second minimum time it will take to go from vertex 1 to vertex n.

Notes:

You can go through any vertex any number of times, including 1 and n.
You can assume that when the journey starts, all signals have just turned green.
 

Example 1:

       
Input: n = 5, edges = [[1,2],[1,3],[1,4],[3,4],[4,5]], time = 3, change = 5
Output: 13
Explanation:
The figure on the left shows the given graph.
The blue path in the figure on the right is the minimum time path.
The time taken is:
- Start at 1, time elapsed=0
- 1 -> 4: 3 minutes, time elapsed=3
- 4 -> 5: 3 minutes, time elapsed=6
Hence the minimum time needed is 6 minutes.

The red path shows the path to get the second minimum time.
- Start at 1, time elapsed=0
- 1 -> 3: 3 minutes, time elapsed=3
- 3 -> 4: 3 minutes, time elapsed=6
- Wait at 4 for 4 minutes, time elapsed=10
- 4 -> 5: 3 minutes, time elapsed=13
Hence the second minimum time is 13 minutes.      
Example 2:


Input: n = 2, edges = [[1,2]], time = 3, change = 2
Output: 11
Explanation:
The minimum time path is 1 -> 2 with time = 3 minutes.
The second minimum time path is 1 -> 2 -> 1 -> 2 with time = 11 minutes.
 

Constraints:

2 <= n <= 104
n - 1 <= edges.length <= min(2 * 104, n * (n - 1) / 2)
edges[i].length == 2
1 <= ui, vi <= n
ui != vi
There are no duplicate edges.
Each vertex can be reached directly or indirectly from every other vertex.
1 <= time, change <= 103
*/

function secondMinimum(n: number, edges: number[][], time: number, change: number): number {
  const neighbor: number[][] = [];
  for (let i = 0; i <= n; i++) neighbor.push([]);
  for (let x of edges) {
    neighbor[x[0]].push(x[1]);
    neighbor[x[1]].push(x[0]);
  }

  const minToN: number[] = new Array(n + 1);
  minToN[n] = 0;
  let arr1: number[] = [n];
  while (arr1.length > 0) {
    let newArr: number[] = [];
    for (let x of arr1) {
      if (x === 1) {
        continue;
      }
      for (let i of neighbor[x]) {
        if (minToN[i] === undefined) {
          minToN[i] = minToN[x] + 1;
          newArr.push(i);
        }
      }
    }
    arr1 = newArr;
  }

  const minFrom1: number[] = new Array(n + 1);
  minFrom1[1] = 0;
  let arr2: number[] = [1];
  while (arr2.length > 0) {
    let newArr: number[] = [];
    for (let x of arr2) {
      if (x === n) {
        continue;
      }
      for (let i of neighbor[x]) {
        if (minFrom1[i] === undefined) {
          minFrom1[i] = minFrom1[x] + 1;
          newArr.push(i);
        }
      }
    }
    arr2 = newArr;
  }

  let flag = false;
  const visited: boolean[] = new Array(n + 1);
  visited[1] = true;
  let arr3: number[] = [1];
  while (arr3.length > 0) {
    let newArr: number[] = [];
    for (let x of arr3) {
      for (let i of neighbor[x]) {
        if (minFrom1[i] === minFrom1[x] && minFrom1[i] + minToN[i] === minFrom1[n]) {
          flag = true;
          break;
        }
        if (!visited[i]) {
          visited[i] = true;
          newArr.push(i);
        }
      }
      if (flag) break;
    }
    if (flag) break;
    arr3 = newArr;
  }

  let minPath = minFrom1[n];
  let secondMin = flag ? minPath + 1 : minPath + 2;
  let ans = 0;
  while (secondMin > 0) {
    let x = Math.floor(ans / change);
    if (x % 2 === 1) {
      ans = (x + 1) * change;
    }
    ans += time;
    secondMin--;
  }

  return ans;
}

console.log(
  secondMinimum(
    5,
    [
      [3, 1],
      [1, 4],
      [5, 4],
      [3, 2],
      [1, 2],
      [2, 5],
      [3, 5],
    ],
    5,
    4
  )
);
