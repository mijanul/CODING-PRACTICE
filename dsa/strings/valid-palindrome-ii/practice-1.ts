function validPalindrome(s: string): boolean {
  function isPalindrome(left: number, right: number): boolean {
    while (left < right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
    }
    left++;
    right--;
  }

  return true;
}

export {};

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abc")); // false
console.log(validPalindrome("abbda")); // true
console.log(validPalindrome("acdccba")); // false
