function intersection(nums1: number[], nums2: number[]): number[] {
  const set: Set<number> = new Set(nums1);
  const store: Set<number> = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      store.add(nums2[i]);
    }
  }
  return [...store];
}

export {};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // [9,4]
