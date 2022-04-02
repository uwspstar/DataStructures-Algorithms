//88. Merge Sorted Array
/*
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/
{
    //88. Merge Sorted Array
    //因为这两个数组已经排好序，我们可以把两个指针分别放在两个数组的末尾，即 nums1 的 m − 1 位和 nums2 的 n − 1 位。每次将较大的那个数字复制到 nums1 的后边，然后向前移动一位。 因为我们也要定位 nums1 的末尾，所以我们还需要第三个指针，以便复制。
    var merge = function (arr1, M, arr2, N) {
        let p1 = M - 1;
        let p2 = N - 1;
        for (let i = M + N - 1; i >= 0; i--) {
            if (p2 < 0) break;
            if (p1 >= 0 && arr1[p1] >= arr2[p2]) {
                arr1[i] = arr1[p1];
                p1--;
            } else {
                arr1[i] = arr2[p2];
                p2--;
            }
        }
    }
}