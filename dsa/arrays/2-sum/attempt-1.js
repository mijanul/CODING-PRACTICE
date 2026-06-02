const nums = [3, 4, 5, 6];
const target = 7;

function twoSum(nums, target) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    let req = target - nums[i];

    if (req in seen) {
      return [seen[req], i];
    }

    seen[nums[i]] = i;
  }
}

console.log(twoSum(nums, target));
