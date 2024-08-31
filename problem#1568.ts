/*
1568. Minimum Number of Days to Disconnect Island
Solved
Hard
Topics
Companies
Hint
You are given an m x n binary grid grid where 1 represents land and 0 represents water. An island is a maximal 4-directionally (horizontal or vertical) connected group of 1's.

The grid is said to be connected if we have exactly one island, otherwise is said disconnected.

In one day, we are allowed to change any single land cell (1) into a water cell (0).

Return the minimum number of days to disconnect the grid.

 

Example 1:


Input: grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]

Output: 2
Explanation: We need at least 2 days to get a disconnected grid.
Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.
Example 2:


Input: grid = [[1,1]]
Output: 2
Explanation: Grid of full water is also disconnected ([[1,1]] -> [[0,0]]), 0 islands.
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 30
grid[i][j] is either 0 or 1.
*/

export {};

function minDays(grid: number[][]): number {
	const m = grid.length;
	const n = grid[0].length;

	const count = () => {
		let islands = 0;
		const visited: boolean[][] = [];
		for (let i = 0; i < m; i++) visited.push(new Array(n));

		const DFS = (x: number, y: number) => {
			visited[x][y] = true;
			if (x - 1 >= 0 && grid[x - 1][y] === 1 && !visited[x - 1][y]) DFS(x - 1, y);
			if (x + 1 < m && grid[x + 1][y] === 1 && !visited[x + 1][y]) DFS(x + 1, y);
			if (y - 1 >= 0 && grid[x][y - 1] === 1 && !visited[x][y - 1]) DFS(x, y - 1);
			if (y + 1 < n && grid[x][y + 1] === 1 && !visited[x][y + 1]) DFS(x, y + 1);
		};

		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid[i][j] === 1 && !visited[i][j]) {
					DFS(i, j);
					islands++;
				}
			}
		}
		return islands;
	};

	if (count() !== 1) return 0;

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === 1) {
				grid[i][j] = 0;
				if (count() !== 1) return 1;
				grid[i][j] = 1;
			}
		}
	}

	return 2;
}

console.log(minDays([[1, 1]]));
