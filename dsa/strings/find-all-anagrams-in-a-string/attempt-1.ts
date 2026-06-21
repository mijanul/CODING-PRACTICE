function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) return [];
  const res: number[] = [];

  const pCount: number[] = new Array(26).fill(0);
  const windows: number[] = new Array(26).fill(0);

  for (let i = 0; i < p.length; i++) {
    pCount[p.charCodeAt(i) - 97]++;
    windows[s.charCodeAt(i) - 97]++;
  }

  if (isSame(pCount, windows)) {
    res.push(0);
  }

  let left = 0;

  for (let right = p.length; right < s.length; right++) {
    windows[s.charCodeAt(right) - 97]++;
    windows[s.charCodeAt(left) - 97]--;
    left++;
    if (isSame(windows, pCount)) {
      res.push(left);
    }
  }

  return res;
}

function isSame(a: number[], b: number[]) {
  for (let i = 0; i < 26; i++) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}
