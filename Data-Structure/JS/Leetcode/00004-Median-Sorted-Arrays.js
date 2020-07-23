/*
4. Median of Two Sorted Arrays
Hard

- https://www.youtube.com/watch?v=do7ibYtv5nk
- https://www.youtube.com/watch?v=KB9IcSCDQ9k


There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:
nums1 = [1, 3]
nums2 = [2]
The median is 2.0

Example 2:
nums1 = [1, 2]
nums2 = [3, 4]
The median is (2 + 3)/2 = 2.5

*/

// log (m+n) mean using binary search

const findMedianSortedArrays = function (arr1, arr2) {
    if (arr1.length > arr2.length)
        return findMedianSortedArrays(arr2, arr1)  
    // (arr1.length + arr2.length) / 2 cut arr1 at m + arr
   

};