// merge
const merge = function (left, right) {

  let result = [];
  while(left.length > 0 && right.length > 0) {
    if(left[0] < right[0]) { 
      //if(left.shift() < right.shift()) {
      //do not use shift() compare, it remove element first
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result,...left,...right];
}
//console.log(merge([1,3,5,7],[2,4,6]));

// sort
const mergeSort = function (arr) {

  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([0, 1, 5, 4, 3, 2, 6]));
