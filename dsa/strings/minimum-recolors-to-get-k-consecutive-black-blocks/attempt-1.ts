/** 

* Complexity

* Your code:

* Outer loop → n
* Inner loop → k

* Total:

* O(n × k)

*/

function minimumRecolors(blocks: string, k: number): number {
  let res: number = Infinity;

  for (let i = 0; i < blocks.length; i++) {
    if (!blocks[i + k - 1]) break;
    let count = 0;
    let right = 0;

    while (right < k) {
      if (blocks[i + right] === "W") {
        count++;
      }
      right++;
    }

    res = Math.min(res, count);
    console.log("res is now:", res);
  }

  return res;
}

// console.log(minimumRecolors("WBWBBBW", 2)); // 0
// console.log(minimumRecolors("WBBWWBBWBW", 7)); // 3
console.log(minimumRecolors("BWWWBB", 6)); // 3
