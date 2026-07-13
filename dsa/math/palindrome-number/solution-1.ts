function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
  let num = x;
  let reverse = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reverse === x;
}

export {};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
