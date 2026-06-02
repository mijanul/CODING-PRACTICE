function nextGreaterElement(nums1, nums2) {
  const map = {};
  const stack = [];

  for (let num of nums2) {
    while (stack.length && stack[stack.length - 1] < num) {
      map[stack.pop()] = num;
    }
    stack.push(num);
  }
  while (stack.length) {
    map[stack.pop()] = -1;
  }

  return nums1.map((item) => map[item]);
}

console.log(nextGreaterElement([1, 2, 3], [1, 3, 2, 4]));
