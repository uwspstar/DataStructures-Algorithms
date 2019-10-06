/*

Insertion Sort Pseudocode


Start by picking the second element in the array
Now compare the second element with the one before it and swap if necessary.
Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
Repeat until the array is sorted

*/
const insertSort = function (arr) {
  let i, j;
  for ( i = 1; i < arr.length; i++) {
    let current = arr[i];
    for ( j = i - 1; j >= 0; j--) {
      if (current < arr[j]) {
        arr[j+1] = arr[j];
      } else break;
    }
    arr[j+1] = current;
  }
  return arr;
}
console.log(insertSort([5,4,3,2,1]));



function insertionSort(arr) {
    var currentVal;
    for(var i = 1; i < arr.length; i++) {
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])
