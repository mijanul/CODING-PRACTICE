// Input: s = "anagram", t = "nagaram"
// Output: true

// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const store = {};

  for (let ch of s) {
    store[ch] = (store[ch] || 0) + 1;
  }

  for (let ch of t) {
    if (!store[ch]) return false;
    store[ch] = store[ch] - 1;
  }

  return true;
}

console.log(isAnagram("anaaaaa", "anagram"));
