function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    // process only if sequence starts here
    if (!set.has(nums[i] - 1)) {
      let current = nums[i];
      let length = 1;

      while (set.has(current + 1)) {
        current += 1;
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));

export {};
