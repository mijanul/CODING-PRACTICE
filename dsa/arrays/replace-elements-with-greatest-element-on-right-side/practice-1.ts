function replaceElements(arr: number[]): number[] {
  const nums: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      nums[i] = -1;
    } else {
      let j = i + 1;
      let max = arr[j];

      while (j < arr.length) {
        max = Math.max(max, arr[j]);
        j++;
      }

      nums[i] = max;
    }
  }

  return nums;
}

export {};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
