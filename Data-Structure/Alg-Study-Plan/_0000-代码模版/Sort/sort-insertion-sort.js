/*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344156#overview 

Insertion Sort : O (N^2)

Builds up the sort by gradually creating a larger left half which is always sorted ( the left side is sorted)

Insertion : start from second element, move to index , insert the element to left sorted array

Insertion Sort Pseudocode

- Start by picking the second element (i = 1; i++) in the array
Now compare the second element (current = arr[i];) with the one before (j--) it and arr[j+1] = arr[j].

- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted
 
Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort 

In the insertion sort algorithm, we make the code believe that an item in the array is a sorted list. The algorithm then compares all the items in the array before it and decides where that “sorted list” needs to be inserted in the array.

https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e

We will use nested loops to perform the sorting. 
O(N^2)
1. First, outer for loop, we will take second element from the array and check if its greater or smaller than the element before it. let current = arr[i] ; i = 1; i++

3. The inner loop will start from left side next current item (j = i - 1; j--).  
 
4. compare the outer loops element with the inner loops element. If the outer loop’s element is smaller, then we will move it to the position of the inner loop’s element and vice versa. To do this we will use the array’s slice method ( the insert part )

*/

//assume left is sorted, start second item
//------------------------------------
//       4            4         4
//[3, 6, 4] -> [3, 6, 6] -> [3, 4, 6]
//    j  i  ->               j  j+1
//------------------------------------

// [3, 6, 4] assume 4 is current
// left is sorted
// i = 1 (start at second item)
// assume the current is init biggest, compare with all left side, find where need to insert
// no swap
const insertionSort = function (arr) {
    if (arr === null) return arr;
    if (arr.length < 2) return arr;

    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > curr) {
                arr[j + 1] = arr[j];
            } else break;  // need else break, left side always sorted
        }
        arr[j + 1] = curr; // arr[j] break inner loop
    }
    return arr;
}

console.log(insertionSort([1, 6, 7, 5]));
console.log(insertionSort([10, 80, 30, 90, 40, 50, 70]));
/*
mark first element as sorted

for each unsorted element X

  'extract' the element X

  for j = lastSortedIndex down to 0

    if current element j > X

      move sorted element to the right by 1

    break loop and insert X here
*/