/*
1971. Find if Path Exists in Graph
Solved
Easy
Topics
Companies
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

You want to determine if there is a valid path that exists from vertex source to vertex destination.

Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

 

Example 1:


Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
Output: true
Explanation: There are two paths from vertex 0 to vertex 2:
- 0 → 1 → 2
- 0 → 2
Example 2:


Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
Output: false
Explanation: There is no path from vertex 0 to vertex 5.
 

Constraints:

1 <= n <= 2 * 105
0 <= edges.length <= 2 * 105
edges[i].length == 2
0 <= ui, vi <= n - 1
ui != vi
0 <= source, destination <= n - 1
There are no duplicate edges.
There are no self edges.
*/

function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  if (source === destination) return true;
  const neighbor: number[][] = [];
  const visited: boolean[] = [];
  for (let i = 0; i < n; i++) {
    neighbor.push([]);
    visited.push(false);
  }
  for (let x of edges) {
    neighbor[x[0]].push(x[1]);
    neighbor[x[1]].push(x[0]);
  }
  console.log(neighbor);
  const BFS = (destination: number, neighbor: number[][], next: number[], visited: boolean[]): boolean => {
    if (next.length === 0) return false;
    const newNext: number[] = [];
    for (let x of next) {
      for (let k of neighbor[x]) {
        if (!visited[k]) {
          if (k === destination) return true;
          newNext.push(k);
          visited[k] = true;
        }
      }
    }
    return BFS(destination, neighbor, newNext, visited);
  };
  return BFS(destination, neighbor, [source], visited);
}

const n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  source = 0,
  destination = 5;
console.log(validPath(n, edges, source, destination));
