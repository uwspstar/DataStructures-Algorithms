//88. Merge Sorted Array (Easy)
//因为这两个数组已经排好序，我们可以把两个指针分别放在两个数组的末尾，即 nums1 的 m − 1 位和 nums2 的 n − 1 位。每次将较大的那个数字复制到 nums1 的后边，然后向前移动一位。 因为我们也要定位 nums1 的末尾，所以我们还需要第三个指针，以便复制。
var merge = function(arr1, M, arr2, N) {
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