function mergeAlternately(word1: string, word2: string): string {
  let n = word1.length;
  let m = word2.length;

  let res: string = "";

  let max: number = Math.max(n, m);

  for (let i = 0; i < max; i++) {
    if (i < n) res += word1[i];
    if (i < m) res += word2[i];
  }

  return res;
}

export {};

console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("xy", "abcdefg"));
