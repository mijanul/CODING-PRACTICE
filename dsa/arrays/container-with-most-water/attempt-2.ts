function maxArea(heights: number[]): number {
  let left = 0;
  let right = heights.length - 1;

  let result = 0;

  while (left < right) {
    let lowHeight = Math.min(heights[left], heights[right]);

    let distance = right - left;

    let area = lowHeight * distance;

    console.log(area);

    result = Math.max(area, result);

    if (heights[left] > heights[right]) {
      right--;
    } else {
      left++;
    }
  }

  return result;
}

export {};

console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6])); // 36
