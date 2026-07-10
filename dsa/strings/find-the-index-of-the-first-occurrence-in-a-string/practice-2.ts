function strStr(haystack: string, needle: string): number {
  let m = haystack.length;
  let n = needle.length;

  if (n === 0) return 0;
  if (m === n && haystack === needle) return 0;

  for (let i = 0; i <= m - n; i++) {
    let j = 0;

    while (j < n && haystack[i + j] === needle[j]) {
      j++;
    }

    if (j === n) {
      return i;
    }
  }
  return -1;
}

export {};

// console.log(strStr("sadbutsad", "sad")); // 0
// console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("abc", "abc")); // 0
