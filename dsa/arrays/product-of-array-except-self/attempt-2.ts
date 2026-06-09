function productExceptSelf(nums: number[]): number[] {
  const result: number[] = Array(nums.length).fill(1);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] *= prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));

export {};
