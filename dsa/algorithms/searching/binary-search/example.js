// Binary Search
const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Only works on sorted Arr

function binarySearch(arr, target) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (arr[mid] === target) {
      return mid;
    }

    if (target > arr[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(sortedArr, 4)); // Find the index of 4 from the sortedArr
