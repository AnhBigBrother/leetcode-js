function tribonacci(n: number): number {
  const tribon: number[] = [];
  tribon.push(0, 1, 1);
  for (let i = 3; i <= n; i++) {
    tribon[i] = tribon[i - 3] + tribon[i - 2] + tribon[i - 1];
  }
  return tribon[n];
}

console.log(tribonacci(38));
