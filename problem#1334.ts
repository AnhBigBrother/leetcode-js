/*
1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
Solved
Medium
Topics
Companies
Hint
There are n cities numbered from 0 to n-1. Given the array edges where edges[i] = [fromi, toi, weighti] represents a bidirectional and weighted edge between cities fromi and toi, and given the integer distanceThreshold.

Return the city with the smallest number of cities that are reachable through some path and whose distance is at most distanceThreshold, If there are multiple such cities, return the city with the greatest number.

Notice that the distance of a path connecting cities i and j is equal to the sum of the edges' weights along that path.

 

Example 1:


Input: n = 4, edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], distanceThreshold = 4
Output: 3
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 4 for each city are:
City 0 -> [City 1, City 2] 
City 1 -> [City 0, City 2, City 3] 
City 2 -> [City 0, City 1, City 3] 
City 3 -> [City 1, City 2] 
Cities 0 and 3 have 2 neighboring cities at a distanceThreshold = 4, but we have to return city 3 since it has the greatest number.
Example 2:


Input: n = 5, edges = [[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], distanceThreshold = 2
Output: 0
Explanation: The figure above describes the graph. 
The neighboring cities at a distanceThreshold = 2 for each city are:
City 0 -> [City 1] 
City 1 -> [City 0, City 4] 
City 2 -> [City 3, City 4] 
City 3 -> [City 2, City 4]
City 4 -> [City 1, City 2, City 3] 
The city 0 has 1 neighboring city at a distanceThreshold = 2.
 

Constraints:

2 <= n <= 100
1 <= edges.length <= n * (n - 1) / 2
edges[i].length == 3
0 <= fromi < toi < n
1 <= weighti, distanceThreshold <= 10^4
All pairs (fromi, toi) are distinct.
*/

function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
  const map: number[][] = [];
  const neighbor: number[][] = [];
  for (let i = 0; i < n; i++) {
    map.push(new Array(n));
    neighbor.push([]);
  }

  for (let ed of edges) {
    if (ed[2] <= distanceThreshold) {
      map[ed[0]][ed[1]] = ed[2];
      map[ed[1]][ed[0]] = ed[2];
      neighbor[ed[0]].push(ed[1]);
      neighbor[ed[1]].push(ed[0]);
    }
  }

  const solve = (root: number, x: number) => {
    for (let i of neighbor[x]) {
      if (
        (map[root][i] === undefined || map[root][x] + map[x][i] < map[root][i]) &&
        map[root][x] + map[x][i] <= distanceThreshold
      ) {
        map[root][i] = map[root][x] + map[x][i];
        solve(root, i);
      }
    }
  };

  for (let x = 0; x < n; x++) {
    map[x][x] = 0;
    for (let i of neighbor[x]) {
      solve(x, i);
    }
  }

  // console.log(neighbor);
  // console.log(map);

  let ans = 0;
  let count = -1;
  for (let i = 0; i < n; i++) {
    let c = 0;
    for (let j = 0; j < n; j++) {
      if (map[i][j]) c++;
    }
    if (count === -1 || c <= count) {
      ans = i;
      count = c;
    }
  }

  return ans;
}

console.log(
  findTheCity(
    8,
    [
      [3, 5, 9558],
      [1, 2, 1079],
      [1, 3, 8040],
      [0, 1, 9258],
      [4, 7, 7558],
      [5, 6, 8196],
      [3, 4, 7284],
      [1, 5, 6327],
      [0, 4, 5966],
      [3, 6, 8575],
      [2, 5, 8604],
      [1, 7, 7782],
      [4, 6, 2857],
      [3, 7, 2336],
      [0, 6, 6],
      [5, 7, 2870],
      [4, 5, 5055],
      [0, 7, 2904],
      [1, 6, 2458],
      [0, 5, 3399],
      [6, 7, 2202],
      [0, 2, 3996],
      [0, 3, 7495],
      [1, 4, 2262],
      [2, 6, 1390],
    ],
    7937
  )
);
