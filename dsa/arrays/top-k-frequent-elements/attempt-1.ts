function topKFrequent(nums: number[], k: number): number[] {
  const store: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = (store[nums[i]] || 0) + 1;
  }

  const buckets: number[][] = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (const [nums, count] of Object.entries(store)) {
    buckets[count].push(Number(nums));
  }

  const result: number[] = [];

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }

  return result.slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
