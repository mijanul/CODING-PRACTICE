//* Brute Force
function productExceptSelf(nums: number[]): number[] {
  //* Brute Force
  const output: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    let j = 0;
    let result: number | undefined = undefined;

    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      if (result === undefined) {
        result = nums[j];
      } else {
        result *= nums[j];
      }
    }

    output.push(result!);
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));

export {};
