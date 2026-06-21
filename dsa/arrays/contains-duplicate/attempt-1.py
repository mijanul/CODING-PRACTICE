from typing import List


def containsDuplicate(self, nums: List[int]) -> bool:
  seen = {}

  for i in nums:

    if (seen(nums[i])):
      return True

    seen[nums[i]]

  return False