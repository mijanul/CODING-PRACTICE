//* Extra Array - Time O(n) , space O(n)

/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let n = nums.length;
  k %= n;

  const arr: number[] = new Array(n);

  for (let i = 0; i < n; i++) {
    arr[(i + k) % n] = nums[i];
  }

  for (let i = 0; i < n; i++) {
    nums[i] = arr[i];
  }

  console.log(arr);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);

export {};
