function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let longest: number = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    // shrink the window until duplicate removed
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[right]);

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
