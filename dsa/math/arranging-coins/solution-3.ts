//** Time complexity - O(1)

function arrangeCoins(n: number): number {
  return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
}

export {};

console.log(arrangeCoins(5));
