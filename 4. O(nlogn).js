function merge(L, R) {  
  const arr = [];

  let i = 0;
  let j = 0;
  while (arr.length < L.length + R.length) {
    if (L[i] !== undefined && R[j] !== undefined) {
      if (L[i] < R[j]) {
        arr.push(L[i]);
        i++;
      } else {
        arr.push(R[j]);
        j++;
      }
    } else {
      if (L[i] === undefined) { 
        arr.push(R[j]);
        j++;
      } else {
        arr.push(L[i]);
        i++;
      }
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const LSplit = arr.slice(0, mid);
  const RSplit = arr.slice(mid);
  const L = mergeSort(LSplit);
  const R = mergeSort(RSplit);
  return merge(L, R);
}

const res = mergeSort([100, 44, 10, 12, 33, 9, 5, 55, 3, 5]);
// const res = merge([55], [1,2,3]);
// const res = merge([2, 55], [1]);
// const res = merge([1], [9]);
console.log({ res });