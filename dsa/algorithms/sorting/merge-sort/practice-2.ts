function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums;

  const mid: number = Math.floor(nums.length / 2);

  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

console.log(mergeSort([1, 9, 2, 3, 3, 5, 7, 8]));
