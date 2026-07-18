function mergeAlternately(word1: string, word2: string): string {
  let left: number = 0;
  let right: number = 0;

  let n: number = word1.length;
  let m: number = word2.length;

  let res: string = "";

  while (left < n && right < m) {
    res += word1[left] + word2[right];
    left++;
    right++;
  }

  while (left < n) {
    res += word1[left];
    left++;
  }

  while (right < m) {
    res += word2[right];
    right++;
  }

  return res;
}

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("xy", "abcdefg"));
