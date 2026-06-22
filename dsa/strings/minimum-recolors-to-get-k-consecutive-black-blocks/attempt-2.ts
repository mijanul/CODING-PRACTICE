function minimumRecolors(blocks: string, k: number): number {
  let res: number = 0;
  let white: number = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") white++;
  }

  res = white;

  // slide window

  for (let right = k; right < blocks.length; right++) {
    if (blocks[right - k] === "W") white--;

    if (blocks[right] === "W") white++;

    res = Math.min(res, white);
  }

  return res;
}

console.log(minimumRecolors("WBWBBBW", 2)); // 0
console.log(minimumRecolors("WBBWWBBWBW", 7)); // 3
console.log(minimumRecolors("BWWWBB", 6)); // 3
