function numMagicSquaresInside(grid: number[][]): number {
	const col = grid[0].length;
	const row = grid.length;
	if (col < 3 || row < 3) return 0;
	const check = (x: number, y: number) => {
		const arr: number[] = [
			grid[x - 1][y - 1],
			grid[x][y - 1],
			grid[x - 1][y],
			grid[x][y],
			grid[x][y + 1],
			grid[x + 1][y],
			grid[x + 1][y + 1],
			grid[x - 1][y + 1],
			grid[x + 1][y - 1],
		];
		arr.sort((a, b) => a - b);
		for (let i of arr) {
			if (i > 9) return false;
		}
		for (let i = 1; i < 9; i++) {
			if (arr[i] === arr[i - 1]) return false;
		}
		const row1 = grid[x - 1][y - 1] + grid[x - 1][y] + grid[x - 1][y + 1];
		const row2 = grid[x][y - 1] + grid[x][y] + grid[x][y + 1];
		const row3 = grid[x + 1][y - 1] + grid[x + 1][y] + grid[x + 1][y + 1];
		const col1 = grid[x - 1][y - 1] + grid[x][y - 1] + grid[x + 1][y - 1];
		const col2 = grid[x - 1][y] + grid[x][y] + grid[x + 1][y];
		const col3 = grid[x - 1][y + 1] + grid[x][y + 1] + grid[x + 1][y + 1];
		const dia1 = grid[x - 1][y - 1] + grid[x][y] + grid[x + 1][y + 1];
		const dia2 = grid[x - 1][y + 1] + grid[x][y] + grid[x + 1][y - 1];
		const sumArr = [row1, row2, row3, col1, col2, col3, dia1, dia2];
		sumArr.sort((a, b) => a - b);
		for (let i = 1; i < sumArr.length; i++) {
			if (sumArr[i] !== sumArr[i - 1]) {
				return false;
			}
		}
		return true;
	};
	let ans = 0;
	for (let x = 1; x < row - 1; x++) {
		for (let y = 1; y < col - 1; y++) {
			if (check(x, y)) ans++;
		}
	}
	return ans;
}

console.log(
	numMagicSquaresInside([
		[10, 3, 5],
		[1, 6, 11],
		[7, 9, 2],
	])
);
