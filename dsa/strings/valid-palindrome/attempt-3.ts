function isPalindrome(s: string): boolean {
  let si = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

  let left = 0;
  let right = si.length - 1;

  while (left < right) {
    if (si[left] !== si[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
