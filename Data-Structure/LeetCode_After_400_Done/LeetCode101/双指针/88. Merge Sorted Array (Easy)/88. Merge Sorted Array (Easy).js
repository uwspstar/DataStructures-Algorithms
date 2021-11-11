//Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//Output: nums1 = [1,2,2,3,5,6]

/*
为这两个数组已经排好序，我们可以把两个指针分别放在两个数组的末尾，即 nums1 的 m − 1 位和 nums2 的 n − 1 位。每次将较大的那个数字复制到 nums1 的后边，然后向前移动一位。 因为我们也要定位 nums1 的末尾，所以我们还需要第三个指针，以便复制。
*/
{
    var merge = function (nums1, m, nums2, n) {
        //Do not return anything, modify nums1 in-place instead. 
        let p1 = m - 1;
        let p2 = n - 1;

        //[1,2,3,0,0,0] [2,5,6] 

        for (let i = m + n - 1; i >= 0; i--) {
            if (p2 < 0) break;

            if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
                nums1[i] = nums1[p1];
                p1--;
            } else {
                nums1[i] = nums2[p2];
                p2--;
            }
        }
    };
}