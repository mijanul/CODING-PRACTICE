nums = [3, 4, 5, 6];
target = 7;

def twoSum (nums, target):
    seen = {}
    for (i, value) in enumerate(nums):
        req = target - value
        if (req in seen):
            return [seen[req], i]
        seen[value] = i


print(twoSum(nums, target))