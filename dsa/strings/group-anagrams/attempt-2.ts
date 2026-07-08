function groupAnagrams(strs: string[]): string[][] {
  let obj: Record<string, string[]> = {};

  for (let ch of strs) {
    const arr: number[] = new Array(26).fill(0);

    for (let c of ch) {
      arr[c.charCodeAt(0) - 97]++;
    }

    let key = arr.join(",")!;

    if (!obj[key]) {
      obj[key] = [];
    }
    obj[key].push(ch);
  }

  return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

export {};
