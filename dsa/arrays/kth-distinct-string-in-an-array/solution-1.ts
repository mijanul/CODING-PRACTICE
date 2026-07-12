function kthDistinct(arr: string[], k: number): string {
  let set: Set<string> = new Set();

  let duplicate: Set<string> = new Set();

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];

    if (set.has(value)) {
      set.delete(value);
      duplicate.add(value);
    }
    if (!duplicate.has(value)) {
      set.add(value);
    }
  }

  console.log([...set]);

  return [...set][k - 1] ?? "";
}

export {};

console.log(kthDistinct(["d", "b", "c", "b", "c", "a"], 2)); // a
console.log(kthDistinct(["aaa", "aa", "a"], 1)); // aaa
console.log(kthDistinct(["a", "b", "a"], 3));
