// 88. Merge Sorted Array
// backward
{
    var merge = function (nums1, m, nums2, n) {
        //Do not return anything, modify nums1 in-place instead. 
        let p1 = m - 1;
        let p2 = n - 1;
        // <---------i
        //[1,2,3,0,0,0] [2,5,6]
        //.<---p1
        //[2,5,6]
        // <---p2
        //backward
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