function containsNearbyDuplicate(nums: number[], k: number): boolean {
  if (nums.length < 2) return false;
  let seen: Map<number, number> = new Map();
  let dist: number = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      dist = Math.abs(seen.get(nums[i])! - i);
      if (dist <= k) return true;
    }

    seen.set(nums[i], i);
  }

  return dist <= k;
}

console.log(containsNearbyDuplicate([1, 2], 2));
