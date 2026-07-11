function replaceElements(arr: number[]): number[] {
  const nums: number[] = [];
  let current = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    nums[i] = current;
    current = Math.max(current, arr[i]);
  }

  return nums;
}

export {};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
