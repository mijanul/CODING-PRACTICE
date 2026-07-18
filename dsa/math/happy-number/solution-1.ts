function isHappy(n: number): boolean {
  if (n < 0) return false;
  if (n === 1) return true;

  const seen: Set<number> = new Set();

  while (!seen.has(n) && n !== 1) {
    seen.add(n);

    let sum: number = 0;
    let temp: number = n;

    while (temp > 0) {
      const rem = temp % 10;
      sum += rem ** 2;
      temp = Math.floor(temp / 10);
    }

    n = sum;
  }

  return n === 1;
}

export {};

console.log(isHappy(19));
console.log(isHappy(2));
