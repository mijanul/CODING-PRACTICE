function removeDuplicates(nums: number[]): number {
  let left = 0;

  for (let right = 1; right < nums.length; right++) {
    if (nums[right] !== nums[left]) {
      left++;
      nums[left] = nums[right];
    }
  }

  nums.length = left + 1;

  console.log(nums);

  return left + 1;
}

export {};

console.log(removeDuplicates([1, 1, 2])); // 2 and arr =  [1,2,_]
