function numSteps(s: string): number {
  const addOne = (arr: string[]) => {
    const n = arr.length;
    let memo = 1;
    arr[n - 1] = '0';
    for (let i = n - 2; i >= 0; i--) {
      if (memo === 1) {
        if (arr[i] === '0') {
          arr[i] = '1';
          memo = 0;
          return;
        } else {
          arr[i] = '0';
        }
      }
    }
    if (memo === 1) arr = ['1', ...arr];
  };

  const arr = s.split('');
  let ans = 0;
  while (arr.length > 1) {
    if (arr[arr.length - 1] === '1') {
      addOne(arr);
      ans++;
    }
    while (arr[arr.length - 1] === '0') {
      arr.pop();
      ans++;
    }
  }

  return ans;
}

console.log(numSteps('1'));
