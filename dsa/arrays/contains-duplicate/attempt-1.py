from typing import List


def containsDuplicate( nums: List[int]) -> bool:
  seen = {}

  for i in nums:

    if (seen(nums[i])):
      return True

    seen[nums[i]]

  return False


print(containsDuplicate([1,2,3,1]))