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
/*
const findMedianSortedArrays = function (arr1, arr2) {
    if (arr1.length > arr2.length)
        return findMedianSortedArrays(arr2, arr1)
};
*/

// naive : put two arr in one, and find mid
// check merge sort
const findMedianSortedArrays = (arr1, arr2) => {
    let result = [];
    while (arr1.length > 0 && arr2.length > 0) {
        arr1[0] < arr2[0] ? result.push(arr1.shift()) : result.push(arr2.shift());
    }
    result = result.concat(arr1, arr2);

    let mid = result.length >> 1;
    console.log('result', result, 'mid', mid);

    return result.length % 2 === 0
        ? (result[mid - 1] + result[mid]) / 2
        : result[mid];

}

console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([1, 2, 5], [3, 4]));