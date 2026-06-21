function characterReplacement(s: string, k: number): number {
  let result: number = 0;
  let left = 0;
  let maxFreq = 0;

  let count: Record<string, number> = {};

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;

    maxFreq = Math.max(maxFreq, count[s[right]]);

    while (right - left + 1 - maxFreq > k) {
      count[s[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
}

console.log(characterReplacement("AABAA", 1));
