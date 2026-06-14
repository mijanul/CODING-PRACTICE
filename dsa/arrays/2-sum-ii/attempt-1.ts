function twoSum(numbers: number[], target: number): number[] {
  if (numbers.length < 2) return numbers;

  const indices: number[] = [];

  let left = 0,
    right = numbers.length - 1;

  while (left < right) {
    let sub = numbers[left] + numbers[right];

    if (sub === target) {
      indices.splice(0, 0, left + 1, right + 1);
      break;
    } else if (sub > target) {
      right--;
    } else {
      left++;
    }
  }

  return indices;
}

console.log(twoSum([-1, 0], -1));

export {};
