function groupAnagrams(strs: string[]): string[][] {
  if (strs.length === 1) return [strs];
  const store = new Map<string, string[]>();

  for (let str of strs) {
    const count = new Array(26).fill(0);

    for (let ch of str) {
      count[ch.charCodeAt(0) - 97]++;
    }
    let key = count.join(",");

    if (!store.has(key)) {
      store.set(key, []);
    }

    store.get(key)!.push(str);
  }

  return [...store.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

export {};
