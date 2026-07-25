function arrangeCoins(n: number): number {
  let start = 1;

  while (start <= n) {
    n -= start;
    start++;
  }

  return start - 1;
}

console.log(arrangeCoins(5));
