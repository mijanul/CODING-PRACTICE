function maxArea(height: number[]): number {
  let result: number = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let lowHeight = Math.min(height[left], height[right]);
    let distance = right - left;

    let area = lowHeight * distance;

    if (area > result) {
      result = area;
    }

    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return result;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
