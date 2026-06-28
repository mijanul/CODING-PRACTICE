// | Approach       | Time     | Space                     |
// | -------------- | -------- | ------------------------- |
// | Your solution  | O(n × m) | O(26) + temporary strings |
// | Sliding Window | O(n)     | O(26)                     |

function checkInclusion(s1: string, s2: string): boolean {
  function convert(str: string) {
    let value = new Array(26).fill(0);

    for (let ch of str) {
      value[ch.charCodeAt(0) - 97]++;
    }
    return value.join(",");
  }

  const convertedS1 = convert(s1);
  const lengthS1 = s1.length;

  let res: boolean = false;

  for (let i = 0; i <= s2.length - lengthS1; i++) {
    let current = convert(s2.slice(i, i + lengthS1));

    if (current === convertedS1) {
      res = true;
      break;
    }
  }

  return res;
}

console.log(checkInclusion("ab", "eidboaoo"));
