//https://www.geeksforgeeks.org/quickselect-algorithm/

// find the k-th smallest element in an unordered list
// Q: can we find the k-th largest element in an unordered list ?

/*
Quickselect is a selection algorithm to find the k-th smallest element in an unordered list. It is related to the quick sort sorting algorithm.

Input: arr[] = {7, 10, 4, 3, 20, 15} k = 3 Output: 7
Input: arr[] = {7, 10, 4, 3, 20, 15} k = 4 Output: 10

The algorithm is similar to QuickSort. The difference is, instead of recurring for both sides (after finding pivot), it recurs only for the part that contains the k-th smallest element.

The logic is simple, if index of partitioned element is more than k, then we recur for left part. If index is same as k, we have found the k-th smallest element and we return. If index is less than k, then we recur for right part. This reduces the expected complexity from O(n log n) to O(n), with a worst case of O(n^2).

function quickSelect(list, left, right, k)

   if left = right
      return list[left]

   Select a pivotIndex between left and right

   pivotIndex := partition(list, left, right,
                                  pivotIndex)
   if k = pivotIndex
      return list[k]
   else if k < pivotIndex
      right := pivotIndex - 1
   else
      left := pivotIndex + 1
*/