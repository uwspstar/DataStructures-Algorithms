/*

Selection Sort Pseudocode

Store the first element as the smallest value you've seen so far.
Compare this item to the next item in the array until you find a smaller number.
If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
If the "minimum" is not the value (index) you initially began with, swap the two values.
Repeat this with the next element until the array is sorted.

*/


const selectionSort = function (arr) {
  if(arr.length < 2) return arr;
  for (let i = 0; i < arr.length; i++) {
    let smallIdx = i;
    for (let j = smallIdx; j < arr.length; j++) {
      if (arr[j] < arr[smallIdx]) {
        smallIdx = j;
      }
    }
    if(i !== smallIdx) {
      [arr[i], arr[smallIdx]] = [arr[smallIdx], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([5,4,3,2,1]));
