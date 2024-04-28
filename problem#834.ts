/*
834. Sum of Distances in Tree
Solved
Hard
Topics
Companies
There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

You are given the integer n and the array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.

Return an array answer of length n where answer[i] is the sum of the distances between the ith node in the tree and all other nodes.

 

Example 1:


Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
Output: [8,12,6,10,10,10]
Explanation: The tree is shown above.
We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
equals 1 + 1 + 2 + 2 + 2 = 8.
Hence, answer[0] = 8, and so on.
Example 2:


Input: n = 1, edges = []
Output: [0]
Example 3:


Input: n = 2, edges = [[1,0]]
Output: [1,1]
 

Constraints:

1 <= n <= 3 * 104
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
The given input represents a valid tree.
*/

function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
  if (n === 1) return [0];
  const dFrom0: number[] = new Array(n).fill(0);
  const neighbor: number[][] = [];
  const level: number[] = new Array(n).fill(0);
  const visited: boolean[] = new Array(n).fill(false);
  const visited2: boolean[] = new Array(n).fill(false);
  const ans: number[] = new Array(n).fill(0);

  // --------------------------------------
  const setDFrom0 = (next: number[]) => {
    if (next.length === 0) return;
    const newNext = [];
    for (let x of next) {
      visited[x] = true;
      for (let y of neighbor[x]) {
        if (!visited[y]) {
          newNext.push(y);
          dFrom0[y] = dFrom0[x] + 1;
        }
      }
    }
    setDFrom0(newNext);
  };

  const markLevel = (node: number, parentNode: number, neighbor: number[][], level: number[]): number => {
    if (neighbor[node].length === 1 && node !== 0) {
      level[node] = 0;
      return 0;
    }
    for (let x of neighbor[node]) {
      if (x !== parentNode) {
        level[node] = level[node] + 1 + markLevel(x, node, neighbor, level);
      }
    }
    return level[node];
  };

  const solveTree = (root: number) => {
    visited2[root] = true;
    for (let x of neighbor[root]) {
      if (!visited2[x]) {
        ans[x] = ans[root] + (n - 2 - level[x]) - level[x];
        solveTree(x);
      }
    }
  };

  // ---------------------------------
  for (let x of edges) {
    if (!neighbor[x[0]]) neighbor[x[0]] = [];
    if (!neighbor[x[1]]) neighbor[x[1]] = [];
    neighbor[x[0]].push(x[1]);
    neighbor[x[1]].push(x[0]);
  }
  setDFrom0([0]);
  for (let x of dFrom0) ans[0] += x;
  markLevel(0, -1, neighbor, level);
  solveTree(0);
  return ans;
}
