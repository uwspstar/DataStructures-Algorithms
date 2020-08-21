// binary Search arr is sorted
// use two pointers, start and end, mid = (start + end) >> 1
// Original Solution
// https://medium.com/jsunderthescope/a-recursive-binary-search-in-javascript-b29efaff64d6
// O(log n) ( the best sort, will be nlogn)

const binarySearch1 = (arr, num) => {

  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === num;

  if (arr[0] > num) return -1; //binary ordered 
  if (arr[arr.length - 1] < num) return -1;

  let start = 0;
  let end = arr.length - 1
  while (start <= end) { // need <=, not <
    let mid = (start + end) >> 1;
    if (arr[mid] === num) return 1;
    arr[mid] > num ? end = mid - 1 : start = mid + 1;
  }
  return -1;
}
const binarySearch = (arr, num) => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === num;
  if (arr[0] > num) return -1;
  if (arr[arr.length - 1] < num) return -1;

  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (arr[mid] === num) return 1;
    arr[mid] > num ? end = mid - 1 : start = mid + 1;
  }
  return -1;
}
const binarySearchRecursive = (arr, num, start = 0, end = arr.length - 1) => {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === num;

  if (arr[start] > num) return -1;
  if (arr[end] < num) return -1;
  //since recursive does not use loop, need to put the loop condition outside
  if (start > end) return -1;

  let mid = (start + end) >> 1;

  if (arr[mid] === num) return 1;
  return arr[mid] > num ?
    binarySearchRecursive(arr, num, start, end = mid - 1) :
    binarySearchRecursive(arr, num, start = mid + 1, end)
}
const recursiveFunction = function (arr, x, start, end) {
  if (arr.length === 0) return false;
  if (start > end) return false;
  let mid = (start + end) >> 1;
  if (arr[mid] === x) return true;
  return arr[mid] > x ?
    recursiveFunction(arr, x, start, mid - 1) : recursiveFunction(arr, x, mid + 1, end);
}

console.log('binarySearch', binarySearch([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], -5));
console.log('recursiveFunction', binarySearch([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], -5));
console.log('binarySearchRecursive', binarySearch([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], -5));
//console.log('binarySearchRecursive', binarySearchRecursive([-1, 0, 1, 3, 5, 6, 7, 10, 20, 30, 50], 5));




