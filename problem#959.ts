/*
959. Regions Cut By Slashes
Solved
Medium
Topics
Companies
An n x n grid is composed of 1 x 1 squares where each 1 x 1 square consists of a '/', '\', or blank space ' '. These characters divide the square into contiguous regions.

Given the grid grid represented as a string array, return the number of regions.

Note that backslash characters are escaped, so a '\' is represented as '\\'.

 

Example 1:
Input: grid = [" /","/ "]
Output: 2


Example 2:
Input: grid = [" /","  "]
Output: 1


Example 3:
Input: grid = ["/\\","\\/"]
Output: 5
Explanation: Recall that because \ characters are escaped, "\\/" refers to \/, and "/\\" refers to /\.
 

Constraints:

n == grid.length == grid[i].length
1 <= n <= 30
grid[i][j] is either '/', '\', or ' '.
*/

function regionsBySlashes(grid: string[]): number {
	const n = grid.length;
	const matrix: number[][] = [];
	for (let i = 0; i < 3 * n; i++) matrix.push(new Array(3 * n).fill(0));
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === "\\") {
				matrix[3 * i][3 * j] = 1;
				matrix[3 * i + 1][3 * j + 1] = 1;
				matrix[3 * i + 2][3 * j + 2] = 1;
			} else if (grid[i][j] === "/") {
				matrix[3 * i][3 * j + 2] = 1;
				matrix[3 * i + 1][3 * j + 1] = 1;
				matrix[3 * i + 2][3 * j] = 1;
			}
		}
	}

	console.log(matrix);

	const DFS = (x: number, y: number) => {
		matrix[x][y] = 1;
		if (x - 1 >= 0 && matrix[x - 1][y] === 0) DFS(x - 1, y);
		if (x + 1 < 3 * n && matrix[x + 1][y] === 0) DFS(x + 1, y);
		if (y - 1 >= 0 && matrix[x][y - 1] === 0) DFS(x, y - 1);
		if (y + 1 < 3 * n && matrix[x][y + 1] === 0) DFS(x, y + 1);
	};

	let ans = 0;
	for (let i = 0; i < 3 * n; i++) {
		for (let j = 0; j < 3 * n; j++) {
			if (matrix[i][j] === 0) {
				ans++;
				DFS(i, j);
			}
		}
	}

	return ans;
}

console.log(regionsBySlashes(["//", "/ "]));
