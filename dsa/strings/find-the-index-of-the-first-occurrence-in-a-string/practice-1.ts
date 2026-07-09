function strStr(haystack: string, needle: string): number {
  let left = 0;
  let right = needle.length;

  let res = -1;

  while (right <= haystack.length) {
    let str = haystack.slice(left, right);

    if (str === needle) {
      res = left;
      break;
    }

    left++;
    right++;
  }

  return res;
}

export {};

console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1
console.log(strStr("abc", "abc")); // 0
