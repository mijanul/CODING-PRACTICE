function topKFrequent(nums: number[], k: number) {
  const count: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1;
  }

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => +item[0]);
}

export {};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
