//350. Intersection of Two Arrays II
/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2] 

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/
{
    var intersect = function (nums1, nums2) {
        nums1.sort((a, b) => a - b);
        nums2.sort((a, b) => a - b);
        //[4,5,9]
        //[4,4,8,9,9]
        let l = 0, r = 0, ans = [];
        while (l < nums1.length && r < nums2.length) {
            if (nums1[l] === nums2[r]) {
                ans.push(nums1[l]);
                l++;
                r++;
            } else nums1[l] < nums2[r] ? l++ : r++;
        }
        return ans;
    };
}
{
    let intersect = function (nums1, nums2) {
        let result = [];
        //O(M)
        let map = nums1.reduce((acc, i) => {
            acc[i] = acc[i] ? acc[i] + 1 : 1;
            return acc;
        }, {});

        //O(N)
        for (let i = 0; i < nums2.length; i++) {
            let current = nums2[i];
            let currentMapItem = map[current];

            if (currentMapItem && currentMapItem > 0) {
                result.push(current);
                map[current] = currentMapItem - 1;
            }
        }

        return result;
    };
}