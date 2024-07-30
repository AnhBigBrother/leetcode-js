export const quicksort = (arr: number[]) => {
  const ans = [...arr];
  const solve = (l: number, r: number, arr: number[]) => {
    let i = l,
      j = r,
      midVal = arr[Math.floor(l / 2 + r / 2)];
    while (i < j) {
      while (arr[i] < midVal) {
        i++;
      }
      while (arr[j] > midVal) {
        j--;
      }
      if (i <= j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
      }
    }
    if (i < r) solve(i, r, arr);
    if (l < j) solve(l, j, arr);
  };
  solve(0, ans.length - 1, ans);

  return ans;
};

const merge = (left: number[], right: number[]) => {
  let ans: number[] = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      ans.push(left[i]);
      i++;
    } else {
      ans.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    ans.push(left[i]);
    i++;
  }
  while (j < right.length) {
    ans.push(right[j]);
    j++;
  }

  return ans;
};

export const mergeSort = (arr: number[]): number[] => {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftHaft = arr.slice(0, mid);
  let rightHaft = arr.slice(mid);

  const sortedLeft = mergeSort(leftHaft);
  const sortedRight = mergeSort(rightHaft);

  return merge(sortedLeft, sortedRight);
};
