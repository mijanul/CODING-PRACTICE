//* Floyd's Cycle Detection (Tortoise and Hare)

function nextGen(n: number): number {
  let sum: number = 0;

  while (n > 0) {
    let rem: number = n % 10;
    sum += rem ** 2;
    n = Math.floor(n / 10);
  }

  return sum;
}

function isHappy(n: number): boolean {
  let slow: number = nextGen(n);
  let fast: number = nextGen(slow);

  while (fast !== 1 && slow !== fast) {
    slow = nextGen(slow);
    fast = nextGen(nextGen(fast));
  }

  return fast === 1;
}

export {};

console.log(isHappy(19));
