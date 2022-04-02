/*
https://www.geeksforgeeks.org/quick-sort/
https://blog.bitsrc.io/a-guide-to-sorting-algorithms-in-javascript-5b32da4eae1e
https://www.guru99.com/quicksort-in-javascript.html
https://www.youtube.com/watch?v=ZHVk2blR45Q
https://zh.wikipedia.org/wiki/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F

*** pivot left smaller than pivot (may not in order)
*** pivot right bigger than pivot (may not in order)

Quick Sort O(nlogn)
- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted
(base case)
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot

Mozilla uses merge sort. 
However, In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays. The ECMAscript standard does not specify which sort algorithm is to be used

https://www.geeksforgeeks.org/quick-sort/

Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.


Always pick first element as pivot.
Always pick last element as pivot (implemented below) I use this one
Pick a random element as pivot.
Pick median as pivot.

"Select right pivot will effect sort performance"

How Quick sort works in simple words.

- First select an element which is to be called as pivot element.
- Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right.
- Finally, perform the same operations on left and right side elements to the pivot element.

- But before going forward with the Quick sort, selecting the pivot element plays a major role. 

- If you select the first element as the pivot element, then it gives WORST performance in the sorted array. 

So, it is always advisable to pick the middle element (length of the array divided by 2) as the pivot element and we do the same

https://en.wikipedia.org/wiki/Quicksort

algorithm quicksort(A, lo, hi) is
    if lo < hi then
        p := partition(A, lo, hi)
        quicksort(A, lo, p - 1)
        quicksort(A, p + 1, hi)

algorithm partition(A, lo, hi) is
    pivot := A[hi]
    i := lo
    for j := lo to hi do
        if A[j] < pivot then
            swap A[i] with A[j]
            i := i + 1
    swap A[i] with A[hi]
    return i
    
*/
// quickSort needs swap , but insertionSort does not need swap
const getPivotIndex = function (arr, low, high) {
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    let pivot = arr[high];
    let smallIndex = low;
    for (let i = low; i <= high; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, smallIndex);
            smallIndex++;
        }
    }
    swap(arr, high, smallIndex);
    return smallIndex;
}

const quickSort = function (arr, low = 0, high = arr.length - 1) {
    if (arr.length < 2) return arr;
    if (low < high) {
        let pi = getPivotIndex(arr, low, high);
        quickSort(arr, low, pi - 1); // pi is in right position already
        quickSort(arr, pi + 1, high);
    }
    return arr;
}

const getPivotIndex = function (arr, low, high) {
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    let pivot = arr[high];// always select last one as pivot
    let pi = low; // important
    //[7, 3, 5] -> [3, 7, 5] -> [3, 5, 7]
    // pi       ->     pi

    for (let i = low; i <= high; i++) {
        if (arr[i] < pivot) {
            swap(arr, i, pi);
            pi++; // important
        }
    }

    swap(arr, high, pi);
    return pi;
}

const quickSort = function (arr, low = 0, high = arr.length - 1) {
    if (arr.length < 2) return arr;
    if (low < high) {
        let pi = getPivotIndex(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
    return arr;
}
console.table(quickSort([15, 334, 222, 629, 29, 100]));


/*
function partition(a, left, right, pivotIndex)
 {
     pivotValue = a[pivotIndex]
     swap(a[pivotIndex], a[right]) // 把pivot移到結尾
     storeIndex = left
     for i from left to right-1
     {
         if a[i] <= pivotValue
          {
             swap(a[storeIndex], a[i])
             storeIndex = storeIndex + 1
          }
     }
     swap(a[right], a[storeIndex]) // 把pivot移到它最後的地方
     return storeIndex
 }
這是原地分割演算法，它分割了標示為"左邊（left）"和"右邊（right）"的序列部份，藉由移動小於a[pivotIndex]的所有元素到子序列的開頭，留下所有大於或等於的元素接在他們後面。在這個過程它也為基準元素找尋最後擺放的位置，也就是它回傳的值。它暫時地把基準元素移到子序列的結尾，而不會被前述方式影響到。由於演算法只使用交換，因此最後的數列與原先的數列擁有一樣的元素。要注意的是，一個元素在到達它的最後位置前，可能會被交換很多次。

一旦我們有了這個分割演算法，要寫快速排列本身就很容易：

 procedure quicksort(a, left, right)
     if right > left
         select a pivot value a[pivotIndex]
         pivotNewIndex := partition(a, left, right, pivotIndex)
         quicksort(a, left, pivotNewIndex-1)
         quicksort(a, pivotNewIndex+1, right)



Illustration of partition() :

arr = [10, 80, 30, 90, 40, 50, 70]
Idx =:  0   1   2   3   4   5   6

left = 0, right =  6, pivot = arr[right] = 70
Initialize index of smaller element, i = left

Traverse elements from j = left to right-1
j = 0 : Since arr[j] = 10 < pivot, do swap(arr[i], arr[j]) and i++
             i = 1
arr[] = [10, 80, 30, 90, 40, 50, 70] // No change as i and j  are same

j = 1 : Since arr[j] = 80 > pivot, do nothing // No change in i and arr[]

j = 2 : Since arr[j] = 30 < pivot, do swap(arr[i], arr[j]) and i++
                i = 2
arr = [10, 30, 80, 90, 40, 50, 70] // We swap 80 and 30

j = 3 : Since arr[j] = 90 > pivot, do nothing // No change in i and arr[]

j = 4 : Since arr[j] = 40 < pivot, do swap(arr[i], arr[j]) and i++
                   i = 3
arr = [10, 30, 40, 90, 80, 50, 70] // 80 and 40 Swapped

j = 5 : Since arr[j] = 50 < pivot, do swap(arr[i], arr[j]) and i++
                        i = 4
arr = [10, 30, 40, 50, 80, 90, 70] // 90 and 50 Swapped

We come out of loop
Finally we place pivot at correct position by swapping
arr[i] and arr[right] (or pivot)
arr = [10, 30, 40, 50, 70, 90, 80] // 80 and 70 Swapped

Now 70 is at its correct place. All elements smaller than
70 are before it and all elements greater than 70 are after
it.
*/