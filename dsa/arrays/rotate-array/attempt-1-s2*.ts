//* Reverse Algorithm - Time O(n) , Space O(1)
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const n = nums.length;

  k %= n;

  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);

  function reverse(arr: number[], left: number, right: number) {
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  console.log(nums);
}

rotate([1, 2, 3, 4, 5, 6, 7, 8], 4);

export {};
