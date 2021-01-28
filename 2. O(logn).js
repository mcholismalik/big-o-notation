// binary search
function binarySearch(arr, v) {
  let start = 1;
  let end = arr.length;
  let mid = -1;

  while (start !== mid && end !== mid) {
    console.log({ start, end, mid, arr })

    mid = Math.ceil((end + start - 1) / 2);
    if (arr[mid - 1] === v) return mid - 1;

    if (arr[mid - 1] > v) {
      end -= 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

const res = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
console.log({ res });