function trap(height: number[]): number {
  if (height.length < 3) return 0;

  let water: number = 0;

  let left = 0,
    right = height.length - 1;

  let leftMax = 0,
    rightMax = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(height[left], leftMax);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(height[right], rightMax);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
