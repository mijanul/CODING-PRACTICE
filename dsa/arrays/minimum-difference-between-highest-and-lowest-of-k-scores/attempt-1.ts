function minimumDifference(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let res: number = Infinity;

  let sorted = mergeSort(nums); // arr.sort((a,b) => a - b )

  // notice the -k ; that's important , so always get valid index
  for (let i = 0; i <= sorted.length - k; i++) {
    res = Math.min(res, sorted[i + k - 1] - sorted[i]);
  }

  return res;
}

// merge sort

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  let mid: number = Math.floor(arr.length / 2);

  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  const res: number[] = [];

  let i: number = 0;
  let j: number = 0;

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

console.log(minimumDifference([2, 5, 3, 1, 6, 3], 3));
