//* Time complexity - O(log n)

function arrangeCoins(n: number): number {
  let left = 1,
    right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const coinsNeeded = Math.floor((mid * (mid + 1)) / 2);

    if (coinsNeeded === n) {
      return mid;
    } else if (coinsNeeded < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

export {};

console.log(arrangeCoins(3));
