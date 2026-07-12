function kthDistinct(arr: string[], k: number): string {
  const map: Map<string, number> = new Map();

  for (let word of arr) {
    map.set(word, (map.get(word) || 0) + 1);
  }

  for (let word of arr) {
    if (map.get(word) === 1) {
      k--;
    }

    if (k === 0) {
      return word;
    }
  }

  return "";
}

export {};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); // a
console.log(kthDistinct(["aaa", "aa", "a"], 1)); // aaa
console.log(kthDistinct(["a", "b", "a"], 3));
