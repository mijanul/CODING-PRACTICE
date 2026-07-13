function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let i = 0;
  let j = 0;
  const res: number[] = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    res.push(left[i]);
    i++;
  }

  while (j < right.length) {
    res.push(right[j]);
    j++;
  }

  return res;
}

console.log(mergeSort([1, 9, 2, 3, 3, 5, 7, 8]));
