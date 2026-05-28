import re

def isValidPalindrome (s):
  cleaned = re.sub(r'[^a-z0-9]', '', s.lower())
  start = 0
  end = len(cleaned) - 1

  while (end > start):
    if (cleaned[start] != cleaned[end]):
      return False
    
    start += 1
    end -= 1
  
  return True

print(isValidPalindrome('madam')) # True
print(isValidPalindrome("tab a bat")) # True
print(isValidPalindrome('Hello Python')) # False

