function lengthOfLongestSubstring(s: string): number {
  const set: Set<string> = new Set();
  let longestLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    longestLen = Math.max(longestLen, right - left + 1);
  }

  return longestLen;
}

export {};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
