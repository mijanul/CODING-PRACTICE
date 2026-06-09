// Brute Force
function longestConsecutive(nums: number[]): number {
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    let res = 1;

    let j = 1;

    while (nums.includes(nums[i] + j)) {
      res++;

      j++;
    }

    maxLength = Math.max(maxLength, res);
  }

  return maxLength;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

export {};
