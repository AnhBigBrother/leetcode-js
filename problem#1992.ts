function findFarmland(land: number[][]): number[][] {
  const m = land.length;
  const n = land[0].length;
  const ans: number[][] = [];
  let i = 0,
    j = 0;
  while (i < m) {
    j = 0;
    while (j < n) {
      if (land[i][j] === 1) {
        if ((i - 1 < 0 || land[i - 1][j] === 0) && (j - 1 < 0 || land[i][j - 1] === 0)) {
          ans.push([i, j]);
          let x = i,
            y = j;
          while (x + 1 < m && land[x + 1][j] === 1) {
            x++;
          }
          while (y + 1 < n && land[i][y + 1] === 1) {
            y++;
          }
          ans[ans.length - 1].push(x, y);
        }
      }
      j++;
    }
    i++;
  }
  return ans;
}

const land = [
  [1, 0, 0],
  [0, 1, 1],
  [0, 1, 1],
];
console.log(findFarmland(land));
