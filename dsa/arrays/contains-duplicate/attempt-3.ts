function hasDuplicate(nums: number[]): boolean {
  let seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }

    seen.add(nums[i]);
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 3]));

export {};
