function isSubsequence(s: string, t: string): boolean {
  let left = 0;

  for (let right = 0; right < t.length; right++) {
    console.log(s[left], t[right]);
    if (s[left] === t[right]) {
      left++;
    }
    console.log(s[left], t[right], left);
  }

  return left === s.length;
}

console.log(isSubsequence("abc", "ahbgdc"));
