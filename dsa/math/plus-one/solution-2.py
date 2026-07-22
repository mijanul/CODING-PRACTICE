from typing import List


def plusOne( digits: List[int]) -> List[int]:
  n = len(digits) - 1

  for i in range(n, -1, -1):
    if (digits[i] < 9) :
      digits[i] += 1
      return digits

    digits[i] = 0
  
  digits.insert(0, 1);
  return digits


print(plusOne([1,3,9,9]))